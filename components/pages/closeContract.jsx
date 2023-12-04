
"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getContractByPlateNumber } from '@/prisma/contracts'; // Assuming you have a function to get contract data

const CloseContract = ({lng}) => {
  const [contract, setContract] = useState(null);
  const plateNumber = useSearchParams().get('forPlateNumber');

  useEffect(() => {
    // Fetch contract data based on the plate number from the URL
    getContractByPlateNumber(plateNumber)
      .then((contractData) => {
        setContract(contractData); // Set the retrieved contract data
      })
      .catch((error) => {
        console.error('Error fetching contract:', error);
      });
  }, [plateNumber]);

  if (!contract) {
    return <div>Loading...</div>; // Add a loading state or spinner while fetching data
  }
  return (
    <div className="container mx-auto">
      <h1 className='border-rose-600 text-rose-600 border w-60 p-3'>Close Contract</h1>
      <h1>Contract Details for Plate Number : <br /> {plateNumber}</h1>
      <p>Date: {contract.dateOut}</p>
      <p>Date In: {contract.returnedDate}</p>
      <p>Details: {contract.details}</p>
    </div>
  );
};

export default CloseContract;
