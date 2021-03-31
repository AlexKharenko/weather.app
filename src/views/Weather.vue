<template>
  <div class="weather-container">
    <!--<Search />-->
    <WeatherContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherContainer from "@/components/WeatherContainer.vue";
//import Search from "@/components/Search.vue";
import { mapActions } from "vuex";

export default {
  name: "Weather",
  components: {
    //Search,
    WeatherContainer,
  },
  methods: mapActions(["fetchRecCities"]),
  created() {
    this.fetchRecCities();
  },
};
</script>
