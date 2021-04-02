var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

var day_of_week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const convertTimestamp = (timestamp) => {
  const ts = new Date(timestamp * 1000);
  const day = {
    year: ts.getFullYear(),
    month: months[ts.getMonth()],
    date: ts.getDate(),
    week_day: day_of_week[ts.getDay()],
    hours: ts.getHours(),
    minutes: ts.getMinutes(),
  };
  return day;
};

const KelvinToCelcius = (temp) => {
  return Math.round(temp - 273.15).toFixed(1);
};

export { convertTimestamp, KelvinToCelcius };
