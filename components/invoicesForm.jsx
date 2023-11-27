"use client"
import React, { useState } from 'react';
import { Dialog, TextField, Button, Snackbar, Grid, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { formatDate } from '@/helper/dateNow';
import { useTranslation } from '@/app/i18n/client';

export const InvoiceFormModal = ({ isOpen, setIsOpen, formData,setFormData , formTitle, cars, customers , lng}) => {
  const { t } = useTranslation(lng , 'dashboard')
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const maintenanceTypes = [
    'غيار زيت',
    'غيار إطارات',
    'بنشر',
    'تعبئة وقود',
    'اخري',
  ];
  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset(); 
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }
    setSubmitted(false);
  };
  const displaySuccessMessage = () => {
    if(!submitted) return ;
    return (
      <>
      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={handleClose}
        message={
          <div className="flex items-center">
            <FaRegCheckCircle className="text-green-500 mr-2" />
            <span className="block sm:inline">Form submitted successfully!</span>
          </div>
        }
      />
      </>
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
        <Grid item xs={12} sm={6} key={key}>
        <InputLabel>{formattedKey}</InputLabel>
        <Select
        {...register(key, { required: true })}
        fullWidth
        variant="outlined"
        displayEmpty // Allows an empty item to be displayed
        >
        <MenuItem value="" disabled>
          Select {key}
        </MenuItem>
        {maintenanceTypes.map((type, index) => (
          <MenuItem key={index} value={type}>
            {type}
          </MenuItem>
        ))}
        </Select>
        {errors[key] && <span>This field is required</span>}
        </Grid>
        );
        } 
        if (key === 'car' && cars) {
        return (
        <Grid item xs={12} sm={6} key={key}>
        <Autocomplete
        options={cars}
        getOptionLabel={(car) => `${car.plateNumber} - ${car.brand} - ${car.status}`}
        onChange={(event, newValue) => {
        if (newValue) {
        setFormData((prevData) => ({
          ...prevData,
          Plate: newValue.plateNumber,
          Brand: newValue.brand,
        }));
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
        <Grid item xs={12} sm={6} key={key}>
        <Autocomplete
        options={customers}
        getOptionLabel={(customer) => `${customer.fullName}`}
        onChange={(event, newValue) => {
        if (newValue) {
        setFormData((prevData) => ({
          ...prevData,
          Name: `${newValue.firstName} ${newValue.lastName}`,
        }));
        }
        }}
        renderInput={(params) => (
        <TextField {...params} label={formattedKey} variant="outlined" fullWidth />
        )}
        />
        {errors[key] && <span>This field is required</span>}
        </Grid>
        );
        } else {
        return (
        <Grid item xs={12} sm={6} key={key}>
          <TextField
            {...register(key)}
            label={formattedKey}
            value={key.includes('Date') || key.includes('dateOut') ? formatDate() : ''}
            variant="outlined"
            fullWidth
            required={key !== 'RemainingDues' && key !== 'ContractDebt'}
            type={key.includes('Date') ? 'date' : 'text'}
            error={!!errors[key]}
            helperText={errors[key] && 'This field is required'}
          />
        </Grid>
        );
        }
        })}
        </Grid>
        <Button type="submit" variant="contained" color="success" className="mt-3">
        {t("tables.submit")}
        </Button>
      </form>
    </Dialog>
  </div>
);
};
