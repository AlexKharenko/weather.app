<template>
  <div class="city-container">
    <router-link
      v-for="weather in allWeather"
      :key="weather.id"
      :to="`/weather/${weather.id}`"
    >
      <WeatherItem :weather="weather" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WeatherItem from "@/components/WeatherItem.vue";

export default {
  name: "WeatherContainer",
  components: {
    WeatherItem,
  },
  methods: mapActions(["fetchRecCities"]),
  computed: mapGetters(["allWeather"]),
  created() {
    this.fetchRecCities();
  },
};
</script>

<style></style>
