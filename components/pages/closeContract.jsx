"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getContractByPlate, getContractByPlateNumber } from '@/prisma/contracts';
import { Paper, Typography, Grid, Stepper, Step, StepLabel, TextField, Button, Autocomplete } from '@mui/material';
import { useTranslation } from '@/app/i18n/client';
import {  calculateHoursDifference, calculateLateHoursOrDays } from '@/helper/calc';
import { useForm, Controller } from 'react-hook-form';
import { convertFieldsToNumber } from '@/helper/convertors';

const CloseContract = ({ lng }) => {
  const { t } = useTranslation(lng , "dashboard")
  const [contract, setContract] = useState(null);
  const plateNumber = useSearchParams().get('forPlateNumber');
  const { handleSubmit, control , watch , setValue} = useForm();
  const isAr = lng === 'ar';
  useEffect(() => {
    getContractByPlateNumber(plateNumber)
      .then((contractData) => {
        setContract({...contractData , days:3});
      })
      .catch((error) => {
        console.error('Error fetching contract:', error);
      });
  }, []);
  if (!contract) {
    return <div>Loading...</div>;
  }


  const handleColorChangeBasedOnStatus = (status) => {
    switch (status) {
      case "FreeHours":
        return 'bg-green-500';
      case "lateInHours":
        return 'bg-red-500';
      case "earlyInDays":
        return 'bg-green-500';
      case "lateInDays":
        return 'bg-red-500';
      default:
        return '';
    }
  }

  const steps = ['dateOut', 'returnedDate'];
  const lateHoursOrDays = calculateLateHoursOrDays(contract , 6);
  let total = contract.total ;
  let lateFees = 0
  let additionalKilloMetersFees = 0
  let remainingDues = contract.remainingDues
  let paid = watch('paid')

    if ('lateInHours' in lateHoursOrDays){
       total =  contract.total + lateHoursOrDays[Object.keys(lateHoursOrDays)[0]] * contract.vehicle.extraHourPrice
     lateFees = lateHoursOrDays[Object.keys(lateHoursOrDays)[0]] * contract.vehicle.extraHourPrice
     remainingDues = Math.floor(total - paid )
     setValue('total',total)
    }
    if("lateInDays" in lateHoursOrDays){
      total =  contract.total + lateHoursOrDays[Object.keys(lateHoursOrDays)[0]] * contract.dailyRent
     lateFees = lateHoursOrDays[Object.keys(lateHoursOrDays)[0]] * contract.dailyRent
     remainingDues = Math.floor(total - paid )
     setValue('total',total)
    }
    if("earlyInDays" in lateHoursOrDays){
      total =  contract.total - lateHoursOrDays[Object.keys(lateHoursOrDays)[0]] * contract.dailyRent
     remainingDues = Math.floor(total - paid )
     setValue('total',total)
    }
    const options = [
      { value: 'VIP', label: t('customerEvaluationOptions.VIP') },
      { value: 'Good', label: t('customerEvaluationOptions.Good') },
      { value: 'Bad', label: t('customerEvaluationOptions.Bad') }
    ];

    const discountOptions = [
      { label: 'No Discount', value: 0 },
      { label: '10% Discount', value: 0.1 },
      { label: '15% Discount', value: 0.15 },
      { label: '25% Discount', value: 0.25 },
      { label: '50% Discount', value: 0.5 },
    ];

  const meterReadingIn = watch('meterReadingIn')
  let totalMeter = meterReadingIn - contract.meterReadingOut
  let totalKillometer = contract.days * contract.vehicle.dailyKilometerLimit
  if(totalMeter > totalKillometer){
   let additionalKilloMeters=  totalMeter - totalKillometer  
   additionalKilloMetersFees = Math.floor(additionalKilloMeters * contract.vehicle.extraKilometerPrice)
   total = Math.floor(total + additionalKilloMetersFees)
   remainingDues = Math.floor(total - paid )
   
   setValue('addKillometerFess',additionalKilloMetersFees)

  }
  console.log("الباقي"+" "+remainingDues);
  setValue('total',total)

  const onSubmit = (data) =>{
    setValue('remainingDues',0)
    setValue('paid',total)
    data = convertFieldsToNumber(data)
    console.log(data);
  }
  return (
    <div className="container mx-auto">
        <Typography variant="h4" color="primary" gutterBottom>
          {t('titles.closeContract')}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {t('messages.contractDetails')} {plateNumber}
        </Typography>
        <div className="flex flex-col items-center w-full" >
          <Stepper className={`p-4 w-full ${isAr ? 'flex-row-reverse' : ''}`} activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
              <StepLabel>{t(`tables.${label}`)}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Grid className={` ${isAr ? 'flex-row-reverse' : ''}`} container spacing={2}>
            {/* Date Out */}
              <Grid className={`px-4 ${isAr ? 'justify-start' : 'justify-end'} flex`} item xs={12} sm={6} md={4}>
                <Typography variant="body1">{contract.dateOut}</Typography>
              </Grid>
              {/* Returned Date */}
              <Grid className={`items-center justify-center flex `} item xs={12} sm={6} md={4}>
               <div className={`flex flex-col justify-between items-center rounded-xl px-4 py-2 text-white ${handleColorChangeBasedOnStatus(Object.keys(lateHoursOrDays)[0])}`}>
               <h1 className='text-xl'>
                {t(`messages.${Object.keys(lateHoursOrDays)[0]}`)}
                </h1>
                <span className='text-lg'>{lateHoursOrDays[Object.keys(lateHoursOrDays)[0]]}</span>
               </div>
              </Grid>
              <Grid className={`px-4 ${isAr ? 'justify-end' : 'justify-start'} flex`} item xs={12} sm={6} md={4}>
                <Typography variant="body1">{contract.returnedDate}</Typography>
              </Grid>
              {/* Editable Inputs */}
              <Grid item xs={12} sm={6} md={4}>
              <Controller
                name="total"
                control={control}
                render={({ field }) => {
                  const calculatedTotal = total - paid;
                  const displayTotal = isNaN(calculatedTotal) ? 0 : calculatedTotal.toFixed(2);

                  return (
                    <TextField
                      {...field}
                      label={t('tables.total')}
                      value={total}
                      InputProps={{ readOnly: true }}
                      fullWidth
                    />
                  );
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Controller
                name="paid"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    defaultValue={contract.paid}
                    label={t('tables.paid')}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Controller
                name="remainingDues"
                control={control}
                value={remainingDues}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={
                      contract.remainingDues < 0
                        ? t('tables.remainingDuesToCustomer')
                        : t('tables.remainingDues')
                    }
                    InputProps={{ readOnly: true }}
                    readOnly={true}
                    value={remainingDues || contract.remainingDues}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Controller
                name="lateFees"
                control={control}
                defaultValue={lateFees || 0}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('tables.lateFees') }
                    InputProps={{ readOnly: true }}
                    readOnly={true}
                    defaultValue={lateFees}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Controller
                name="addKillometerFess"
                control={control}
                defaultValue={additionalKilloMetersFees }
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('tables.addKillometerFees') }
                    InputProps={{ readOnly: true }}
                    readOnly={true}
                    value={additionalKilloMetersFees}
                    fullWidth
                  />
                )}
              />
            </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label={t('tables.dailyKilometerLimit')}
                  value={contract.vehicle?.dailyKilometerLimit}
                  InputProps={{ readOnly: true }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name="meterReadingOut"
                  control={control}
                  defaultValue={contract.meterReadingOut} 
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('tables.meterReadingOut')}
                      InputProps={{ readOnly: true }}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name="meterReadingIn"
                  control={control}
                  required={true}
                  defaultValue={contract.meterReadingIn} 
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('tables.meterReadingIn')}
                      required
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name="customerName"
                  control={control}
                  defaultValue={contract.customer?.customerName} 
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('tables.customerName')}
                      InputProps={{ readOnly: true }}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name="debt"
                  control={control}
                  defaultValue={contract.customer?.debt} 
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('tables.debt')}
                      InputProps={{ readOnly: true }}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Controller
                name="idNumber"
                control={control}
                defaultValue={contract.customer?.idNumber} 
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('tables.idNumber')}
                    InputProps={{ readOnly: true }}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Autocomplete
                options={options}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t('customerEvaluation')}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Controller
              name="discount"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={discountOptions}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setValue('discount', newValue.value);
                    }
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Discount" variant="outlined" />
                  )}
                />
              )}
            />
            </Grid>
          </Grid>
          <div className="flex gap-4">
          <Button type='submit' style={{marginTop:'2rem'}} variant="contained" color="success" onClick={handleSubmit}>
            {t('titles.closeContractWithPayment')}
          </Button>

          <Button type='submit' style={{marginTop:'2rem'}} variant="contained" color="error" onClick={handleSubmit}>
            {t('titles.closeContractWithDebt')}
          </Button>
          </div>
          </form>
        </div>
    </div>
  );
};

export default CloseContract;

