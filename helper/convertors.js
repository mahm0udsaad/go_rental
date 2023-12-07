
export const convertFieldsToNumber = (data) => {
  const keysToConvertToNumber = [
    'meter',
    'days',
    'rentalCount',
    'manufactureYear',
    'extraHourPrice',
    'dailyRent',
    'weeklyRent',
    'monthlyRent',
    'extraKilometerPrice',
    'dailyKilometerLimit',
    'remainingDues',
    'debt',
    'remainingDues',
    'meterReadingOut',
    'meterReadingIn',
    'debt',
    'cost',
    'price',
    'debt',
    'paid',
    'total',
    'amount',
    'amount',
    'maintenance'
  ]; 

  keysToConvertToNumber.forEach((key) => {
    if (data[key] !== undefined && !isNaN(data[key])) {
      data[key] = parseFloat(data[key]); // Convert the field value to a number (float)
    }
  });
  
  return data;
};

export function getLastNumber(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(parseInt(str[i]))) {
      return parseInt(str[i]);
    }
  }
  return null; // Return null if no number is found
}

  export function extractNonObjectKeyValuePairsFromArray(arr) {
    const resultArray = [];
  
    arr.forEach(obj => {
      const result = {};
  
      function extract(obj) {
        for (const key in obj) {
          if (typeof obj[key] !== 'object') {
            result[key] = obj[key];
          } else {
            extract(obj[key]); // Recursively check for nested objects
          }
        }
      }
  
      extract(obj);
      resultArray.push(result);
    });
  
    return resultArray;
  }

  export function formatDate(timestamp) {
    const date = new Date(timestamp);
  
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
  
    return formattedDate;
  }

  export function extractNonObjectKeyValuePairsFromObject(obj) {
    const result = {};
  
    function extract(obj) {
      for (const key in obj) {
        if (typeof obj[key] !== 'object') {
          result[key] = obj[key];
        } else {
          extract(obj[key]); // Recursively check for nested objects
        }
      }
    }
  
    extract(obj);
    return result;
  }