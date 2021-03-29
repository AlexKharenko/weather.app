<template>
  <div class="city">
    <h1 class="city-name">
      <span>{{ weather.name }}</span>
      <sup>{{ weather.sys.country }}</sup>
    </h1>

    <div class="city-temperature">
      <h1>{{ weather.main.temp }}</h1>
      <sup>°C</sup>
    </div>

    <div class="city-weather">
      <img
        :src="`http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`"
      />
      <span>{{ weather.weather[0].description }}</span>
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
