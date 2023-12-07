"use server"
import { calculateLateHoursOrDays } from "@/helper/calc";
import prisma from "./prisma";

export async function createContractAndCustomer(data, userId) {
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

    const result = await prisma.$transaction(async (prisma) => {
      // Create a new customer
      const newCustomer = await prisma.customer.create({
        data: {
          user: { connect: { userId } },
          customerName,
          nationality,
          idNumber,
          debt: remainingDues,
          category: category.label,
          mobile,
        },
      });

      // Create a new contract associated with the newly created customer and related vehicle
      const newContract = await prisma.contract.create({
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
          vehicle: { connect: { plateNumber } },
          user: { connect: { userId } },
          customer: {
            connect: {
              id: newCustomer.id,
            },
          },
        },
      });

      // Create a transaction associated with the contract and set the amount to the paid amount
      const newTransaction = await prisma.transaction.create({
        data: {
          amount: paid,
          type: 'expense', // Or specify the type here
          contract: { connect: { id: newContract.id } },
          customer: { connect: { id: newCustomer.id } },
          user: { connect: { userId } },
          vehicle: { connect: { plateNumber } },
        },
      });

      // Update the status of the associated vehicle to 'Rented' and increment rental count
      const updatedVehicle = await prisma.vehicle.update({
        where: { plateNumber },
        data: {
          status: 'Rented',
          rentalCount: {
            increment: 1,
          },
        },
      });

      return { newCustomer, newContract, newTransaction, updatedVehicle };
    });

    return result;
  } catch (error) {
    console.error('Error creating contract and customer:', error);
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
export  async function createContractWithExistingCustomer(contractData, customerId, plateNumber, userId) {
  try {
    const {
      dateOut,
      returnedDate,
      timeOut,
      days,
      total,
      paid,
      remainingDues,
      meterReadingOut,
      timeIn,
      dailyRent,
    } = contractData;

    // Create a new contract associated with the existing customer and related vehicle
    const newContract = await prisma.contract.create({
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
        vehicle: { connect: { plateNumber } },
        user: { connect: { userId } },
        customer: {
          connect: {
            id: customerId,
          },
        },
      },
    });

    // Update the status of the associated vehicle to 'Rented' and increment rental count
    const updatedVehicle = await prisma.vehicle.update({
      where: { plateNumber },
      data: {
        status: 'Rented',
        rentalCount: { increment: 1},
      },
    });

    if(paid > 0){
      const newTransaction = await prisma.transaction.create({
        data: {
          amount: paid,
          type: 'Revenue',
          user: { connect: { userId } },
          contract: { connect: { id: newContract.id } },
          customer: { connect: { id: customerId } },
          vehicle: { connect: { plateNumber } },
        },
      });
     return { newContract, updatedVehicle ,newTransaction};
    }
    return { newContract, updatedVehicle ,newTransaction};
  } catch (error) {
    console.error('Error creating contract with existing customer:', error);
    throw error;
  }
}

