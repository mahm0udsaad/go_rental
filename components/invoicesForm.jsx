"use client"
import React, { useEffect, useState } from 'react';
import { Dialog, TextField, Button, Snackbar, Grid, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from '@/app/i18n/client';
import { nationalitiesArray , maintenanceTypes} from '@/data/info';
import { createVehicle, updateVehicle, updateVehicleById } from '@/prisma';
import { useSystemContext } from '@/context/context';
import { useRouter } from 'next/navigation';
import { convertFieldsToNumber } from '@/helper/convertors';
import { createCustomer } from '@/prisma/customers';
import { createMaintenanceForVehicle } from '@/prisma/maintan';

export const InvoiceFormModal = ({requiredKeys, userId ,isOpen, setIsOpen, formData , formTitle, cars, customers , lng , type}) => {
  const { t } = useTranslation(lng , 'dashboard')
  const { setErrorMessage , setSuccessMessage ,setSubmitted , setAddNew} = useSystemContext()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data = { ...data};
    data = convertFieldsToNumber(data);
    if (type === 'customer') {
      createCustomer(data , userId)
        .then((result) => {
          if (result.error) {
            console.error(result.error);
            setErrorMessage('customerExists');
          } else {
            setAddNew(false)
            setSubmitted(true);
            setSuccessMessage('customerCreatedSuccess');
            reset();
            router.refresh();
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }  else if (type === 'maintenance') {
      createMaintenanceForVehicle(data.plateNumber,userId, data)
        .then((newMaintenance) => {
          setAddNew(false)
          setSubmitted(true);
          setSuccessMessage('maintenanceCardCreated');
          reset();
          router.refresh();
        })
        .catch((error) => {
          console.error('Error creating maintenance for vehicle:', error);
        });
    } else {
      createVehicle(data , userId)
        .then((result) => {
          if (result.error) {
            console.error(result.error);
            setErrorMessage('vehicleExists');
          } else {
            setAddNew(false)
            setSubmitted(true);
            setSuccessMessage('vehicleCreatedSuccess');
            reset();
            router.refresh();
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
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
          <Grid item xs={12} sm={6} md={4} key={key}>
          <Autocomplete
          options={maintenanceTypes}
          getOptionLabel={(type) => `${type}`}
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
        } else if (key === 'category') {
          return (
           <Grid item xs={12} sm={6} md={4} key={key} >
             <Autocomplete
              options={['individual', 'company'].map((option) => ({
                value: option,
                label: t(`tables.${option}`), 
              }))}
              onChange={(e, value) => {
                setValue(key, value.value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t(`tables.${key}`)}
                  variant="outlined"
                  fullWidth
                  dir="rtl"
                />
              )}
            />
           </Grid>
          );
        }else if (key === 'plateNumber' && cars) {
        return (
        <Grid item xs={12} sm={6} md={4} key={key}>
        <Autocomplete
        options={cars}
        getOptionLabel={(car) => `${car.plateNumber} - ${car.brand} - ${car.status}`}
        onChange={(event, newValue) => {
          if (newValue) {
            setValue('plateNumber', newValue.plateNumber); 
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
            <Grid item xs={12} sm={6} md={4} key={key}>
            <Autocomplete
                {...register(key)}
                options={nationalitiesArray}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={formattedKey}
                    variant="outlined"
                    fullWidth
                    error={!!errors[key]}
                    helperText={errors[key] && 'This field is required'}
                  />
                )}
              />
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