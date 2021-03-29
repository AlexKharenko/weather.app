<template>
  <form v-on:submit.prevent="searchCity">
    {{ search }}
    <input type="search" v-model="search" placeholder="Search for a city" />
    <button type="submit">Submit</button>
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
    ...mapActions(["setCity"]),
    ...mapGetters(["getCity"]),
    searchCity() {
      this.setCity(this.search);
    },
  },
};
</script>

<style></style>
