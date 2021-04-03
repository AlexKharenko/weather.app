<template>
  <div class="city-container">
    <router-link
      v-for="weather in allWeather"
      :key="weather.id"
      :to="`/city/${weather.id}`"
    >
      <WeatherItem :weather="weather" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WeatherItem from "@/components/WeatherItem.vue";

export default {
  name: "WeatherContainer",
  components: {
    WeatherItem,
  },
  computed: mapGetters(["allWeather"]),
};
</script>

<style lang="scss">
.city-container {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
</style>
