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
        userId,
        plateNumber: vehicleData.plateNumber,
      },
    });

    if (existingVehicle) {
      console.log(`Vehicle with plate number ${vehicleData.plateNumber} already exists.`);
      return { error: `Vehicle with plate number ${vehicleData.plateNumber} already exists.` };
    }

    // If plate number doesn't exist, create the new vehicle
    const newVehicle = await prisma.vehicle.create({
      data: { userId , ...vehicleData },
    });
    return { newVehicle };
  } catch (error) {
    return { error: `Error creating vehicle: ${error.message}` };
  }
}


// Update a specific vehicle by ID
export async function updateVehicleById(id, updatedVehicleData) {
  try {
    const updatedVehicle = await prisma.vehicle.update({
      where: { id: id },
      data: updatedVehicleData,
    });
    return { updatedVehicle };
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


