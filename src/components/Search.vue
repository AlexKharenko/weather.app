<template>
  <form v-on:submit.prevent="searchCity">
    <input
      type="search"
      class="input input-search"
      v-model="search"
      placeholder="Search for a city"
    />
    <button type="submit" class="btn btn-submit">Search</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["setCity", "fetchWeatherByCity"]),
    ...mapGetters(["getCity"]),
    searchCity() {
      this.setCity(this.search);
      this.fetchWeatherByCity();
    },
  },
};
</script>

<style lang="scss">
.input {
  outline: none;
  border: none;
  border-bottom: solid 2px black;
  padding: 10px 7px;
  margin: 0 20px 20px 20px;
  font-family: Roboto, sans-serif;
}
.input-search {
  font-size: 16px;
}
.btn {
  outline: none;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  margin: 0 20px 20px 0;
}
.btn-submit {
  border: solid 2px black;
  background-color: white;
  padding: 10px 7px;
  font-weight: 500;
}
.btn-submit:hover {
  padding: 9px 6px;
  border: solid 3px black;
}
</style>
