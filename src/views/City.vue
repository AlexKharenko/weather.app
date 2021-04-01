<template>
  <div class="city-forecast">
    <router-link to="/weather">Back</router-link><br />
    {{ CurrentWeather.name }}<br />
    <div class="temp" v-for="forecast in Forecast" :key="forecast.id">
      {{ convertTimestamp(forecast.dt) }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import Table from "@/components/Table.vue";
import { convertTimestamp } from "../functions/formating";

export default {
  name: "City",
  //components: {
  //  Table,
  //},
  computed: mapGetters(["Forecast", "CurrentWeather"]),
  methods: {
    ...mapActions(["fetchForecastById"]),
    convertTimestamp,
  },
  created() {
    this.fetchForecastById(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name == "City") {
      this.fetchForecastById(to.params.id);
      next();
    }
  },
};
</script>

<style></style>
