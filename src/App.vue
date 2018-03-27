<template>
  <div id="app">
    <b-navbar variant="faded" type="light">
      <div class='container'>
        <b-navbar-brand href="#">MLTuts</b-navbar-brand>

        <button class='btn btn-primary' @click='goToChat()'>Chat on Gitter</button>
      </div>
    </b-navbar>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToChat () {
      window.location.href = 'https://gitter.im/MLTuts/Lobby';
    },
  },
};
</script>

<style>
body {
  background-color: #F4F8F9;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background: #fff;
}
</style>
