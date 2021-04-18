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
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-column-gap: 20px;
}
</style>
