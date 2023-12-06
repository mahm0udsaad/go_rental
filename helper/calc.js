export function calculateHoursDifference(timeIn , freeHours) {
  // Get the current time
  const now = new Date();

  // Parse the provided timeIn
  const [time, period] = timeIn.split(' ');
  let [hours, minutes] = time.split(':');
  hours = parseInt(hours, 10);

  // Adjust hours if it's in PM
  if (period === 'PM' && hours < 12) {
      hours += 12;
  }

  // Create a Date object for today with the given time
  const timeInDate = new Date();
  timeInDate.setHours(hours, parseInt(minutes, 10), 0, 0);

  // Calculate the difference in milliseconds
  let differenceInMilliseconds = now - timeInDate;

  // Convert milliseconds to hours
  const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
  if(differenceInHours == 0){
    return {inTime : 0}
  }
  if(differenceInHours < freeHours ){
   return  {FreeHours : differenceInHours}
  }
  return {lateInHours : differenceInHours};
}

export function calculateLateHoursOrDays(contractInfo ,freeHours) {
  const { returnedDate , timeIn} = contractInfo;
  const returnedDateParts = returnedDate.split('/');
  const returnedDay = parseInt(returnedDateParts[0], 10);
  const returnedMonth = parseInt(returnedDateParts[1], 10) - 1; 
  const returnedYear = 2000 + parseInt(returnedDateParts[2], 10); 

  const returnedDateObj = new Date(returnedYear, returnedMonth, returnedDay);
  const today = new Date();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = today - returnedDateObj;
  // Convert milliseconds to days
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
  if (differenceInDays == 0 ){
    return calculateHoursDifference(timeIn , freeHours)
  }
  if (differenceInDays < 0 ){
    return {earlyInDays : Math.abs(differenceInDays)}
  }
  return {lateInDays : differenceInDays};
}




  