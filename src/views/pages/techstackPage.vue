<script> 

import '@/assets/css/style.css'
import Layout from '@/views/layouts/layoutSection'

export default {
  components: {
    Layout
  },
  data() {
    return {
      techStack: [
        {
          name: "Backend Development",
          values: [
            { "name": "Python: General purpose programming language", "url": "py.png"},
            { "name": "Django", "url": "django.png"},
            { "name": "FastAPI", "url": "fastapi.png"},
            { "name": "Flask", "url": "flask.png"},
            { "name": "MySQL", "url": "mysql.png"},
            { "name": "MongoDB", "url": "mongo.png"},
            { "name": "PostGreSQL", "url": "postgres.png"},
            { "name": "Redis", "url": "redis.png"},
          ],
        },
        {
          name: "Data Science",
          values: [
            { "name": "Python", "url": "py.png" },
            { "name": "PowerBI", "url": "powerbi.png" },
            { "name": "Pandas", "url": "pandas.png" },
            { "name": "Numpy", "url": "numpy.png" },
            { "name": "Excel", "url": "excel.png" },
          ]
        },
        {
          name: "Frontend Development",
          values: [
            { "name": "Javascript", "url": "js.png" },
            { "name": "VUEJS", "url": "vue.png" },
            { "name": "HTML", "url": "html.png" },
            { "name": "CSS", "url": "css.png" },
          ]
        },
        {
          name: "DevOps",
          values: [
            { "name": "OpenShift", "url": "oc.png" },
            { "name": "Kubernetes", "url": "k8s.png" },
            { "name": "Gunicorn", "url": "guni.png" },
            { "name": "Uvicorn", "url": "uvicorn.png"},
            { "name": "Git", "url": "git.png" },
            { "name": "Github", "url": "github.png" },
            { "name": "Gitlab", "url": "gitlab.png"},
            { "name": "Docker", "url": "docker.png"},
            // { "name": "Nginx", "url": "nginx.png" },
          ]
        }

      ]
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
            my ever expanding <span>~ techstack</span>
          </h1>
        </div>

        <!-- HEADER WHEN SMALL SIZE -->
        <div class="mb-4 d-xl-none d-m-block">
          <h2>
            my ever expanding <span>~ techstack</span>
          </h2>
        </div>

        <hr class="mt-5">
        <div class="row my-5">

          <div class="mb-5" v-for="stack in techStack" :key="stack.name">
            <p class="writing-data">{{ stack.name }}</p>
            <div v-for="item in stack.values" :key="item.id">
              <img class="card-img" :src="require(`@/assets/images/technology/${item.url}`)" :title="item.name">
            </div>
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>
