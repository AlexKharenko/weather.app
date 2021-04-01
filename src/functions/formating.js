const convertTimestamp = (timestamp) => {
  const ts = new Date(timestamp * 1000);
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
  var year = ts.getFullYear();
  var month = months[ts.getMonth()];
  var date = ts.getDate();

  var day = date + " " + month + " " + year;
  return day;
};

const KelvinToCelcius = (temp) => {
  return Math.round(temp - 273.15).toFixed(1);
};

export { convertTimestamp, KelvinToCelcius };
