<template>
  <div class="wrapper">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
  <teleport to="#loading" v-if="!isReady">
    <div class="loading-spinner">
      <div class="img-spinner">
        <img src="./assets/icons/sun.png" />
      </div>
    </div>
  </teleport>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("loading", ["isReady"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;

  a {
    text-decoration: none;
    color: black;
  }

  #nav {
    text-align: center;
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
    }

    a.router-link-exact-active {
      color: #42b983;
    }
  }
}

.loading-spinner {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  .img-spinner {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    img {
      animation: fullRotate 10s linear infinite;
      width: 300px;
      height: 300px;
    }
  }
}
@keyframes fullRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
