const state = {
  appId: "91703bcfce9c478af2e68120c793bbc7",
  weather: [],
  city: "",
  rec_cities: [
    "Kyiv",
    "London",
    "Barcelona",
    "Washington",
    "Moscow",
    "Paris",
    "Odesa",
    "Berlin",
  ],
};

const getters = {
  getCity: (state) => state.city,
  allWeather: (state) => state.weather,
  allCities: (state) => state.rec_cities,
};

const actions = {
  async fetchWeatherByCity({ commit, state, dispatch }) {
    dispatch("loading/changeReady", false, { root: true });
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${state.appId}`
    ).then((response) => response.json());
    console.log(res);

    await commit("setWeather", [res]);
    dispatch("loading/changeReady", true, { root: true });
  },
  async fetchRecCities({ commit, state, dispatch }) {
    dispatch("loading/changeReady", false, { root: true });
    let result = [];
    for (let i = 0; i < state.rec_cities.length; i++) {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${state.rec_cities[i]}&appid=${state.appId}`
      ).then((response) => response.json());
      result.push(res);
    }
    console.log(result);
    await commit("setWeather", result);
    dispatch("loading/changeReady", true, { root: true });
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
