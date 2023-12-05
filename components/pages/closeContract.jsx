"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getContractByPlate, getContractByPlateNumber } from '@/prisma/contracts';
import { Paper, Typography, Grid, Stepper, Step, StepLabel, TextField, Button } from '@mui/material';
import { useTranslation } from '@/app/i18n/client';

const CloseContract = ({ lng }) => {
  const { t } = useTranslation(lng , "dashboard")
  const [contract, setContract] = useState(null);
  const plateNumber = useSearchParams().get('forPlateNumber');
  const isAr = lng === 'ar';
  useEffect(() => {
    getContractByPlateNumber(plateNumber)
      .then((contractData) => {
        setContract(contractData);
        console.log("Contract"+" "+contractData);
        console.log("plateNumber"+" "+plateNumber);
      })
      .catch((error) => {
        console.error('Error fetching contract:', error);
      });
  }, []);

  const handleInputChange = (field, value) => {
    setContract(prevContract => ({
      ...prevContract,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Implement logic to submit updated contract data
    console.log('Updated contract data:', contract);
  };

  if (!contract) {
    return <div>Loading...</div>;
  }
 console.log(contract);
  const steps = ['Date Out', 'Returned Date'];

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
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Grid className={` ${isAr ? 'flex-row-reverse' : ''}`} container spacing={2}>
            {/* Date Out */}
              <Grid className='items-center justify-center flex' item xs={6}>
                <Typography variant="body1">{contract.dateOut}</Typography>
              </Grid>
              {/* Returned Date */}
              <Grid className='items-center justify-center flex' item xs={6}>
                <Typography variant="body1">{contract.returnedDate}</Typography>
              </Grid>
              {/* Editable Inputs */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Total"
                  value={contract.total}
                  InputProps={{ readOnly: true }}
                  onChange={(e) => handleInputChange('total', e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Paid"
                  InputProps={{ readOnly: true }}
                  value={contract.paid}
                  onChange={(e) => handleInputChange('paid', e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Remaining Dues"
                  InputProps={{ readOnly: true }}
                  value={contract.remainingDues}
                  onChange={(e) => handleInputChange('remainingDues', e.target.value)}
                  fullWidth
                />
              </Grid>
             {/* Vehicle Information */}
              <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Meter Reading In"
              value={contract.meterReadingIn}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Daily Kilometer Limit"
                  value={contract.vehicle?.dailyKilometerLimit}
                  InputProps={{ readOnly: true }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Meter Reading Out"
                  value={contract.meterReadingOut}
                  InputProps={{ readOnly: true }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Customer Name"
                  value={contract.customer?.customerName}
                  InputProps={{ readOnly: true }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Total Debt"
                  value={contract.customer?.debt}
                  InputProps={{ readOnly: true }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="ID Number"
                  value={contract.customer?.idNumber}
                  InputProps={{ readOnly: true }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  />
              </Grid>

          </Grid>
          <Button style={{marginTop:'2rem'}} variant="contained" color="error" onClick={handleSubmit}>
            {t('titles.closeContract')}
          </Button>
        </div>
    </div>
  );
};

export default CloseContract;

