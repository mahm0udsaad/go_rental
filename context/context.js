"use client"
import { getAllCars, getVehicleById } from '@/prisma';
import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { Dialog, TextField, Button, Snackbar, Grid, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [car, setCar] = useState(false);
  const [openModal, setIsOpen] = useState(false);
  const editParam = useSearchParams().get('edit')
  const deleteParam = useSearchParams().get('delete')
  const carId = useSearchParams().get('carId')
  
    useEffect(()=>{
      if(!carId){
      return;
      }
        getVehicleById(carId)
      .then(res => {
        setCar(res); 
        setIsOpen(true)
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
    },[carId])

    useEffect(()=>{
      if(editParam){
        getVehicleById(editParam)
      .then(res => {
        setCar(res); 
        setIsOpen(true)
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
    }
    },[editParam])


    useEffect(() => {
      let timeoutId;

      if (successMessage) {
        timeoutId = setTimeout(() => {
          setSuccessMessage('');
          setErrorMessage('')
        }, 5000); 
      }

      return () => {
        clearTimeout(timeoutId);
      };
    }, [successMessage, setSuccessMessage ,errorMessage, setErrorMessage]);

  const handleButtonClick = () => {
    setLinkLoading(true);
    setlinkDisabled(true)
  };
  return (
    <SystemContext.Provider value={{isDeleteModalOpen,deleteParam, setIsDeleteModalOpen,setIsOpen,setCar, openModal ,car ,carId ,isLinkLoading, setLinkLoading ,linkDisabled, setlinkDisabled ,handleButtonClick,successMessage, setSuccessMessage,errorMessage, setErrorMessage, addNew, setAddNew, userId, setUserId,submitted, setSubmitted }}>
      {children}
    </SystemContext.Provider>
  );
};
