"use client"
import { getAllCars } from '@/prisma';
import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { Dialog, TextField, Button, Snackbar, Grid, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
import { FaRegCheckCircle } from 'react-icons/fa';

const SystemContext = createContext();

export const useSystemContext = () => {
  const context = useContext(SystemContext);
  if (!context) {
    throw new Error('useSystemContext must be used within a SystemProvider');
  }
  return context;
};

export const SystemProvider = ({ children }) => {
  const [addNew, setAddNew] = useState(false);
  const [userId, setUserId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLinkLoading, setLinkLoading] = useState(false);
  const [linkDisabled, setlinkDisabled] = useState(false);
  
  const handleButtonClick = () => {
    setLinkLoading(true);
    setlinkDisabled(true)
  };

  useEffect(() => {
    let timeoutId;

    if (successMessage) {
      timeoutId = setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('')
      }, 5000); 
    }

    return () => {
      // Clear timeout on component unmount or when successMessage changes
      clearTimeout(timeoutId);
    };
  }, [successMessage, setSuccessMessage ,errorMessage, setErrorMessage]);
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
            <span className="block sm:inline">Form submitted successfully</span>
          </div>
        }
      />
      </>
    );
  };
  return (
    <SystemContext.Provider value={{isLinkLoading, setLinkLoading ,linkDisabled, setlinkDisabled ,handleButtonClick,successMessage, setSuccessMessage,errorMessage, setErrorMessage,displaySuccessMessage, addNew, setAddNew, userId, setUserId,submitted, setSubmitted }}>
      {children}
    </SystemContext.Provider>
  );
};
