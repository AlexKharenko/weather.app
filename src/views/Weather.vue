<template>
  <div class="weather-container">
    
    <WeatherContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherContainer from "@/components/WeatherContainer.vue";

export default {
  name: "Weather",
  components: {
    WeatherContainer,
  },
};
</script>
