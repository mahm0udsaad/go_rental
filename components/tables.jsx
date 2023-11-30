"use client"
import { useTranslation } from '@/app/i18n/client';
import { Grid,Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material'
import Link from 'next/link';
import React, { useState } from 'react';

export const RentalRows = ({ rentalData  , lng }) => {
    const { t } = useTranslation(lng , "dashboard")
    const carNames = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs  text-blue-900 uppercase bg-gray-50 ">
            <tr >
            <th scope="col" className="px-2 py-3 md:py-0">
              {t('tables.plateNumber')}
            </th>
            <th scope="col" className="px-2 py-3 md:py-0">
              {t('tables.carName')}
            </th>
            <th scope="col" className="px-2 py-3 md:py-0">
              {t('tables.frequency')}
            </th>
            </tr>
          </thead>
          <tbody>
            {rentalData.map((car, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b  text-blue-900`}>
                <td className="px-4 py-4  md:py-2  font-medium whitespace-nowrap">
                  {car.plateNumber}
                </td>
                <td className="px-4 py-4  md:py-2 ">
                  {carNames[index]}
                </td>
                <td className="px-4 py-4  md:py-2  flex justify-center">
                  {car.rentalFrequency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    );
};
export const CollabsedTable = ({ data, lng , cars}) => {
  const { t } = useTranslation(lng, 'dashboard');
  const tableHeaders = Object.keys(data[0]).slice(0, 7);
  const getColorClass = (status) => {
    if (status === 'Rented') {
      return 'bg-orange-300 text-orange-700 font-bold';
    } else if (status === 'open' || status === 'Active' || status === 'Available') {
      return 'bg-green-300 text-green-700 font-bold';
    }
    return '';
  };

  const Row = ({ item, index}) => {
    const [open, setOpen] = React.useState(false);

    const handleRowClick = () => {
      if(e){
        if (e.target.tagName.toLowerCase() === 'a') {
          return;
        }
      }
      setOpen(!open);
    };

    return (
      <React.Fragment>
        <TableRow className="border-b transition duration-300 ease-in-out hover:bg-[#2536656b] " onClick={handleRowClick}>
          {tableHeaders.map((header, i) => (
            <TableCell key={i} className="whitespace-nowrap px-6 py-4  md:py-2 ">
              <span className={getColorClass(item[header]) + ' px-4 py-2 rounded-full '}>{item[header]}</span>
            </TableCell>
          ))}
           {cars && (
          <Link href={`dashboard/rent?carId=${item.ID}`} className='px-4 py-4 flex items-center justify-center main-bg hover:bg-blue-800' passHref>
              <span className={'text-sm text-white w-full '}>{t(`tables.rent`)}</span>
          </Link>
        )}
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={tableHeaders.length + 1}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Typography variant="body2" component="div">
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="purchases">
                    <TableBody>
                      {Object.entries(item)
                        .slice(6)
                        .reduce((result, [key, value], idx, array) => {
                          if (idx % 2 === 0) {
                            result.push(
                              <TableRow key={idx}>
                                <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                                  {t(`tables.${array[idx][0]}`)}
                                </TableCell>
                                <TableCell>{array[idx][1]}</TableCell>
                                {array[idx + 1] && (
                                  <>
                                    <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                                      {t(`tables.${array[idx + 1][0]}`)}
                                    </TableCell>
                                    <TableCell>{array[idx + 1][1]}</TableCell>
                                  </>
                                )}
                              </TableRow>
                            );
                          }
                          return result;
                        }, [])}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Typography>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  };

  return (
    <div className="flex flex-col overflow-x-hidden h-[60dvh]">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map((item, i) => (
                <TableCell key={i} scope="col" className="px-6 py-4  md:py-2  ml-3 ">
                  {t(`tables.${item}`)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <Row key={index} item={item} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};