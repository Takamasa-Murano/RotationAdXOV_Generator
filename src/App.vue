<template>
  <div id="app">
    <myinputs></myinputs>
  </div>
</template>

<script>
import myinputs from "./components/inputs"
export default {
  components: {
    myinputs
  },
  data () {
    return {
      msg: "Hello World!"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
