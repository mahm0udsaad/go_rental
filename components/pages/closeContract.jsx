"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {  getContractByPlateNumber } from '@/prisma/contracts';
import { Paper, Typography, Grid, Stepper, Step, StepLabel, TextField, Button, Autocomplete } from '@mui/material';
import { useTranslation } from '@/app/i18n/client';
import {  calculateLateHoursOrDays } from '@/helper/calc';
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

  const steps = [{lable:'dateOut' , value: contract.dateOut}, {lable:'returnedDate',value:contract.returnedDate}];
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
    setValue('remainingDues',remainingDues)
    setValue('paid',paid)
    data = convertFieldsToNumber(data)
    console.log(data);
  }
  return (
    <div className="container mx-auto">
        <Grid className={`items-center justify-between flex `} item xs={12} sm={6} md={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          {t('titles.closeContract')}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {t('messages.contractDetails')} {plateNumber}
        </Typography>
               <div className={`flex flex-col justify-between items-center rounded-xl px-4 py-2 text-white ${handleColorChangeBasedOnStatus(Object.keys(lateHoursOrDays)[0])}`}>
               <h1 className='text-xl'>
                {t(`messages.${Object.keys(lateHoursOrDays)[0]}`)}
                </h1>
                <span className='text-lg'>{lateHoursOrDays[Object.keys(lateHoursOrDays)[0]]}</span>
               </div>
              </Grid>
        <div className="flex flex-col items-center w-full" >
          <Stepper className={`p-4 w-full ${isAr ? 'flex-row-reverse' : ''}`} activeStep={1} alternativeLabel>
            {steps.map((item) => (
              <Step key={item.lable}>
              <StepLabel>{t(`tables.${item.lable}`)} <br />  <span className='pt-4'>{item.value}</span> </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Stepper className={`p-4 w-full ${isAr ? 'flex-row-reverse' : ''}`} activeStep={1,2,3} alternativeLabel>
              <Step >
              <StepLabel>{t(`tables.paid`)} <br />  <span className='pt-4'>{contract.paid}</span> </StepLabel>
              </Step>
              <Step >
              <StepLabel>{t(`tables.remainingDues`)} <br />  <span className='pt-4'>{contract.remainingDues}</span> </StepLabel>
              </Step>
              {lateFees > 0 && 
              <Step >
              <StepLabel>{t(`tables.lateFees`)} <br />  <span className='pt-4'>{lateFees}</span> </StepLabel>
              </Step>
              }
              {additionalKilloMetersFees > 0 && 
              <Step >
              <StepLabel>{t(`tables.additionalKilloMetersFees`)} <br />  <span className='pt-4'>{additionalKilloMetersFees}</span> </StepLabel>
              </Step>
              }
              <Step >
              <StepLabel>{t(`tables.total`)} <br />  <span className='pt-4'>{total}</span> </StepLabel>
              </Step>
          </Stepper>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Grid className={` ${isAr ? 'flex-row-reverse' : ''}`} container spacing={2}>
{/* 
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
              </Grid> */}
{/* 
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
              </Grid> */}

              {/* <Grid item xs={12} sm={6} md={4}>
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
              </Grid> */}
              <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                  <TextField
                    label={t('tables.meterReadingIn')}
                    required
                    fullWidth
                    className="w-full mb-4"
                    variant="outlined"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                  <Autocomplete
                    options={options}
                    defaultValue={options[1].label}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={t('customerEvaluation')}
                        defaultValue={options[0].label}
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        className="w-full mb-4"
                      />
                    )}
                  />
                </div>

                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                  <Controller
                    name="discount"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Autocomplete
                      options={discountOptions}
                      defaultValue={discountOptions[0].label}
                        onChange={(event, newValue) => {
                          onChange(newValue ? newValue.value : '');
                        }}
                        value={value !== '' ? discountOptions.find(option => option.value === value) : null}
                        renderInput={(params) => (
                          <TextField {...params} defaultValue={discountOptions[0].label} label="Discount" variant="outlined" className="w-full mb-4" />
                        )}
                      />
                    )}
                  />
                </div>
                
              </div>
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

