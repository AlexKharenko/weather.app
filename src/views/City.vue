<template>
  <div class="city-forecast">
    <router-link to="/">
      <img src="../assets/icons/back.svg" alt="" />
      <p>Back</p></router-link
    ><br />
    <h1 class="city-name">
      <span>{{ getName }}</span>
      <sup>{{ getSys.country }}</sup>
    </h1>
    <Days />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Days from "@/components/Days.vue";

export default {
  name: "City",
  components: {
    Days,
  },
  computed: {
    ...mapGetters(["getName", "getSys"]),
  },
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

<style lang="scss">
.city-forecast {
  cursor: default;
  margin: 0 20px 0 20px;
  position: relative;
  a {
    display: flex;
    flex-direction: row;
    font-size: 24px;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      margin: 0;
    }
  }
  .city-name {
    font-size: 60px;
    margin: 20px 0 50px 20px;
  }
}
</style>
