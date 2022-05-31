<script> 

import '@/assets/css/style.css'
import Layout from '@/views/layouts/layoutSection'

export default {
  components: {
    Layout
  },
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
    <Layout :pseudo-slot="heeyzaezaezae">
      <div class="col-12 col-xl-8 align-self-right">
        <div class="container" id="writings">
          <h1 class="d-none d-xl-block">
            hi, welcome to my <span>playground</span>
          </h1>
          <hr class="mt-5">
          <div class="row my-5">
            <div>
              <p class="writing-data">
              <img src="@/assets/images/hdpic.jpg" width="200">
              I am a software developer specializing in backend development, but have experience with all steps of the software development life-cycle and can be efficiently autonomous and work independently.
With an overall experience of 5 years, I was an aeronautics engineer before deciding that software development is what I wish to pursue.
              </p>
            </div>
            <div>
              <p class="writing-data" style="font-weight: bold; font-size: 1.6rem">Interest Map:</p>
              <p class="writing-data">[IOT, Cyber Security, Game development, DevOps, Electronics, Real-time monitoring, ML, AI, CV, …]</p>  
            </div>
            <div>
              <p class="writing-data" style="font-weight: bold; font-size: 1.6rem">Areas professionally worked in:</p>
              <p class="writing-data">[IOT, Health, Aeronautics, Rail, Automobile]</p>  
            </div>
            <div>
              <p class="writing-data" style="font-weight: bold; font-size: 1.6rem">Career Map:</p>
              <p class="writing-data">My career started with a position at Bombardier as a technologist, where I did this and that</p>
              <!-- <img src="@/assets/images/career.png" width="1000"> -->
            </div>
          </div>
        </div>
      </div>
    </Layout>
</template>