"use client"
import { useTranslation } from '@/app/i18n/client';
import {Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button} from '@mui/material'
import Link from 'next/link';
import { IoIosMore } from "react-icons/io";
import React , { useEffect, useState } from 'react';
export default function ButtonLink({item , lng , isGrid}){
    const { t } = useTranslation(lng, 'dashboard');
    const [isLinkLoading, setLinkLoading] = useState(false);
    const [linkDisabled, setlinkDisabled] = useState(false);
    
    const handleButtonClick = () => {
      setLinkLoading(true);
      setlinkDisabled(true)
    };
    return(
        <>
                {item.status === "Rented"?(
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
                    <div class="flex justify-center items-center">
                      <div class="border-t-4 border-blue-500 rounded-full animate-spin h-5 w-5"></div>
                  </div>
                  ) : (
                    t('tables.closeContract')
                  )}
                </Button>
                ):(
                  <Button
                  variant="contained"
                  onClick={handleButtonClick}
                  disabled={linkDisabled}
                  className='text-sm'
                  color='primary'
                  size="small"
                  component={Link} // Use the component prop to specify the link component
                  href={`dashboard/rent?carId=${item.id}`} // Specify the link destination
                >
                   {isLinkLoading ? (
                    <div class="flex justify-center items-center">
                      <div class="border-t-4 border-blue-500 rounded-full animate-spin h-5 w-5"></div>
                  </div>
                  ) : (
                    t('tables.rent')
                  )}
                </Button>
                )}

               {!isGrid && <Button
                  className='text-sm'
                  size="small"
                >
                  <IoIosMore />
                </Button>}
                </>
    )
}