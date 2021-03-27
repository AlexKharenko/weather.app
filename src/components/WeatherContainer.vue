<template>
  <div class="city-container">
    <div v-for="weather in allWeather" :key="weather.id" class="city">
      <h1 class="city-name">
        <span>{{ weather.city }}</span>
        <sup>{{ weather.country }}</sup>
      </h1>

      <div class="city-temperature">
        <h1>{{ weather.temperature }}</h1>
        <sup>°C</sup>
      </div>

      <div class="city-weather">
        <img :src="weather.url" />
        <span>{{ weather.weather_info }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WeatherContainer",
  computed: mapGetters(["allWeather"]),
};
</script>

<style></style>
