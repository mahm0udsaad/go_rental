import { getAllCustomersByUserId } from '@/prisma/customers';
import RentNewCarForm from '../rentForm';
import { auth } from '@clerk/nextjs';

const RentNewCar = async ({ lng }) => {
  const { userId } = await auth()
  const [customersResult] = await Promise.all([
    getAllCustomersByUserId(userId),
  ]);
  return (
    <div className="p-4 h-[94vh] overflow-y-scroll">
      <RentNewCarForm Customers={customersResult} lng={lng} userId={userId} />
    </div>
  );
};

export default RentNewCar;
