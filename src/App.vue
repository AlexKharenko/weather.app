<template>
  <div class="wrapper">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

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

      a.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
