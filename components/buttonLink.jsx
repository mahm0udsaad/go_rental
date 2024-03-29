"use client"
import { useTranslation } from '@/app/i18n/client';
import { Button, IconButton, Popover, Tooltip} from '@mui/material'
import { MdDelete, MdEdit } from 'react-icons/md';
import { IoIosMore, IoMdCreate, IoMdTrash } from 'react-icons/io'; 
import Link from 'next/link';
import React , { useState } from 'react';
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
      {item.status === "Rented" || item.status === "Late" ? (
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

// export const DeleteConfirmationDialog = ({ message, lng, isOpen, setIsOpen }) => {
//   const { car } = useSystemContext();
//   const { t } = useTranslation(lng, 'dashboard');

//   const handleClose = () => {
//     setIsOpen(false);
//     router.push('/dashboard')
//     router.refresh()
//   };

//   return (
//     <Dialog open={isOpen} onClose={handleClose}>
//       <DialogTitle>Delete Vehicle</DialogTitle>
//       <DialogContent>
//         <p>{t(`messages.${message}`)} {car.plateNumber}</p>
//       </DialogContent>
//       <DialogActions>
//         <div className="flex gap-4">
//           <Button onClick={handleClose} variant='contained' color="primary">
//             {t('actions.cancel')}
//           </Button>
//           <Button variant='contained' color="error">
//             {t('actions.delete')}
//           </Button>
//         </div>
//       </DialogActions>
//     </Dialog>
//   );
// }

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
        <div className='p-4 flex '>
          <Link href={`dashboard?edit=${item.id}`}>
          <IconButton aria-label="edit" >
            <IoMdCreate />
          </IconButton>
          </Link>
          <form action={()=>deleteVehicleById(item)}>
            <Tooltip title="Delete">
              <IconButton
                type='submit'
              >
                  <IoMdTrash style={{ marginRight: '5px' }} />
              </IconButton>
            </Tooltip>
          </form>
        </div>
      </Popover>
      </div>
    </>
  );
}

export default ButtonLink

