function isDateValid(date) {
    const year = date.substring(6,10);
    const month = date.substring(3,5);
    const day = date.substring(0,2)
    return (
      dotCheck(date) && dateLength(date)
      && dayLength(day) && dayRange(day) && dayValid31(day,month) && dayValid30(day,month) && dayValid29(day,month,year)
      && monthLength(month) && monthRange(month)
      && yearLength(year) && yearValid(year)
    )
}
function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function dotCheck(date) {
  return date.indexOf(".") == 2
  && date.lastIndexOf(".") == 5;
}
function dateLength(date) {
  return date.length === 10;
}

function dayLength(day) {
  return day.length === 2;
}
function dayRange(day) {
  return day >= 1 && day <= 31;
}
function dayValid31(day,month) {
  return ((day != 31) || (day == 31 && month == (1||3||5||7||8||10||12)))
}
function dayValid30(day,month) {
  return ((day != 30) || (month != 2))
}
function dayValid29(day,month,year) {
  return ((day != 29) || (month != 2) || (isLeapYear(year)))
}

function monthLength(month) {
  return month.length === 2;
}
function monthRange(month) {
  return month >= 1 && month <= 12;
}

function yearLength(year) {
  return year.length === 4;
}
function yearValid(year) {
  return year >= 0 && year <= 9999;
}