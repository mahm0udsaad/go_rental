import RentNewCarForm from '../rentForm';
import { auth } from '@clerk/nextjs';

const RentNewCar = async ({ lng }) => {
  const { userId } = await auth()
  return (
    <div className="p-4 h-[94vh] overflow-y-scroll">
      <RentNewCarForm lng={lng} userId={userId} />
    </div>
  );
};

export default RentNewCar;
