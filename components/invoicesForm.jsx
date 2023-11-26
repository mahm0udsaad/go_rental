import React, { useState } from 'react';
import { Dialog, TextField, Button, Snackbar, Grid , InputLabel, Select, MenuItem } from '@mui/material';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from "react-icons/io";

const MyFormModal = ({isOpen, setIsOpen, formData, setFormData , formTitle}) => {

  const [submitted, setSubmitted] = useState(false);
  const maintenanceTypes = [
    'غيار زيت',
    'غيار إطارات',
    'بنشر',
    'تعبئة وقود',
    'اخري',
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log(formData);
    // For demonstration purposes, let's assume a successful submission
    clearInputs()
    setSubmitted(true);
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

  const renderFormInputs = () => {
    return Object.keys(formData).map((key) => {
      const formattedKey = key
      .replace(/([a-z])([A-Z])/g, '$1 $2') 
      .replace(/_/g, ' ') 
      .toLowerCase(); 

      if (key === 'maintenanceType') {
        return (
          <Grid item xs={12} sm={6} key={key}>
            <Select
            label={formattedKey}
            value={formData[key]} 
            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
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
          </Grid>
        );
      } else {
        return (
          <Grid item xs={12} sm={6} key={key}>
            <TextField
              label={formattedKey}
              value={formData[key]}
              onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
              variant="outlined"
              fullWidth
            />
          </Grid>
        );
      }
    });
  };
  

  const clearInputs = () => {
    setFormData({
      id: '',
      date: '',
      customer: '',
      amount: '',
      description: '',
      price: '',
      total: '',
      paid: '',
      debt: '',
      addtax: '',
    });
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
      <h1 className='p-4 text-xl font-semibold'>{formTitle}</h1>
        <button
          onClick={() => setIsOpen(false)}
          className="m-4 text-3xl  flex justify-center items-center self-end"
          style={{ borderRadius: '50%', width: '40px', height: '40px', minWidth: 'auto' }}
        >
        <IoIosCloseCircleOutline className='text-rose-800' />
        </button>

      </div>
      {displaySuccessMessage()}
      <form onSubmit={handleSubmit} className="p-4">
        <Grid container spacing={2} className='pb-8'>
          {renderFormInputs()}
        </Grid>
        <Button type="submit" variant="contained" color="success" className="mt-3">
          Submit
        </Button>
      </form>
    </Dialog>
    </div>
  );
};

export default MyFormModal;
