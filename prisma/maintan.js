"use server"
import prisma from "./prisma";

export async function createMaintenanceForVehicle(plateNumber, maintenanceData , userId) {
    try {
      const {
        client,
        date,
        cost,
        description = null, 
      } = maintenanceData;
  
      // Check if the vehicle exists
      const existingVehicle = await prisma.vehicle.findUnique({
        where: { plateNumber },
      });
  
      if (!existingVehicle) {
        throw new Error('Vehicle not found');
      }
  
      // Create maintenance record associated with the vehicle
      const newMaintenance = await prisma.maintenance.create({
        data: {
          plateNumber,
          maintenanceType:"Expense",
          client,
          date,
          cost,
          description,
          vehicle: { connect: { plateNumber } },
          user: { connect: { userId } },
        },
      });
  
      return newMaintenance;
    } catch (error) {
      console.error('Error creating maintenance for vehicle:', error);
      throw error;
    }
  }