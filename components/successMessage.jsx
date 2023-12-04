import { Snackbar, Alert } from '@mui/material';

const DisplaySuccessMessage = ({ text, open, handleClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default DisplaySuccessMessage;
