import * as XLSX from 'xlsx/xlsx.mjs';

export function formatDate() {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // January is 0, so we add 1
  const yy = today.getFullYear().toString().slice(-2); // Extract the last two digits of the year

  // Add leading zeros if the day or month is a single digit
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${dd}/${mm}/${yy}`;
}
export function formatDateCalc(date) {
  const dd = date.getDate();
  const mm = date.getMonth() + 1; // January is 0, so we add 1
  const yy = date.getFullYear().toString().slice(-2); // Extract the last two digits of the year

  // Add leading zeros if the day or month is a single digit
  const formattedDay = dd < 10 ? `0${dd}` : dd;
  const formattedMonth = mm < 10 ? `0${mm}` : mm;

  return `${formattedDay}/${formattedMonth}/${yy}`;
}

export function calculateReturnDate(days) {
  if (!days || isNaN(days)) {
    return null; // Return null or handle invalid input accordingly
  }

  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const today = new Date();
  const millisecondsToAdd = days * millisecondsPerDay;

  const returnDate = new Date(today.getTime() + millisecondsToAdd);

  return formatDateCalc(returnDate); // Return formatted date string
}

export function formatTime() {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // January is 0, so we add 1
  const yy = today.getFullYear().toString().slice(-2); // Extract the last two digits of the year
  let hours = today.getHours();
  let minutes = today.getMinutes();
  
  let period = 'AM'; // Default period is AM

  // Determine AM or PM and convert to 12-hour format
  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  // Add leading zeros if the day, month, hour, or minute is a single digit
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes} ${period}`;
}
  export function exportToExcel(data, fileName) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  }