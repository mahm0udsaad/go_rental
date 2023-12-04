"use client"
import {  Alert } from '@mui/material';
import { useSystemContext } from '@/context/context';
import { useTranslation } from '@/app/i18n/client';
const DisplaySuccessMessage = ({ lng }) => {
  const { t } = useTranslation(lng , "dashboard")
  const {  successMessage , setSuccessMessage } = useSystemContext()
  return (
    <div className='absolute z-50 flex justify-center w-full '>
    {successMessage && (
      <Alert className='w-[20rem] flex justify-center gap-6' severity="success" onClose={() => setSuccessMessage('')}>
      {t(`messages.${successMessage}`)}
      </Alert>
    )}
  </div>
  );
};



const ErrorMessage = ({lng}) => {
  const { t } = useTranslation(lng , "dashboard")
const { errorMessage, setErrorMessage } = useSystemContext()
  return (
    <div className='absolute z-50 flex justify-center w-full'>
      {errorMessage && (
        <Alert severity="error" onClose={() => setErrorMessage('')}>
          {t(`messages.${errorMessage}`)}
        </Alert>
      )}
    </div>
  );
};


export { DisplaySuccessMessage , ErrorMessage};
