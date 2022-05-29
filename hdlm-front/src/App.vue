<template>
  <Home msg="Nothing"/>
</template>

<script>
import Home from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Oswald,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #ffffff;
  background: #141114;
  min-height: 100vh;
  max-height: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
#app ::selection {
  color: #fff;
  background-color: #e329d5;
}
</style>
