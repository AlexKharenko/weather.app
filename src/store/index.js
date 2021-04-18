import { createStore } from "vuex";
import weather from "./modules/weather";
import city from "./modules/city";

export default createStore({
  modules: {
    weather,
    city,
  },
});
