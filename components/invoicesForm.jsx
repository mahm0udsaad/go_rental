"use client"
import React, { useEffect, useState } from 'react';
import { Dialog, TextField, Button, Snackbar, Grid, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { useTranslation } from '@/app/i18n/client';
import { nationalitiesArray} from '@/data/info';
import { createVehicle, updateVehicle, updateVehicleById } from '@/prisma';
import { useSystemContext } from '@/context/context';
import { useRouter } from 'next/navigation';
import { convertFieldsToNumber } from '@/helper/convertors';
import { DisplaySuccessMessage, ErrorMessage } from './messages';

export const InvoiceFormModal = ({requiredKeys, userId ,isOpen, setIsOpen, formData , formTitle, cars, customers , lng}) => {
  const { t } = useTranslation(lng , 'dashboard')
  const { setErrorMessage , setSuccessMessage ,setSubmitted} = useSystemContext()
  const router = useRouter()
  console.log('form');
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
    data = convertFieldsToNumber(data);
    createVehicle(data)
    .then((result) => {
      if (result.error) {
        console.error(result.error);
        setErrorMessage(`vehicleExists`);
      } else {
        setSubmitted(true);
        setSuccessMessage('vehicleCreatedSuccess');
        reset();
        router.refresh();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
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
    <Dialog
    open={isOpen}
    onClose={() => setIsOpen(false)}
    fullWidth
    maxWidth="md" // Adjust as needed
    PaperProps={{ style: { width: '90%', maxHeight: '90vh', overflowY: 'auto' } }}
    >
      <ErrorMessage lng={lng}/>
      <DisplaySuccessMessage lng={lng}/>
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

export const EditVehicleForm = ({ lng, isOpen, setIsOpen, formData }) => {
  const { t } = useTranslation(lng , 'dashboard')
  const router = useRouter()
  const keys = formData ? Object.keys(formData).filter(key => key !== 'userId' && key !== 'id') : [];
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: formData }); // Set default values for the form fields
  const {setSuccessMessage,  setErrorMessage } = useSystemContext()
  const [isLinkLoading, setLinkLoading] = useState(false);
  const [linkDisabled, setlinkDisabled] = useState(false);

  const onSubmit = async (data) => {  
    setlinkDisabled(true);
    setLinkLoading(true);
    data = convertFieldsToNumber(data); 
    console.log(data);
    try {
      const updatedData = await updateVehicleById(formData.id, data);
  
      if (updatedData) {
        setSuccessMessage("editCarSuccessful");
        setIsOpen(false);
        router.push('/dashboard');
        router.refresh();
      } else {
        console.log(`can't update car`);
      }
    } catch (error) {
      console.error('Error updating vehicle:', error);
    } finally {
      setlinkDisabled(false);
      setLinkLoading(false);
    }
  };
  

  return (
    <div className="flex absolute top-0 justify-center items-center h-screen">
      <Dialog
        open={isOpen}
        onClose={()=> setIsOpen(false)}
        fullWidth
        maxWidth="md" // Adjust as needed
        PaperProps={{ style: { width: '90%', maxHeight: '90vh', overflowY: 'auto' } }}
      >

        <div className="flex justify-between items-center">
          <h1 className="p-4 text-xl font-semibold">Edit Vehicle Details</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <Grid container spacing={2} className="pb-8">
            {keys.map((key) => {
              const value = formData[key];
              return (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <TextField
                    {...register(key)}
                    label={key}
                    defaultValue={value}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              );
            })}
          </Grid>
          <div className="flex gap-4">
            <Button disabled={linkDisabled} type="submit" variant="contained" color="success" className="mt-3">
              {isLinkLoading?(
                <div className="flex justify-center items-center">
                <div className="border-t-4 border-blue-500 rounded-full animate-spin h-5 w-5"></div>
            </div>
              ):(
               t('tables.edit')
              )}
            </Button>
            <Button
              onClick={() => {
                setIsOpen(false)
                router.push('/dashboard')
                router.refresh()
              }
              }        
              variant="contained"
              color="error"
              className="mt-3"
            >
              {t('tables.close')}
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};