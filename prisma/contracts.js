"use server"
import { calculateLateHoursOrDays } from "@/helper/calc";
import prisma from "./prisma";

export async function createContractAndCustomer(data , userId) {
  console.log(data.category.lable)
    try {
      const {
        customerName,
        idNumber,
        plateNumber,
        meterReadingOut,
        returnedDate,
        dateOut,
        days,
        total,
        category,
        mobile,
        dailyRent,
        remainingDues,
        nationality,
        paid,
        timeIn,
        timeOut,
      } = data;
      const newCustomer = await prisma.Customer.create({
        data: {
          userId,
          customerName,
          nationality,
          idNumber,
          debt:remainingDues,
          category:category.label,
          mobile,
        },
      });
      const newContract = await prisma.Contract.create({
        data: {
          dateOut,
          returnedDate,
          timeOut,
          days,
          timeIn,
          dailyRent,
          total,
          paid,
          remainingDues,
          meterReadingOut,
          timeIn,
          timeOut,
          vehicle:{ connect:{plateNumber} },
          user: { connect: { userId } },
          customer: {
            connect: {
              id: newCustomer.id,
            },
          },
        },
      });
      const updatedVehicle = await prisma.Vehicle.update({
        where: { plateNumber },
        data: {
          status: 'Rented',
          rentalCount: {
            increment: 1, 
          },
        },
      });
      return {newCustomer, newContract , updatedVehicle};
    } catch (error) {
      console.error("Error creating contract and customer:", error);
      throw error;
    }
}
export async function getAllContractsByUserId(userId) {
  try {
    const contracts = await prisma.contract.findMany({
      where: {
        userId: userId, 
      },
      select: {
        id: true,
        plateNumber: true,
        total: true,
        paid: true,
        remainingDues: true,
        meterReadingOut: true,
        meterReadingIn: true,
        timeOut: true,
        timeIn: true,
        dateOut: true,
        returnedDate: true,
        invoiceDetails: true,
        customer: {
          select: {
            customerName: true,
          },
        },
        vehicle: {
          select: {
            plateNumber: true,
          },
        },
      },
    });
    return contracts;
  } catch (error) {
    console.error('Error fetching contracts:', error);
    throw new Error('Failed to fetch contracts');
  }
}
export async function getContractByPlateNumber(plateNumber){
  try {
    const contract = await prisma.contract.findFirst({
      where: {
        plateNumber,
      }, 
      include: {
        vehicle: {
          select: {
            extraHourPrice: true,
            meter:true,
            extraHourPrice:true,
            extraKilometerPrice:true,
            dailyKilometerLimit:true
          },
        },
        customer: {
          select: {
            customerName: true,
            debt: true,
            idNumber: true,
          },
        },
      },
    });
    return contract; 
  } catch (error) {
    throw new Error(`Error fetching contract: ${error}`);
  }
};
export async function updateVehicleStatusForLateContracts() {
  try {
    const allContracts = await prisma.Contract.findMany({
      include: {
        vehicle: true,
      },
    });

    for (const contract of allContracts) {
      const lateInfo = await calculateLateHoursOrDays(contract , 6);
      if ('lateInHours' in lateInfo || 'lateInDays' in lateInfo) {
        await prisma.Vehicle.update({
          where: { plateNumber: contract.vehicle.plateNumber },
          data: {
            status: 'Late',
          },
        });
      }
    }
  } catch (error) {
    console.error('Error updating vehicle status for late contracts:', error);
    throw error;
  }
}

