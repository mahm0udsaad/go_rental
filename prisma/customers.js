"use server"
import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export const createCustomer = async (data , userId) => {
    const createdCustomer = await prisma.customer.create({
        data:{userId, ...data}
    });
    revalidatePath('/dashboard/customers')
    return createdCustomer
  };
  
  export const getAllCustomersByUserId = async (userId) => {
    const customers = await prisma.customer.findMany({
      where: {
        userId: userId,
      }
    });
    return customers;
  };

export  const searchCustomerByIdNumber = async (idNumber) => {
    const customer = await prisma.customer.findFirst({
      where: {
        idNumber: idNumber,
      },
    });
    return customer;
  };