<script>
import "@/assets/css/style.css";
import Layout from "@/views/layouts/layoutSection";

export default {
  components: {
    Layout,
  },
  data() {
    return {
      meta: { title: "adazdza" },
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
        
          <p class="writing-data">Backend Development</p>
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
          <p class="writing-data">Data Science</p>
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