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
    color(param) {
      switch (param) {
        case 'Python':
          return '#4b8bbe';
        case 'Vue':
          return 'lightgreen';
        case 'Javascript':
          return 'yellow';
        default: return 'var(--primary)'
      }
    },
    sorted(param) {
      param.sort(function (a, b) {
        return new Date(b.updated_at) - new Date(a.updated_at);
      })
    },
    async getRepos() {
      return await getAPI
        .get()
          .then((response) => {
            this.items = response.data
            this.items = this.items.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            console.log(this.items)
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

        <!-- HEADER WHEN FULL SIZE -->
        <div class="d-none d-xl-block">
          <h1>
            My Github <span> ~ repositories</span>
          </h1>
        </div>
        
        <!-- HEADER WHEN SMALL SIZE -->
        <div class="mb-4 d-xl-none d-m-block">
          <h2>
            My Github <span> ~ repositories</span>
          </h2>
        </div>

        <hr class="mt-5">
        <div class="row my-5">

          <div v-for="item in items" :key="item.title" class="col-12 pb-4">
            <a :href="item.html_url" target="_blank" class="writing-link"
              >{{ item.name }}</a
            >
            <p class="metadata">{{ item.description }} 
              <span :style="`color:` + color(item.language)">
                {{ item.language }}</span> - {{ item.updated_at }}</p>
          </div>
      
        </div>
      </div>
    </div>
  </Layout>
</template>