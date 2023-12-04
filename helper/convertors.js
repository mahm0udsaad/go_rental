
export const convertFieldsToInt = (data) => {
    const keysToConvertToInt = ['meter',
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
    'maintenance']; 

    keysToConvertToInt.forEach((key) => {
      if (data[key] !== undefined && !isNaN(data[key])) {
        data[key] = parseInt(data[key]); // Convert the field value to an integer
      }
    });
  
    return data;
  };


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