<template>
  <form v-on:submit.prevent="Ok">
    {{ search }}
    <input type="search" v-model="search" placeholder="Search for a city" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style></style>
