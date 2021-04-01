import { getWeatherById } from "../../functions/fetch_funcs";

const state = {
  appId: "91703bcfce9c478af2e68120c793bbc7",
  current_weather: {},
  forecast: [],
};

const getters = {
  CurrentWeather: (state) => state.current_weather,
  Forecast: (state) => state.forecast,
};

const actions = {
  async fetchForecastById({ commit, state }, id) {
    let res = await getWeatherById(state.appId, id);
    const cordinates = res.coord;
    await commit("setCurrentWeather", res);
    res = await fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${cordinates.lat}&lon=${cordinates.lon}&exclude=current,minutely,hourly,alerts&appid=${state.appId}`
    ).then((response) => response.json());
    console.log(res);

    commit("setForecast", res.daily);
  },
};

const mutations = {
  setCurrentWeather: (state, current_weather) =>
    (state.current_weather = current_weather),
  setForecast: (state, forecast) => (state.forecast = forecast),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
