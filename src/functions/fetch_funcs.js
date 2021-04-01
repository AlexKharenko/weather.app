const getWeatherById = async (appId, id) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${appId}`
  ).then((response) => response.json());
  console.log(res);
  return res;
};

export { getWeatherById };
