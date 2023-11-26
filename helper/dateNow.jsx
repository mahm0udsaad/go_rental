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
  

  export function exportToExcel(data, fileName) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  }