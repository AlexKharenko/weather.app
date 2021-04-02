<template>
  <div class="table-container">
    <div
      class="day"
      @click="changeDay(forecast.dt)"
      v-for="forecast in Forecast"
      :key="forecast.dt"
    >
      {{ convertTimestamp(forecast.dt).week_day }}
      <div v-if="active === forecast.dt">
        {{ convertTimestamp(forecast.dt).date }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { convertTimestamp } from "../functions/formating";

export default {
  name: "Table",
  props: ["date"],
  data() {
    return {
      active: "",
    };
  },
  computed: mapGetters(["Forecast", "DefDay"]),
  methods: {
    convertTimestamp,
    changeDay(date) {
      this.active = date;
    },
  },
  watch: {
    DefDay() {
      this.changeDay(this.DefDay);
    },
  },
};
</script>

<style></style>
