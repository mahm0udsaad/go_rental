"use client"
import { useTranslation } from '@/app/i18n/client';
import { Button, IconButton, Tooltip} from '@mui/material'
import { MdDelete, MdEdit } from 'react-icons/md';
import Link from 'next/link';
import { IoIosMore } from "react-icons/io";
import React , { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Unstable_Popup as BasePopup , PopupBody } from '@mui/base/Unstable_Popup';
import { useRouter, useSearchParams } from 'next/navigation';
import { EditVehicleForm, InvoiceFormModal } from './invoicesForm';
import { deleteVehicleById, getVehicleById } from '@/prisma';
import { useSystemContext } from '@/context/context';
import { t } from 'i18next';

const ButtonLink = React.memo(({ item, lng, isGrid }) => {
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
});

const EditButton = React.memo(({ item }) => {
  const [isLinkLoading, setLinkLoading] = useState(false);
  const [linkDisabled, setlinkDisabled] = useState(false);

  const handleLinkClick = () => {
    setlinkDisabled(true);
    setLinkLoading(true);
  };

  return (
    <Link href={`?edit=${item.id}`}>
      <Tooltip title="Edit">
        <IconButton
          disabled={linkDisabled}
          onClick={() => {
            handleLinkClick();
            setIsOpen(true);
          }}
          variant="contained"
          className="main-color"
          aria-label="edit"
          style={{ backgroundColor: 'lightgrey', marginRight: '10px' }}
        >
          {isLinkLoading ? (
            <div className="flex justify-center items-center">
              <div className="border-t-4 border-blue-500 rounded-full animate-spin h-5 w-5"></div>
            </div>
          ) : (
            <MdEdit style={{ color: 'white', marginRight: '5px' }} />
          )}
        </IconButton>
      </Tooltip>
    </Link>
  );
});

 const DeleteButton = React.memo(({ item, lng }) => {
  const { t } = useTranslation(lng, 'dashboard');
  const { car ,deleteParam , setCar , setIsDeleteModalOpen} = useSystemContext();


const handleOpenDeleteModal = async ()=>{
  if(deleteParam){
    await getVehicleById(deleteParam)
  .then(res => {
    setCar(res);
    setIsDeleteModalOpen(true);
  })
  .catch(error => {
    console.error('Error fetching car data:', error);
  });
  }
}
  
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
});

export const DeleteConfirmationDialog = React.memo(({ message, lng, isOpen, setIsOpen }) => {
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
});

const MorePopup = React.memo(({ item, lng }) => {
  const [anchor, setAnchor] = useState(null);
  const { openModal, setIsOpen, car } = useSystemContext();

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'more-popper' : undefined;

  return (
    <>
      <EditVehicleForm lng={lng} formData={car} isOpen={openModal} setIsOpen={setIsOpen} />
      <div>
        <Button aria-describedby={id} type="button" onClick={handleClick}>
          <IoIosMore />
        </Button>
        <BasePopup placement="top" id={id} open={open} anchor={anchor}>
          <div>
            <EditButton item={item} />
            <DeleteButton lng={lng} item={item} />
          </div>
        </BasePopup>
      </div>
    </>
  );
});

export default ButtonLink

