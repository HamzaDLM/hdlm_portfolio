<script> 

import '@/assets/css/style.css'

export default {
  data() {
    return {
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
            <li class="litem active"><a href="/techstack">02.tech stack</a></li>
            <li class="litem"><a href="/coderepos">03.code repos</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-auto"></div>

    <div class="col-12 col-xl-8 align-self-right">
      <div class="container" id="writings">
        <h1 class="d-none d-xl-block">
          Hi, welcome to my <span>playground</span>
        </h1>
        <hr class="mt-5">
        <div class="roow my-5">
          <div v-for="item in items" :key="item.title" class="col-12 pb-4">
            <a href="/" class="writing-link"
              >{{ item.title }}</a
            >
            <p class="metadata">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>