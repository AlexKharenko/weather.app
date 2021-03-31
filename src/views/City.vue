<template>
  <div class="wrapper">
    <router-link to="/weather">Back</router-link><br />
    <!--<router-link to="/weather/703448">Kyiv</router-link><br />
    <span>{{ allWeather.city.name }}</span>-->
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
    ...mapActions(["fetchWeatherById"]),
  },
  created() {
    this.fetchWeatherById(this.$route.params.id);
  },
};
</script>

<style></style>
