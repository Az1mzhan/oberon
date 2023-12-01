export const getDateDifferenceInTimezone = (date1: Date, date2: Date): number => {
  const utcDate1 = Date.UTC(
    date1.getUTCFullYear(),
    date1.getUTCMonth(),
    date1.getUTCDate(),
    date1.getUTCHours(),
    date1.getUTCMinutes(),
    date1.getUTCSeconds(),
    date1.getUTCMilliseconds()
  );

  const utcDate2 = Date.UTC(
    date2.getUTCFullYear(),
    date2.getUTCMonth(),
    date2.getUTCDate(),
    date2.getUTCHours(),
    date2.getUTCMinutes(),
    date2.getUTCSeconds(),
    date2.getUTCMilliseconds()
  );

  return Math.abs(utcDate2 - utcDate1);
};
