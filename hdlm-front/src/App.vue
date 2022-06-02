<template>

  <vue-page-transition>
    <router-view ></router-view>
  </vue-page-transition>

</template>

<script>

import '@/assets/css/style.css'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      currentTheme: localStorage.getItem('theme-color')
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
