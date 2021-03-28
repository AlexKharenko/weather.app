<template>
  <div class="wrapper">
    <router-link to="/weather">Back</router-link>
    <h1 class="city-name">
      <span>{{ allWeather[0].city }}</span>
      <sup>{{ allWeather[0].country }}</sup>
    </h1>
    <Table />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Table from "@/components/Table.vue";

export default {
  name: "City",
  components: {
    Table,
  },
  computed: mapGetters(["allWeather"]),
};
</script>

<style></style>
