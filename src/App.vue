<template>

  <router-view basename={process.env.PUBLIC_URL}></router-view>

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
            handler(to) {
              document.title = 'Hamza Dellam | ' + to.name || 'Hamza Dellam';
            }
        },
    }
}
</script>

<style>

</style>
