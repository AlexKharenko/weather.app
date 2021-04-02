<template>
  <div class="city-forecast">
    <router-link to="/">Back</router-link><br />
    {{ CurrentWeather.name }}<br />
    <Table />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Table from "@/components/Table.vue";

export default {
  name: "City",
  components: {
    Table,
  },
  computed: mapGetters(["CurrentWeather"]),
  methods: {
    ...mapActions(["fetchForecastById"]),
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
