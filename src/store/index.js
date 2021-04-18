import { createStore } from "vuex";
import weather from "./modules/weather";
import city from "./modules/city";
import loading from "./modules/loading";

export default createStore({
  modules: {
    weather,
    city,
    loading,
  },
});
