<template>
  <div class="city">
    <h2 class="city-name">
      <span>{{ weather.name }}</span>
      <sup>{{ weather.sys.country }}</sup>
    </h2>

    <h1 class="city-temperature">
      <span>{{ KelvinToCelcius(weather.main.temp) }}</span>
      <sup>°C</sup>
    </h1>

    <div class="city-weather">
      <img
        :src="`http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`"
      />
      <span>{{ weather.weather[0].description }}</span>
    </div>
  </div>
</template>

<script>
import { KelvinToCelcius } from "../functions/formating";

export default {
  name: "WeatherItem",
  props: {
    weather: Object,
  },
  methods: {
    KelvinToCelcius,
  },
};
</script>

<style lang="scss">
.city {
  position: relative;
  text-align: left;
  margin: 30px 30px;
  border: solid 2px gray;
  border-radius: 10%;
  width: 200px;
  height: 250px;
  padding: 10px;
  overflow: hidden;

  .city-temperature {
    margin-top: 10px;
    //font-size: 22px;
    font-weight: 500;
  }
  .city-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 100px;
      width: 100px;
    }
  }
}
</style>
