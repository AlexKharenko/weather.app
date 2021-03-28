<template>
  <div class="table-container">
    <div v-for="weather in allWeather" :key="weather.id" class="day">
      {{ weather.temperature }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Table",
  computed: mapGetters(["allWeather"]),
};
</script>

<style></style>
