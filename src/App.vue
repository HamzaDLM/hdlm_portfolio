<template>
  
  <router-view/>

</template>

<script>

import '@/assets/css/style.css'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  
  watch: {
        $route: {
            immediate: true,
            handler() { //to was in argument
              document.title = 'Hamza Dellam';
              //  |  + to.name || 'Hamza Dellam'
            }
        },
    }
}
</script>

<style>

</style>
