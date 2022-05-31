<script> 

import '@/assets/css/style.css'
import Layout from '@/views/layouts/layoutSection'

export default {
  components: {
    Layout
  },
  data() {
    return {
      meta: {title: "adazdza"},
      items: [
        { title: "Algo Stables in a Market Stress >>", description: "Merlion @ 2022-05-11T02:11:57Z"},
        { title: "Algo Stables in a Market Stress >>", description: "Merlion @ 2022-05-11T02:11:57Z"},
        { title: "Algo Stables in a Market Stress >>", description: "Merlion @ 2022-05-11T02:11:57Z"},
        { title: "Algo Stables in a Market Stress >>", description: "Merlion @ 2022-05-11T02:11:57Z"},
      ]
    }
}
};
</script>

<template>
  <Layout>
    <div class="col-12 col-xl-8 align-self-right">
      <div class="container" id="writings">
        <h1 class="d-none d-xl-block">
          Hi, welcome to my <span>playground</span>
        </h1>
        <hr class="mt-5">
        <div class="row my-5">

          <div v-for="item in items" :key="item.title" class="col-12 pb-4">
            <a href="/" class="writing-link"
              >{{ item.title }}</a
            >
            <p class="metadata">{{ item.description }}</p>
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>