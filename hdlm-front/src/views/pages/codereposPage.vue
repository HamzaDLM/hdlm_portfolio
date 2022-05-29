<script> 

import '@/assets/css/style.css'
import axios from 'axios'

const getAPI = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: "https://api.github.com/users/hamzadlm/repos"
});

export default {
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
<div id="topnav" class="sticky-top container-fluid pl-0 d-xl-none d-lg-none d-sm-block"></div>
  <div class="row g-0">
    <div class="col-2 pl-0 d-none d-xl-block">
      <div class="card">
        <div id="sidebar">
          <p class="logo-branding mb-0">hamza</p>
          <p class="logo-branding mb-0">dellam</p>
          <ul class="mt-5 pl-0">
            <li class="litem"><a href="/">00.about me</a></li>
            <li class="litem"><a href="/portfolio">01.portfolio</a></li>
            <li class="litem"><a href="/techstack">02.tech stack</a></li>
            <li class="litem active"><a href="/coderepos">03.code repos</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-auto"></div>

    <div class="col-12 col-xl-8 align-self-right">
      <div class="container" id="writings">
        <h1 class="d-none d-xl-block">
          My projects <span> ~ repositories</span>
        </h1>
        <hr class="mt-5">
        <div class="roow my-5">
          <div v-for="item in items" :key="item.title" class="col-12 pb-4">
            <a :href="item.html_url" target="_blank" class="writing-link"
              >{{ item.name }}</a
            >
            <p class="metadata">{{ item.description }} <span>{{ item.language }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>