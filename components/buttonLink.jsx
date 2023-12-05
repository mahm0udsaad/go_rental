"use client"
import { useTranslation } from '@/app/i18n/client';
import { Button, IconButton, Popover, Tooltip} from '@mui/material'
import { MdDelete, MdEdit } from 'react-icons/md';
import { IoIosMore, IoMdCreate, IoMdTrash } from 'react-icons/io'; 
import Link from 'next/link';
import React , { useEffect, useLayoutEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { EditVehicleForm, InvoiceFormModal } from './invoicesForm';
import { deleteVehicleById, getVehicleById } from '@/prisma';
import { useSystemContext } from '@/context/context';

const ButtonLink  = ({ item, lng, isGrid }) => {
  const { t } = useTranslation(lng, 'dashboard');
  const [isLinkLoading, setLinkLoading] = useState(false);
  const [linkDisabled, setlinkDisabled] = useState(false);

  const handleButtonClick = () => {
    setLinkLoading(true);
    setlinkDisabled(true);
  };

  
  return (
    <div className='flex gap-2'>
      {item.status === "Rented" ? (
        <Button
          variant="contained"
          onClick={handleButtonClick}
          disabled={linkDisabled}
          className='text-sm'
          color='error'
          size="small"
          component={Link}
          href={`dashboard/closeContract?forPlateNumber=${item.plateNumber}`}
        >
          {isLinkLoading ? (
            <div className="flex justify-center items-center">
              <div className="border-t-4 border-blue-500 rounded-full animate-spin h-5 w-5"></div>
            </div>
          ) : (
            t('tables.closeContract')
          )}
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={handleButtonClick}
          disabled={linkDisabled}
          className='text-sm'
          color='primary'
          size="small"
          component={Link}
          href={`dashboard/rent?carId=${item.id}`}
        >
          {isLinkLoading ? (
            <div className="flex justify-center items-center">
              <div className="border-t-4 border-blue-500 rounded-full animate-spin h-5 w-5"></div>
            </div>
          ) : (
            t('tables.rent')
          )}
        </Button>
      )}
      {!isGrid && <MorePopup lng={lng} item={item} />}
    </div>
  );
}

 const DeleteButton = ({ item, lng }) => {
  const { t } = useTranslation(lng, 'dashboard');
  const { car ,deleteParam , setCar , setIsDeleteModalOpen} = useSystemContext();

  
  return (
    <>
      <Link href={`?delete=${item.id}`}>
        <Tooltip title="Delete">
          <IconButton
            onClick={handleOpenDeleteModal}
            aria-label="delete"
            variant="contained"
            style={{ color: 'red', backgroundColor: 'lightgrey', marginRight: '10px' }}
          >
              <MdDelete style={{ marginRight: '5px' }} />
          </IconButton>
        </Tooltip>
      </Link>
    </>
  );
}

export const DeleteConfirmationDialog = ({ message, lng, isOpen, setIsOpen }) => {
  const { car ,deleteParam} = useSystemContext();
  const router = useRouter();
  const { t } = useTranslation(lng, 'dashboard');
  const handleDelete = () => {
    deleteVehicleById(deleteParam);
    router.push('/dashboard');
    router.refresh();
  };
  const handleClose = () => {
    setIsOpen(false);
    router.push('/dashboard')
    router.refresh()
  };

  const handleConfirmDelete = () => {
    handleDelete();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Delete Vehicle</DialogTitle>
      <DialogContent>
        <p>{t(`messages.${message}`)} {car.plateNumber}</p>
      </DialogContent>
      <DialogActions>
        <div className="flex gap-4">
          <Button onClick={handleClose} variant='contained' color="primary">
            {t('actions.cancel')}
          </Button>
          <Button onClick={handleDelete} variant='contained' color="error">
            {t('actions.delete')}
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}

const MorePopup = ({ item, lng }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popup' : undefined;



  return (
    <>
      <div>
        <Button aria-describedby={id} type="button" onClick={handleClick}>
          <IoIosMore />
        </Button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{ padding: '10px' }}>
          <Link href={`dashboard?edit=${item.id}`}>
          <IconButton aria-label="edit" >
            <IoMdCreate />
          </IconButton>
          </Link>
          <IconButton aria-label="delete" >
            <IoMdTrash />
          </IconButton>
        </div>
      </Popover>
      </div>
    </>
  );
}

export default ButtonLink

