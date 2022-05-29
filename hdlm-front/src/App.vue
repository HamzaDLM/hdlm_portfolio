<template>

  <vue-page-transition>
    <router-view></router-view>
  </vue-page-transition>

</template>

<script>

import '@/assets/css/style.css'

export default {
  name: 'App',
  components: {
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
