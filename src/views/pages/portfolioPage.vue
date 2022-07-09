<script>
import "@/assets/css/style.css";
import Layout from "@/views/layouts/layoutSection";

export default {
  components: {
    Layout,
  },
  data() {
    return {
      items: [
        {
          description: "developing a full stack webapp from system design to deployment.",
          tech: "Python - Django - MySQL - Vuejs - Openshift - Docker",
          domain: "Automotive",
        },
        {
          description: "developing a microservice that analyzes IOT devices data and outputs near realtime data.",
          tech: "Python - FastApi - Celery - MongoDB",
          domain: "IOT",
        },
        {
          description: "developing a gauge detection webapp, setting up cv2 algorithm with video streaming ui and data gathering python microservice.",
          tech: "Python - Mongodb - fastapi - ffmpge - cv2",
          domain: "Industry",
        },
        {
          description: "creating a massive reporting microservice for a fleet management app using fastapi and celery.",
          tech: "Python - fastapi - celery - mysql - mongodb",
          domain: "Fleet management",
        },
        {
          description: "developing multiple dashboards for the Covid pandemic using powerbi and python.",
          tech: "powerbi - python",
          domain: "Medical",
        },
        {
          description: "developing a smart maritime container's supervision tool from electronics & firmware to backend & frontend.",
          tech: "Micropython - python - fastapi - vuejs - mongodb",
          domain: "Maritime",
        },
        {
          description: "developing a discord bot with integrated music playing service and included games.",
          tech: "Python",
          domain: "Entertainment",
        },
      ] 
    };
  },
};
</script>

<template>
  <Layout>
    <div class="col-12 col-xl-8 align-self-right">
      <div class="container" id="writings">
        <!-- HEADER WHEN FULL SIZE -->
        <div class="d-none d-xl-block">
          <h1>Some of my <span>work</span></h1>
        </div>

        <!-- HEADER WHEN SMALL SIZE -->
        <div class="mb-4 d-xl-none d-m-block">
          <h2>Some of my <span> work</span></h2>
        </div>

        <hr class="mt-5" />
        <div class="row my-5">

          <div v-for="(item, index) in items" :key="index" class="col-12 pb-4">
            <a class="writing-link" style="text-decoration: none; font-size: 1.8rem;"> <span style="color:darkgrey">{{ item.domain }} /
              </span>{{ item.description }}</a>
            <p class="metadata">
              <span style="color:gray">
                {{ item.tech }} 
              </span>
            </p>
          </div>

          <div class="containerm">
            <div class="row">
                <div class="col">
                    <div class="image"> <img src="@/assets/images/projects/scd.png" alt=""> 
                      <i>
                      <span style="font-style: bold">
                      Software development projects
                      </span>
                      <br/>
                      Des applications Office premium, un stockage en ligne supplémentaire, une sécurité renforcée, et plus encore.
                      <br/>
                      Python – PowerBI - Excel
                      </i> 
                    </div>
                </div>
                <div class="col">
                    <div class="image"> <img src="@/assets/images/projects/budget.png" alt="">
                      <i>
                      Software development projects
                      <br/>
                      Des applications Office premium, un stockage en ligne supplémentaire, une sécurité renforcée, et plus encore.
                      <br/>
                      Python – PowerBI - Excel
                      </i> 
                    </div>
                </div>
            </div>
          </div>
          <div class="containerm">
            <div class="row">
                <div class="col">
                    <div class="image"> <img src="@/assets/images/projects/covid2.png" alt=""> 
                      <i class="">
                      Software development projects
                      <br/>
                      Des applications Office premium, un stockage en ligne supplémentaire, une sécurité renforcée, et plus encore.
                      <br/>
                      Python – PowerBI - Excel
                      </i> 
                    </div>
                </div>
                <div class="col">
                    <div class="image"> <img src="@/assets/images/projects/covid3.png" alt="">
                      <i class="">
                      Software development projects
                      <br/>
                      Des applications Office premium, un stockage en ligne supplémentaire, une sécurité renforcée, et plus encore.
                      <br/>
                      Python – PowerBI - Excel
                      </i>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>