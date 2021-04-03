<template>
  <div class="home-weather-container">
    <h1 class="app-name">Weather.app</h1>
    <Search />
    <WeatherContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherContainer from "@/components/WeatherContainer.vue";
import Search from "@/components/Search.vue";
import { mapActions } from "vuex";

export default {
  name: "Weather",
  components: {
    Search,
    WeatherContainer,
  },
  methods: mapActions(["fetchRecCities"]),
  created() {
    this.fetchRecCities();
  },
};
</script>

<style lang="scss">
.home-weather-container {
  position: relative;
  text-align: center;
  .app-name {
    font-size: 40px;
    margin: 30px;
  }
}
</style>
