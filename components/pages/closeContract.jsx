"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getContractByPlate, getContractByPlateNumber } from '@/prisma/contracts';
import { Paper, Typography, Grid, Stepper, Step, StepLabel, TextField, Button } from '@mui/material';
import { useTranslation } from '@/app/i18n/client';
import {  calculateHoursDifference, calculateLateHoursOrDays } from '@/helper/calc';
import { useForm, Controller } from 'react-hook-form';

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
  const onSubmit = (data) =>{
    console.log(data);
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

  const lateHoursOrDays = calculateLateHoursOrDays(contract , 6);
  const steps = ['dateOut', 'returnedDate'];
  let total = 0 ;
    if ('lateInHours' in lateHoursOrDays){
    total =  contract.total - lateHoursOrDays[Object.keys(lateHoursOrDays)[0]] * contract.vehicle.extraHourPrice
     setValue('total',total)
    }
    if("lateInDays" in lateHoursOrDays){
      total =  contract.total + lateHoursOrDays[Object.keys(lateHoursOrDays)[0]] * contract.dailyRent
     setValue('total',total)
    }
    if("earlyInDays" in lateHoursOrDays){
      total =  contract.total - lateHoursOrDays[Object.keys(lateHoursOrDays)[0]] * contract.dailyRent
     setValue('total',total)
    }
  contract.remainingDues = total - contract.paid ;
  const meterReadingIn = watch('meterReadingIn')
  let paid = watch('paid')

  let totalMeter = meterReadingIn - contract.meterReadingOut
  let totalKillometer = contract.days * contract.vehicle.dailyKilometerLimit
  if(totalMeter > totalKillometer){
   const additionalKilloMeters=  totalMeter - totalKillometer  
   const additionalKilloMetersFees = additionalKilloMeters * contract.vehicle.extraKilometerPrice
   total = total + additionalKilloMetersFees
   contract.remainingDues = total - contract.remainingDues
   setValue('remainingDues',contract.remainingDues)
   setValue('total',total)
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
                <TextField
                  label={t('tables.total')}
                  value={total}
                  InputProps={{ readOnly: true }}
                  onChange={(e) => handleInputChange('total', e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Controller
                  name="paid"
                  control={control}
                  defaultValue={contract.paid}
                  render={({ field }) => (
                    <TextField
                      {...field}
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
                  value={contract.remainingDues}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={contract.remainingDues < 0 ? t('tables.remainingDuesToCustomer') : t('tables.remainingDues')}
                      InputProps={{ readOnly: true }}
                      value={Math.abs(contract.remainingDues)}
                      onChange={(e) => handleInputChange('remainingDues', e.target.value)}
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

          </Grid>
          <Button type='submit' style={{marginTop:'2rem'}} variant="contained" color="error" onClick={handleSubmit}>
            {t('titles.closeContract')}
          </Button>
          </form>
        </div>
    </div>
  );
};

export default CloseContract;

