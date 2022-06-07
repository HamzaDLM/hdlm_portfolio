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

        <!-- HEADER WHEN FULL SIZE -->
        <div class="d-none d-xl-block">
          <h1>
            my ever expanding <span>techstack</span>
          </h1>
        </div>
        
        <!-- HEADER WHEN SMALL SIZE -->
        <div class="mb-4 d-xl-none d-m-block">
          <h2>
            my ever expanding <span>techstack</span>
          </h2>
        </div>

        <hr class="mt-5">
        <div class="row my-5">

          <div class="mb-5">
            <p class="writing-data">Backend Development</p>
            <!--<div class="position-relative">-->
            <img class="card-img" src="@/assets/images/technology/py.png" title='Python: General purpose programming language'>
            <img class="card-img" src="@/assets/images/technology/django.png" title='Django: Backend Framework'>
            <img class="card-img" src="@/assets/images/technology/fastapi.png" title='Python'>
            <img class="card-img" src="@/assets/images/technology/flask.png" title='Python'>

            <img class="card-img" src="@/assets/images/technology/mysql.png" title='MongoDB'>
            <img class="card-img" src="@/assets/images/technology/mongo.png" title='MongoDB'>
            <img class="card-img" src="@/assets/images/technology/postgres.png" title='MongoDB'>
            <img class="card-img" src="@/assets/images/technology/redis.png" title='MongoDB'>
            <img class="card-img" src="@/assets/images/technology/github.png" title='Gitlab'>
            <img class="card-img" src="@/assets/images/technology/gitlab.png" title='Gitlab'>
            <img class="card-img" src="@/assets/images/technology/docker.png" title='Docker'>
            <img class="card-img" src="@/assets/images/technology/git.png" title='Git'>
            <img class="card-img" src="@/assets/images/technology/uvicorn.png" title='Git'>
            
            <!--</div>-->
          </div>
          <div class="mb-5">
            <p class="writing-data">Data Science</p>
            <!--<div class="position-relative">-->
            <img class="card-img" src="@/assets/images/technology/py.png" title='Python'>
            <img class="card-img" src="@/assets/images/technology/powerbi.png" title='Docker'>
            <img class="card-img" src="@/assets/images/technology/pandas.png" title='Docker'>
            <img class="card-img" src="@/assets/images/technology/numpy.png" title='Docker'>
            <!--</div>-->
          </div>
          <div class="mb-5">
            <p class="writing-data">Frontend Development</p>
            <!--<div class="position-relative">-->
            <img class="card-img" src="@/assets/images/technology/js.png" title='Python'>
            <img class="card-img" src="@/assets/images/technology/vue.png" title='Docker'>
            <img class="card-img" src="@/assets/images/technology/html.png" title='Gitlab'>
            <img class="card-img" src="@/assets/images/technology/css.png" title='Git'>
            <!--</div>-->
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>