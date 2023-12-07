"use server"
import prisma from "./prisma";

export async function createMaintenanceForVehicle(plateNumber, userId , maintenanceData) {
    try {
      const {
        maintenanceType,
        cost,
        description, 
      } = maintenanceData;
      console.log(maintenanceData);
      // Check if the vehicle exists
      const existingVehicle = await prisma.vehicle.findFirst({
        where: { plateNumber },
      });
  
      if (!existingVehicle) {
        throw new Error('Vehicle not found');
      }
  
      // Create maintenance record associated with the vehicle
      const newMaintenance = await prisma.maintenance.create({
        data: {
          user: { connect: { userId } },
          vehicle: { connect: { plateNumber } },
          maintenanceType,
          cost,
          description,
        },
      });
  
      const newTransaction = await prisma.transaction.create({
        data: {
          amount: cost,
          type: 'Expense', 
          Maintenance: { connect: { id: newMaintenance.id } },
          vehicle: { connect: { plateNumber } },
          user: { connect: { userId } },
        },
      });
      return {newMaintenance , newTransaction};
    } catch (error) {
      console.error('Error creating maintenance for vehicle:', error);
      throw error;
    }
  }