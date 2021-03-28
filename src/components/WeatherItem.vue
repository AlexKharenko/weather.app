<template>
  <div class="city">
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
</template>

<script>
export default {
  name: "WeatherItem",
  props: {
    weather: Object,
  },
};
</script>

<style></style>
