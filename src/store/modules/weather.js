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
  rec_cities: ["Kyiv", "London", "Barcelona"],
};

const getters = {
  allWeather: (state) => state.weather,
  allCities: (state) => state.rec_cities,
};

const actions = {
  /* async fetchWeather({commit}){
        //const response = await 

        commit('setWeather', response);
    }*/
  /*async fetchRecCities({commit}, state){
      let result = [];
      for(i=0; i<state.rec_cities.length; i++){
        const response = await ;
        result.push(response);
      }

      commit('SetWeather', result);
    }*/
};

const mutations = {
  setWeather: (state, weather) => (state.weather = weather),
  setCities: (state, rec_cities) => (state.rec_cities = rec_cities),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
