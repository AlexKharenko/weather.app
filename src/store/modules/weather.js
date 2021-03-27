const state = {
  weather: [
    {
      id: 1,
      city: "Kyiv",
      country: "UA",
      temperature: "8",
      url: "../assets/logo.png",
      weather_info: "Okey",
    },
    {
      id: 2,
      city: "London",
      country: "UK",
      temperature: "4",
      url: "../assets/logo.png",
      weather_info: "Okey",
    },
  ],
};

const getters = {
  allWeather: (state) => state.weather,
};

const actions = {
   /* async fetchWeather({commit}){
        //const response = await 

        commit('setWeather', response);
    }*/
};

const mutations = {
    setWeather: (state, weather) => (state.weather = weather)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
