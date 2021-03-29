<template>
  <div class="wrapper">
    <router-link to="/weather">Back</router-link><br>
    <router-link to="/weather/703448">Kyiv</router-link><br>
    <span>{{ allWeather.city.name }}</span>
    <!--<h1 class="city-name">
      <span>{{ allWeather[0].city.name }}</span>
      <sup>{{ allWeather[0].city.country }}</sup>
    </h1>
    <Table />-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import Table from "@/components/Table.vue";

export default {
  name: "City",
  //components: {
  //  Table,
  //},
  computed: mapGetters(["allWeather"]),
  methods: {
    ...mapActions(["fetchWeatherById", "fetchRecCities"]),
  },
  created() {
    this.fetchWeatherById(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name == "City") {
      next(this.fetchWeatherById(to.params.id));
    }
  },
};
</script>

<style></style>
