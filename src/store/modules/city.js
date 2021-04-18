import { getWeatherById } from "../../functions/fetch_funcs";

const state = {
  appId: "91703bcfce9c478af2e68120c793bbc7",
  default_day: "",
  forecast: [],
  sys: {},
  name: "",
};

const getters = {
  Forecast: (state) => state.forecast,
  DefDay: (state) => state.default_day,
  getSys: (state) => state.sys,
  getName: (state) => state.name,
};

const actions = {
  async fetchForecastById({ commit, state, dispatch }, id) {
    dispatch("loading/changeReady", false, { root: true });
    let res = await getWeatherById(state.appId, id);
    const cordinates = res.coord;
    commit("setName", res.name);
    commit("setSys", res.sys);
    res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${cordinates.lat}&lon=${cordinates.lon}&exclude=current,minutely,hourly,alerts&appid=${state.appId}`
    ).then((response) => response.json());
    console.log(res);

    commit("setDefDate", res.daily[0].dt);
    commit("setForecast", res.daily);
    dispatch("loading/changeReady", true, { root: true });
  },
};

const mutations = {
  setName: (state, name) => (state.name = name),
  setSys: (state, sys) => (state.sys = sys),
  setForecast: (state, forecast) => (state.forecast = forecast),
  setDefDate: (state, date) => (state.default_day = date),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
