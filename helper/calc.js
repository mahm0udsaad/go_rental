export function calculateDaysRented(dateOut, returnedDate) {
    const date1 = new Date(dateOut);
    const date2 = new Date(returnedDate);
    const timeDifference = date2.getTime() - date1.getTime();
    const daysRented = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Milliseconds to days
    return daysRented;
  }

  export function calculateDaysEarly(returnedDate, timeOut) {
    const date1 = new Date(returnedDate);
    const date2 = new Date(timeOut);
    const timeDifference = date2.getTime() - date1.getTime();
    const daysEarly = Math.floor(timeDifference / (1000 * 3600 * 24)); // Milliseconds to days
    return daysEarly > 0 ? daysEarly : 0;
  }

  export function calculateDaysLate(returnedDate, timeOut) {
    const date1 = new Date(returnedDate);
    const date2 = new Date(timeOut);
    const timeDifference = date1.getTime() - date2.getTime();
    const daysLate = Math.floor(timeDifference / (1000 * 3600 * 24)); // Milliseconds to days
    return daysLate > 0 ? daysLate : 0;
  }

  export function calculateExtraKmFee(meterReadingIn, daysRented, dailyKilometerLimit, extraKilometerPrice) {
    const totalKilometers = meterReadingIn / daysRented;
    const excessKilometers = Math.max(totalKilometers - dailyKilometerLimit, 0);
    const extraKmFee = excessKilometers * extraKilometerPrice;
    return extraKmFee;
  }

  function calculateHoursLate(returnedDate, timeOut) {
    const date1 = new Date(returnedDate);
    const date2 = new Date(timeOut);
    const timeDifference = date1.getTime() - date2.getTime();
    const hoursLate = Math.floor(timeDifference / (1000 * 3600)); // Milliseconds to hours
    return hoursLate > 0 ? hoursLate : 0;
  }

  