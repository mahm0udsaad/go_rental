"use server"
import { PrismaClient } from "./generated/client/edge";

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

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
      where: { id: Number(id) },
    });
    return  vehicle ;
  } catch (error) {
    return { error: `Error getting vehicle by ID: ${error.message}` };
  }
}

// Create a new vehicle
export async function createVehicle(vehicleData) {
  try {
    const newVehicle = await prisma.vehicle.create({
      data: vehicleData,
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
      where: { id: Number(id) },
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
      where: { id: Number(id) },
    });
    return { deletedVehicle };
  } catch (error) {
    return { error: `Error deleting vehicle: ${error.message}` };
  }
}


