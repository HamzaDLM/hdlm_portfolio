<script> 

import '@/assets/css/style.css'
import axios from 'axios'
import Layout from '@/views/layouts/layoutSection'

const getAPI = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: "https://api.github.com/users/hamzadlm/repos"
});

export default {
  components: {
    Layout
  },
  data() {
    return {
      items: [
        // { 
        //   title: "fastapi_boilerplate >>",
        //   description: "FastAPI boilerplate for small to medium sized projects",
        //   url: "https://github.com/HamzaDLM/fastapi_boilerplate"
        // },
        // { 
        //   title: "fastapi_boilerplate >>",
        //   description: "FastAPI boilerplate for small to medium sized projects",
        //   url: "https://github.com/HamzaDLM/fastapi_boilerplate"
        // },
        // { 
        //   title: "fastapi_boilerplate >>",
        //   description: "FastAPI boilerplate for small to medium sized projects",
        //   url: "https://github.com/HamzaDLM/fastapi_boilerplate"
        // },
      ]
    }
  },
  created() {
    this.getRepos()
  },
  methods: {
    getRepos() {
      return getAPI
        .get()
          .then((response) => {
            this.items = response.data
            console.log(Object.keys(response.data[0]))
          })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>

<template>
  <Layout>
    <div class="col-12 col-xl-8 align-self-right">
      <div class="container" id="writings">
        <h1 class="d-none d-xl-block">
          My projects <span> ~ repositories</span>
        </h1>
        <hr class="mt-5">
        <div class="row my-5">

          <div v-for="item in items" :key="item.title" class="col-12 pb-4">
            <a :href="item.html_url" target="_blank" class="writing-link"
              >{{ item.name }}</a
            >
            <p class="metadata">{{ item.description }} <span>{{ item.language }}</span></p>
          </div>
      
        </div>
      </div>
    </div>
  </Layout>
</template>