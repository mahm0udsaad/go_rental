// import CloseContract from "@/components/closeContractForm";
// import { getContractByPlateNumber } from "@/prisma/contracts";

// import { headers } from 'next/headers'


// const CloseContractPage = async  ({ lng }) => {
//     const headersList = headers().get('referer')
//     const plateNumber = extractPlateNumber(headersList);
//     const contract = await getContractByPlateNumber(plateNumber)

//     if(contract){
//       return <CloseContract lng={lng} contract={contract} />;
//     }

// };


// function extractPlateNumber(url) {
//   try {
//     const urlObj = new URL(url);
//     const plateNumberParam = urlObj.searchParams.get('forPlateNumber');

//     // Decode the URL encoded parameter value
//     const decodedPlateNumber = decodeURIComponent(plateNumberParam);
//     return decodedPlateNumber;
//   } catch (error) {
//     console.error('Error extracting plateNumber:', error);
//     return null;
//   }
// }


// export default CloseContractPage;
