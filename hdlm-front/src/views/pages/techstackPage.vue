<script> 

import '@/assets/css/style.css'
import Layout from '@/views/layouts/layoutSection'

export default {
  components: {
    Layout
  },
  data() {
    return {
      value: "py",
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

          <div class="mb-5">
            <p class="writing-data">Backend Development</p>
            <!--<div class="position-relative">-->
            <img class="card-img" src="@/assets/images/py.png" title='Python'>
            <img class="card-img" src="@/assets/images/docker.png" title='Docker'>
            <img class="card-img" src="@/assets/images/gitlab.png" title='Gitlab'>
            <img class="card-img" src="@/assets/images/git.png" title='Git'>
            <img class="card-img" src="@/assets/images/mongo.png" title='MongoDB'>
            <!--</div>-->
          </div>
          <div class="mb-5">
            <p class="writing-data">Data Science</p>
            <!--<div class="position-relative">-->
            <img class="card-img" src="@/assets/images/py.png" title='Python'>
            <img class="card-img" src="@/assets/images/docker.png" title='Docker'>
            <img class="card-img" src="@/assets/images/gitlab.png" title='Gitlab'>
            <img class="card-img" src="@/assets/images/git.png" title='Git'>
            <img class="card-img" src="@/assets/images/mongo.png" title='MongoDB'>
            <!--</div>-->
          </div>
          <div class="mb-5">
            <p class="writing-data">Frontend Development</p>
            <!--<div class="position-relative">-->
            <img class="card-img" src="@/assets/images/py.png" title='Python'>
            <img class="card-img" src="@/assets/images/docker.png" title='Docker'>
            <img class="card-img" src="@/assets/images/gitlab.png" title='Gitlab'>
            <img class="card-img" src="@/assets/images/git.png" title='Git'>
            <img class="card-img" src="@/assets/images/mongo.png" title='MongoDB'>
            <!--</div>-->
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>