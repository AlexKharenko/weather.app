const state = {
  appId: "91703bcfce9c478af2e68120c793bbc7",
  weather: [],
  city: "Kyiv",
  rec_cities: ["Kyiv", "London", "Barcelona"],
};

const getters = {
  getCity: (state) => state.city,
  allWeather: (state) => state.weather,
  allCities: (state) => state.rec_cities,
};

const actions = {
  async fetchWeatherByCity({ commit, state }) {
    //lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${state.appId}` //forecast
    ).then((response) => response.json());
    console.log(res);

    commit("setWeather", res);
  },
  async fetchWeatherById({ commit, state }, id) {
    //lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${state.appId}`
    ).then((response) => response.json());
    console.log(res);

    commit("setWeather", res);
  },
  async fetchRecCities({ commit, state }) {
    let result = [];
    for (let i = 0; i < state.rec_cities.length; i++) {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${state.rec_cities[i]}&appid=${state.appId}`
      ).then((response) => response.json());
      res.main.temp = Math.round(res.main.temp - 273.15).toFixed(1);
      result.push(res);
    }
    console.log(result);
    commit("setWeather", result);
  },
  setCity({ commit }, city) {
    commit("setCity", city);
  },
};

const mutations = {
  setCity: (state, city) => (state.city = city),
  setWeather: (state, weather) => (state.weather = weather),
  setCities: (state, rec_cities) => (state.rec_cities = rec_cities),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
