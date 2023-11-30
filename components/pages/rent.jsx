"use client"
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid, Button, Autocomplete, Paper } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { VehicleDetails, Customers } from '@/data/info';
import { useTranslation } from '@/app/i18n/client';
import { calculateReturnDate, formatDate, formatTime } from '@/helper/dateNow';

const RentNewCar = ({ lng }) => {
  const { control, handleSubmit, setValue , watch , reset } = useForm();
  const router = useRouter()
  const carId = useSearchParams().get('carId');
  const customerID = useSearchParams().get('customerID') || 1;
  const { t } = useTranslation(lng, 'dashboard');
  const car = VehicleDetails.find((car) => car.ID === carId) || null;
  const autocompleteCar = {
    ID: car.ID || '',
    plateNumber: car.plateNumber || '',
    meter: car.meter || '',
    manufactureYear: car.manufactureYear || '',
    extraHourPrice: car.extraHourPrice || '',
    dailyRent: car.dailyRent || '',
    weeklyRent: car.weeklyRent || '',
    monthlyRent: car.monthlyRent || '',
    insuranceCompany: car.insuranceCompany || '',
    extraKilometerPrice: car.extraKilometerPrice || '',
    dailyKilometerLimit: car.dailyKilometerLimit || '',
  };
  const autocompleteCustomer = {
    idNumber: '',
    debt:'' ,
    category:'' ,
    mobile: ''
  };
console.log(autocompleteCustomer);

const handleCustomerSelection = (selectedCustomer) => {
    if (selectedCustomer) {
      const { customerName, idNumber, mobile, debt, category } = selectedCustomer;
      setValue('customerName', customerName);
      setValue('idNumber', idNumber);
      setValue('mobile', mobile);
      setValue('debt', debt);
      setValue('category', category);
    }
  };

  const formatedDays = watch('days')
  const days = parseInt(formatedDays, 10);
  useEffect(() => {
    const updatedDateIn = calculateReturnDate(days);
    setValue('returnDate' , updatedDateIn)
  }, [days]);
  const autocompleteContract = {
      paid: '',
      dateOut: formatDate(), 
      timeOut:formatTime(), 
      returnDate: '', 
      timeIn: formatTime(), 
  };
  const onSubmit = (data) => {
    console.log(data);
    reset()
    router.push('/dashboard')
  };

  return (
    <div className="p-4 h-[94vh] overflow-y-scroll">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='pb-4'>{t("carDetalis")}</h1>
        <Grid container spacing={2}>
          {Object.keys(autocompleteCar).map((key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Controller
                name={key}
                control={control}
                defaultValue={autocompleteCar[key] || ''}
                render={({ field }) => {
                  const isRTL = lng === 'ar';
                  const label = t(`tables.${key}`);
                  return (
                    <TextField
                      {...field}
                      label={label}
                      variant="outlined"
                      fullWidth
                      dir="rtl"
                      sx={{ textAlign: isRTL ? 'right' : 'left' }}
                    />
                  );
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Paper variant="outlined" style={{ margin: '20px 0', padding: '20px' }}>
          <h1 className='pb-4'>{t("customerDetalis")}</h1>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <Controller
                name="customerSearch"
                control={control}
                render={({ field }) => (
                    <Autocomplete
                    {...field}
                    options={Customers} 
                    getOptionLabel={(customer) => `${customer.idNumber} - ${customer.customerName}`}
                    onChange={(event, newValue) => {
                        if (newValue) {
                        const selectedCustomerByID = Customers.find((customer) => customer.idNumber === newValue.idNumber);
                        const selectedCustomerByName = Customers.find((customer) => customer.customerName === newValue.customerName);
                        
                        if (selectedCustomerByID) {
                            handleCustomerSelection(selectedCustomerByID);
                        } else if (selectedCustomerByName) {
                            handleCustomerSelection(selectedCustomerByName);
                        }
                        }
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label={t('tables.customer')} variant="outlined" fullWidth value={''} /> 
                        )}
                    />
                )}
                />
              </Grid>
              {/* Customer details based on autocomplete */}
              {Object.keys(autocompleteCustomer).map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <Controller
                    name={key}
                    control={control}
                    defaultValue={autocompleteCustomer[key] || ''}
                    render={({ field }) => {
                      const isRTL = lng === 'ar';
                      const label = t(`tables.${key}`);
                      return (
                        <TextField
                          {...field}
                          label={label}
                          variant="outlined"
                          fullWidth
                          dir="rtl"
                          sx={{ textAlign: isRTL ? 'right' : 'left' }}
                        />
                      );
                    }}
                  />
                </Grid>
              ))}
          </Grid>
        </Paper>

        <Paper variant="outlined" style={{ margin: '20px 0', padding: '20px' }}>
          <h1 className='pb-4'>{t("contractDetalis")}</h1>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} >
            <Controller
                name="days"
                control={control}
                render={({ field }) => (
                <TextField
                    {...field}
                    label={t('days')}
                    variant="outlined"
                    fullWidth
                    type="number" // Set the input type to number
                    inputProps={{ min: 1, max: 10 }} // Example minimum and maximum values allowed
                />
                )}
            />
            </Grid>
                {Object.keys(autocompleteContract).map((key) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                <Controller
                  name={key}
                  control={control}
                  defaultValue={autocompleteContract[key] || ''}
                  render={({ field }) => {
                    const isRTL = lng === 'ar';
                    const label = t(`tables.${key}`);
                    return (
                      <TextField
                        {...field}
                        label={label}
                        variant="outlined"
                        fullWidth
                        dir="rtl"
                        value={field.value} // Use 'value' instead of 'defaultValue'
                        onChange={(e) => field.onChange(e)} // Ensure 'onChange' is passed
                        sx={{ textAlign: isRTL ? 'right' : 'left' }}
                      />
                    );
                  }}
                />
              </Grid>
              ))}
          </Grid>
        </Paper>
       
        <Button type="submit" variant="contained" color="primary" className="mt-3">
          {t('actions.addNew')}
        </Button>
      </form>
    </div>
  );
};

export default RentNewCar;
