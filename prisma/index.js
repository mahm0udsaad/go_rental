"use server"

import prisma from "./prisma";

export const fetchUserCars = async (userId) => {
  try {
    const userCarsData = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
      select: {
        Vehicles: {
          select: {
            id: true,
            plateNumber: true,
            brand: true,
            meter: true,
            status: true,
            rentalCount: true,
            transmission: true,
            manufactureYear: true,
            color: true,
            extraHourPrice: true,
            dailyRent: true,
            weeklyRent: true,
            monthlyRent: true,
            insuranceCompany: true,
            registrationType: true,
            fuelType: true,
            extraKilometerPrice: true,
            vehicleType: true,
            dailyKilometerLimit: true,
          },
        },
        Customers:{
         select:{
          id:true,
          customerName:true,
          category:true,
          nationality:true,
          idNumber:true,
          idExpirationDate:true,
          mobile:true,
          debt:true,
          Contracts:{
            select:{
              paid:true,
              remainingDues:true,
              plateNumber:true,
            }
          },
         }
        },
        Contracts:{
        select:{
          id:true,
          plateNumber:true,
          total:true,
          paid:true,
          remainingDues:true,
          meterReadingOut:true,
          meterReadingIn:true,
          timeOut:true,
          dailyRent:true,
          timeIn:true,
          dateOut:true,
          returnedDate:true,
          returnStatus:true,
          earlyReturnFee:true,
          lateReturnFee:true,
          invoiceDetails:true,
          customer:true
        }
        },
        Transactions:{
          select:{
            id:true,
            amount:true,    
            type:true,      
            plateNumber:true,
          }
        }
      },
    });
    return userCarsData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read a specific vehicle by ID
export async function getVehicleById(id) {
  try {
    const vehicle = await prisma.vehicle.findUnique({
      where: { id: id },
    });
    return  vehicle ;
  } catch (error) {
    return { error: `Error getting vehicle by ID: ${error.message}` };
  }
}

// Create a new vehicle
export async function createVehicle(vehicleData , userId) {
  try {
    // Check if the plateNumber already exists
    const existingVehicle = await prisma.vehicle.findUnique({
      where: {
        plateNumber: vehicleData.plateNumber,
      },
    });

    if (existingVehicle) {
      console.log(`Vehicle with plate number ${vehicleData.plateNumber} already exists.`);
      return { error: `Vehicle with plate number ${vehicleData.plateNumber} already exists.` };
    }

    // If plate number doesn't exist, create the new vehicle
    const newVehicle = await prisma.vehicle.create({
      data: {      
      user: { connect: { userId } },
      ...vehicleData 
    },
    });
    return { newVehicle };
  } catch (error) {
    return { error: `Error creating vehicle: ${error.message}` };
  }
}

// Update a specific vehicle by ID
export async function updateVehicleById(id, updatedVehicleData) {
  console.log(id , updatedVehicleData);
  try {
    const updatedVehicle = await prisma.vehicle.update({
      where: { id: id },
      data: { ...updatedVehicleData },
    });
    return updatedVehicle;
  } catch (error) {
    return { error: `Error updating vehicle: ${error.message}` };
  }
}

export async function updateVehicle(id, updatedVehicleData) {
  try {
    console.log(id , updatedVehicleData);
    const { id, ...dataWithoutCarId } = updatedVehicleData;
    const updatedVehicle = await prisma.vehicle.update({
      where: { id },
      data: { ...dataWithoutCarId },
    });
    return updatedVehicle;
  } catch (error) {
    return { error: `Error updating vehicle: ${error.message}` };
  }
}
// Delete a specific vehicle by ID
export async function deleteVehicleById(id) {
  try {
    const deletedVehicle = await prisma.vehicle.delete({
      where: { id: id },
    });
    return { deletedVehicle };
  } catch (error) {
    return { error: `Error deleting vehicle: ${error.message}` };
  }
}



