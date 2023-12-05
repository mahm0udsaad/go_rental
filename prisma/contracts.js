"use server"
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

export const getContractByPlateNumber = async (plateNumber) => {
  try {
    const contract = await prisma.contract.findFirst({
      where: {
        plateNumber: plateNumber,
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


