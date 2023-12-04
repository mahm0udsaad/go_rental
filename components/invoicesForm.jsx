"use client"
import React from 'react';
import { Dialog, TextField, Button, Snackbar, Grid, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { useTranslation } from '@/app/i18n/client';
import { nationalitiesArray} from '@/data/info';
import { createVehicle } from '@/prisma';
import { useSystemContext } from '@/context/context';
import { useRouter } from 'next/navigation';
import { convertFieldsToInt } from '@/helper/convertors';

  export const InvoiceFormModal = ({requiredKeys, userId ,isOpen, setIsOpen, formData , formTitle, cars, customers , lng}) => {
  const { t } = useTranslation(lng , 'dashboard')
  const {  setSubmitted , displaySuccessMessage} = useSystemContext()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    setValue, 
    formState: { errors },
  } = useForm();
  const maintenanceTypes = [
    'غيار زيت',
    'غيار إطارات',
    'بنشر',
    'تعبئة وقود',
    'اخري',
  ];

  const onSubmit = (data) => {
    data = {...data , userId}
    data = convertFieldsToInt(data);
    createVehicle(data)
    .then((result) => {
      setSubmitted(true);
      reset()
      router.refresh()
    })
    .catch((error) => {
      console.error( error);
    });
  }

  const getType = (key) => {
    if (key.includes('Date')) {
      return 'date';
      
    } else if (
      key.includes('dailyKilometerLimit') ||
      key.includes('extraKilometerPrice') ||
      key.includes('extraHourPrice') ||
      key.includes('manufactureYear') ||
      key.includes('rentalCount') ||
      key.includes('meter') ||
      key.includes('extraHourPrice') ||
      key.includes('Rent') ||
      key.includes('remainingDues') ||
      key.includes('debt') ||
      key.includes('cost') ||
      key.includes('price') ||
      key.includes('paid') ||
      key.includes('total') ||
      key.includes('amount') ||
      key.includes('maintenance')
    ) {
      return 'number';
    } else {
      return 'text';
    }
  };
  const renderTextField = (key, formattedKey) => {
    const isRequired = requiredKeys.includes(key);

    return (
      <Grid item xs={12} sm={6} md={4} key={key}>
        <TextField
          {...register(key)}
          label={formattedKey}
          defaultValue={formData[key]}
          variant="outlined"
          fullWidth
          required={isRequired}
          type={getType(key)}
          error={!!errors[key]}
          helperText={errors[key] && 'This field is required'}
          InputLabelProps={{
            shrink: key.includes('Date'),
            placeholder: key.includes('Date') ? 'Select Date' : '',
          }}
          inputProps={{
            step: 'any', // Allows both integers and decimal numbers
          }}
        />
      </Grid>
    );
  };

return (
  <div className="flex justify-center items-center h-screen">
    {displaySuccessMessage()}
    <Dialog
    open={isOpen}
    onClose={() => setIsOpen(false)}
    fullWidth
    maxWidth="md" // Adjust as needed
    PaperProps={{ style: { width: '90%', maxHeight: '90vh', overflowY: 'auto' } }}
    >
      <div className="flex justify-between items-center">
      <h1 className="p-4 text-xl font-semibold">{t(`tables.${formTitle}`)}</h1>
        <button
        onClick={() => setIsOpen(false)}
        className="m-4 text-3xl  flex justify-center items-center self-end"
        style={{ borderRadius: '50%', width: '40px', height: '40px', minWidth: 'auto' }}
        >
        <IoIosCloseCircleOutline className="text-rose-800" />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <Grid container spacing={2} className="pb-8">
        {Object.keys(formData).map((key) => {
        const formattedKey = t(`tables.${key}`)
        if (key === 'maintenanceType') {
        return (
          <Grid xs={12} sm={6} md={4} key={key}>
          <Autocomplete
          options={maintenanceTypes}
          getOptionLabel={(type) => `${type}`}
          onChange={(event, newValue) => {
            if (newValue) {
              setValue(key, newValue); // Update value using setValue
            }
          }}
          renderInput={(params) => (
          <TextField {...params} label={formattedKey} variant="outlined" fullWidth />
          )}
          />
          {errors[key] && <span>This field is required</span>}
          </Grid>
        );
        } 
        if (key === 'car' && cars) {
        return (
        <Grid xs={12} sm={6} md={4} key={key}>
        <Autocomplete
        options={cars}
        getOptionLabel={(car) => `${car.plateNumber} - ${car.brand} - ${car.status}`}
        onChange={(event, newValue) => {
          if (newValue) {
            setValue('Plate', newValue.plateNumber); 
            setValue('Brand', newValue.brand); 
          }
        }}
        renderInput={(params) => (
        <TextField {...params} label={formattedKey} variant="outlined" fullWidth />
        )}
        />
        {errors[key] && <span>This field is required</span>}
        </Grid>
        );
        } else if (key === 'customerName' && customers) {
        return (
        <Grid xs={12} sm={6} md={4} key={key}>
        <Autocomplete
        options={customers}
        getOptionLabel={(customer) => `${customer.customerName}`}
        onChange={(event, newValue) => {
        if (newValue) {
        setValue('Name' , newValue.customerName)
        }
        }}
        renderInput={(params) => (
        <TextField {...params} label={formattedKey} variant="outlined" fullWidth />
        )}
        />
        {errors[key] && <span>This field is required</span>}
        </Grid>
        );
        } else if (key === 'nationality' && nationalitiesArray) {
          return (
            <Grid xs={12} sm={6} md={4} key={key}>
              <InputLabel>{formattedKey}</InputLabel>
              <Select
                {...register(key)}
                label={formattedKey}
                variant="outlined"
                fullWidth
                defaultValue="" 
              >
                {nationalitiesArray.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              {errors[key] && <span>This field is required</span>}
            </Grid>
          );
        }else if (key === 'transmission') {
          return (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Autocomplete
                options={['automatic', 'manual']}
                value='automatic'
                onChange={(event, newValue) => {
                  if (newValue) {
                    setValue(key, newValue); 
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label={formattedKey} variant="outlined" fullWidth />
                )}
              />
              {errors[key] && <span>This field is required</span>}
            </Grid>
          );
        }else {
          return renderTextField(key, formattedKey);
        }
        })}
        </Grid>
        <Button type="submit" variant="contained" color="success" className="mt-3 bg-green-500">
        {t("tables.submit")}
        </Button>
      </form>
    </Dialog>
  </div>
);
};
