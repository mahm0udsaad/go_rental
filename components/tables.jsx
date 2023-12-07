"use client"
import { useTranslation } from '@/app/i18n/client';
import {Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button} from '@mui/material'
import { Skeleton } from '@mui/material'; 
import React , { useEffect, useState } from 'react';
import ButtonLink from './buttonLink';
import { extractNonObjectKeyValuePairsFromArray, getLastNumber } from '@/helper/convertors';

export const RentalRows = ({ rentalData, lng, isLoading }) => {
  const { t } = useTranslation(lng, 'dashboard');
  const carNames = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];

  const LoadingSkeleton = () => (
    <tbody>
      {[1, 2, 3, 4].map((_, index) => (
        <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b text-blue-900`}>
          <td className="px-4 py-4 md:py-2 font-medium whitespace-nowrap">
            <Skeleton variant="text" animation="wave" width={100} />
          </td>
          <td className="px-4 py-4 md:py-2">
            <Skeleton variant="text" animation="wave" width={100} />
          </td>
          <td className="px-4 py-4 md:py-2 flex justify-center">
            <Skeleton variant="text" animation="wave" width={100} />
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
      {/* Table Header */}
      <thead className="text-xs text-blue-900 uppercase bg-gray-50">
        <tr>
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

      {/* Conditional Rendering: Show Skeleton or RentalData */}
      {isLoading ? (
        <LoadingSkeleton /> // Show Skeleton when isLoading is true
      ) : (
        <tbody>
          {/* Render Rental Data */}
          {rentalData.map((car, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b text-blue-900`}>
              <td className="px-4 py-4 md:py-2 font-medium whitespace-nowrap">
                {car.plateNumber}
              </td>
              <td className="px-4 py-4 md:py-2 ">
                {carNames[index]}
              </td>
              <td className="px-4 py-4 md:py-2 flex justify-center">
                {car.rentalFrequency}
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export const CollabsedTable = ({ data, lng , cars}) => {
  const { t } = useTranslation(lng, 'dashboard');
  data = extractNonObjectKeyValuePairsFromArray(data)
  const tableHeaders = Object.keys(data[0]).slice(0, 7);
  const getColorClass = (status) => {
    if (status === 'Expense' || status === 'Rented') {
      return 'bg-orange-300 text-orange-700 font-bold';
    }else if (status === 'Late') {
      return 'bg-red-300 text-red-700 font-bold';
    } else if (status === 'Revenue' || status === 'open' || status === 'Active' || status === 'Available') {
      return 'bg-green-300 text-green-700 font-bold';
    }
    return '';
  };
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // After 2 seconds, set loading to false
    }, 500);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  const LoadingSkeletonRow = () => (
    <TableRow>
      {tableHeaders.map((header, i) => (
        <TableCell key={i}>
          <Skeleton variant="text" animation="wave" width={100} />
        </TableCell>
      ))}
    </TableRow>
  );
  const Row = ({ item, index }) => {
    const [open, setOpen] = React.useState(false);

    const handleRowClick = () => {
      setOpen(!open);
    };

    return (
      <React.Fragment>
        <TableRow className="border-b transition duration-300 ease-in-out hover:bg-[#2536656b]" >
            {tableHeaders.map((header, i) => (
              <TableCell onClick={handleRowClick} key={i} className="whitespace-nowrap px-6 py-4 md:py-2">
                  <span className={getColorClass(item[header]) + ' px-4 py-2 rounded-full'}>
                    {header === 'id' ? getLastNumber(item[header]):item[header]}
                  </span>
              </TableCell>
            ))}
            <TableCell>
              {cars && (
                <ButtonLink lng={lng} item={item} />
              )}
            </TableCell>
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
    <div className="flex flex-col view">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map((item, i) => (
                <TableCell key={i} scope="col">
                  {t(`tables.${item}`)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <>
                <LoadingSkeletonRow />
                <LoadingSkeletonRow />
                <LoadingSkeletonRow />
                <LoadingSkeletonRow />
                <LoadingSkeletonRow />
                <LoadingSkeletonRow />
              </>
            ) : (
              // Render Rows with data
              data.map((item, index) => (
                <Row key={index} item={item} index={index} />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};