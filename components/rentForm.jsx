"use client"
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid, Button, Autocomplete, Paper } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { calculateReturnDate, formatDate, formatTime } from '@/helper/dateNow';
import { nationalitiesArray} from '@/data/info';
import { useTranslation } from '@/app/i18n/client';
import { getVehicleById } from '@/prisma';
import { createContractAndCustomer, createContractWithExistingCustomer } from '@/prisma/contracts';
import { useSystemContext } from '@/context/context';
import { convertFieldsToNumber } from '@/helper/convertors';
import { getAllCustomersByUserId, searchCustomerByIdNumber } from '@/prisma/customers';

const RentNewCarForm = ({ lng , userId , Customers}) => {
  const { control, handleSubmit, setValue, watch, reset } = useForm();
  const {  setSuccessMessage,  setErrorMessage , isLinkLoading ,setLinkLoading } = useSystemContext()
  const [ linkDisabled ,setlinkDisabled ] = useState(false)
  const [newCustomer, setNewCustomer] = useState(false);
  const [car, setCar] = useState(null);
  const router = useRouter();
  const carId = useSearchParams().get('carId');
  const requiredKeys = [
    'plateNumber',
    "customerName",
      "category",
      "days",
      "idNumber",
      "nationality",
      "extraHourPrice",
      "extraKilometerPrice",
]
  const isRequired = (key) => requiredKeys.includes(key);
    useEffect(()=>{
      getVehicleById(carId)
      .then(res => {
        setCar(res); 
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
    },[])

    if (!carId) {
      useEffect(() => {
        router.push('/dashboard');
      }, [router]);
      return null;
    }
  
    const customerID = useSearchParams().get('customerId') || 1;
    const { t } = useTranslation(lng, 'dashboard');
    const autocompleteCar = {
      plateNumber:car ? car.plateNumber : '',
      meterReadingOut:car ? car.meter : '',
      manufactureYear:car ? car.manufactureYear : '',
      extraHourPrice:car ? car.extraHourPrice : '',
      dailyRent:car ? car.dailyRent : '',
      weeklyRent:car ? car.weeklyRent : '',
      monthlyRent:car ? car.monthlyRent : '',
      insuranceCompany:car ? car.insuranceCompany : '',
      extraKilometerPrice:car ? car.extraKilometerPrice : '',
      dailyKilometerLimit:car ? car.dailyKilometerLimit : '',
    };
    const autocompleteCustomer = {
      idNumber: '',
      debt:'' ,
      category:'' ,
      mobile: ''
    };
    const quickCustomer = {
        customerName : '',
        category : 'individual',
        idNumber: '',
        nationality : ''
    }
    const autocompleteContract = {
      total: 0,
      paid: 0,
      remainingDues: 0,
      dateOut: '', 
      timeOut:formatTime(), 
      returnedDate: '', 
      timeIn: formatTime(), 
    };
    const quickAddCustomer = () =>{
        setNewCustomer(true)
    }
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
    const paid = watch('paid')
    const days = parseInt(formatedDays, 10);
    useEffect(() => {
      const updatedDateIn = calculateReturnDate(days);
      const updatedDateOut = formatDate();
      const total = autocompleteCar.dailyRent * days ;
      const remainingDues = total - paid ;
      if(days){
      setValue('timeOut',formatTime())
      setValue('timeIn',formatTime())
      setValue('dateOut' , updatedDateOut)
      setValue('returnedDate' , updatedDateIn)
      setValue('total',total)
      setValue('remainingDues',remainingDues)
      }
    }, [days , paid]);
  
    const onSubmit = async (data) => {
      try {
        setlinkDisabled(true);
        setLinkLoading(true);
        data = convertFieldsToNumber(data);
        const customer = await searchCustomerByIdNumber(data.idNumber);
    
        if (customer) {
          const contractData = {
            dateOut: data.dateOut,
            returnedDate: data.returnedDate,
            timeOut: data.timeOut,
            days: data.days,
            total: data.total,
            paid: data.paid,
            remainingDues: data.remainingDues,
            meterReadingOut: data.meterReadingOut,
            timeIn: data.timeIn,
            dailyRent: data.dailyRent,
          };
    
          const { newContract, updatedVehicle } = await createContractWithExistingCustomer(
            contractData,
            customer.id,
            data.plateNumber,
            userId
          );
          // Perform actions after creating the contract and updating the vehicle
          setSuccessMessage('contractAddedSuccessfully');
          // setLinkLoading(false);
          // setlinkDisabled(false);
          // router.push('/dashboard');
        } else {
          await createContractAndCustomer(data, userId);
    
          setSuccessMessage('contractAddedSuccessfully');
          setLinkLoading(false);
          setlinkDisabled(false);
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Paper variant="outlined" style={{ padding: '20px' }}>
        <h1 className='text-lg pb-4'>{t("carDetalis")}</h1>
        <Grid container spacing={2}>
          {car && Object.keys(autocompleteCar).map((key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Controller
                name={key}
                control={control}
                defaultValue={autocompleteCar[key] || ''}
                render={({ field }) => {
                  const label = t(`tables.${key}`);
                  return (
                    <TextField
                      {...field}
                      label={label}
                      required={isRequired(key)}
                      variant="outlined"
                      fullWidth
                      dir="rtl"
                    />
                  );
                }}
              />
            </Grid>
          ))}
        </Grid>
        </Paper>
        
        <Paper variant="outlined" style={{ margin: '20px 0', padding: '20px' }}>
          <h1 className='text-lg pb-4'>{t("customerDetalis")}</h1>
             {newCustomer ?
             <>
             <Grid container spacing={2}>
             {Object.keys(quickCustomer).map((key) => (
              <Grid item xs={12} sm={6} key={key}>
                {key === 'nationality' ? (
                  <Controller
                    name={key}
                    control={control}
                    defaultValue={quickCustomer[key] || ''}
                    render={({ field }) => (
                      <Autocomplete
                        {...field}
                        options={nationalitiesArray}
                        getOptionLabel={(option) => option}
                        onChange={(e, value) => {
                          field.onChange(value);
                          setValue("nationality", value);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={t(`tables.${key}`)}
                           required={isRequired(key)}
                            variant="outlined"
                            fullWidth
                            dir="rtl"
                          />
                        )}
                      />
                    )}
                  />
                ) : key === 'category' ? (
                  <Controller
                    name={key}
                    control={control}
                    defaultValue={quickCustomer[key] || ''}
                    render={({ field }) => (
                      <Autocomplete
                        {...field}
                        defaultValue={quickCustomer[key] || ''}
                        options={['individual', 'company'].map((option) => ({
                          value: option,
                          label: t(`tables.${option}`), // Translate options here
                        }))} 
                        onChange={(e, value) => {
                          field.onChange(value);
                          setValue("category", value);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={t(`tables.${key}`)}
                            required={isRequired(key)}
                            variant="outlined"
                            fullWidth
                            dir="rtl"
                          />
                        )}
                      />
                    )}
                  />
                ) : (
                  // For other keys, render regular text fields
                  <Controller
                    name={key}
                    control={control}
                    rules={{ required: true }}
                    defaultValue={quickCustomer[key] || ''}
                    render={({ field }) => {
                      const label = t(`tables.${key}`);
                      return (
                        <TextField
                          {...field}
                          label={label}
                          required={isRequired(key)}
                          variant="outlined"
                          fullWidth
                          dir="rtl"
                        />
                      );
                    }}
                  />
                )}
              </Grid>
            ))}

           </Grid>
           </>
            :
            <>
          <Button onClick={quickAddCustomer} style={{ marginBottom:'1rem'}} variant='contained' >{t('actions.addNewCustomer')}</Button>
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
                        <TextField {...params}  label={t('tables.customer')} variant="outlined" fullWidth value={''} /> 
                        )}
                    />
                )}
                />
              </Grid>
              {/* Customer details based on autocomplete */}
              {Object.keys(autocompleteCustomer).map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <Controller
                    required={isRequired(autocompleteCustomer[key])}
                    name={key}
                    control={control}
                    defaultValue={autocompleteCustomer[key] || ''}
                    render={({ field }) => {
                      const label = t(`tables.${key}`);
                      return (
                        <TextField
                          {...field}
                          label={label}
                          variant="outlined"
                          fullWidth
                          dir="rtl"
                        />
                      );
                    }}
                  />
                </Grid>
              ))}
          </Grid>
            </>
          }
        </Paper>

        <Paper variant="outlined" style={{ margin: '20px 0', padding: '20px' }}>
          <h1 className='text-lg pb-4'>{t("contractDetalis")}</h1>
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
                 required={true}
                  name={key}
                  control={control}
                  defaultValue={isNaN(autocompleteContract[key])?'':autocompleteContract[key]}
                  render={({ field }) => {
                    const label = t(`tables.${key}`);
                    return (
                      <TextField
                        {...field}
                        label={label}
                        required={isRequired(key)}
                        variant="outlined"
                        fullWidth
                        dir="rtl"
                        value={field.value} // Use 'value' instead of 'defaultValue'
                        onChange={(e) => field.onChange(e)} // Ensure 'onChange' is passed
                      />
                    );
                  }}
                />
              </Grid>
              ))}
          </Grid>
        </Paper>
       
        <Button disabled={linkDisabled} type="submit" variant="contained" color="success" className="mt-3">
        {isLinkLoading ? (
          <div className="flex justify-center items-center">
            <div className="border-t-4 border-blue-500 rounded-full animate-spin h-5 w-5"></div>
        </div>
        ) : (
          t('actions.addNew')
        )}
        </Button>
      </form>
  );
};

export default RentNewCarForm;
