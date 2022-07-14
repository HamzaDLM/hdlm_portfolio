<script> 

import '@/assets/css/style.css'
import Layout from '@/views/layouts/layoutSection'

export default {
  components: {
    Layout
  },
  data() {
    return {
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
            {{ $t('homepage.title1') }}<span>{{ $t('homepage.title2')}}</span>
          </h1>
        </div>

        <!-- HEADER WHEN SMALL SIZE -->
        <div class="mb-4 d-xl-none d-m-block">
          <h2>
            {{ $t('homepage.title1') }}<span>{{ $t('homepage.title2')}}</span>
          </h2>
        </div>

        <hr class="mt-5">
        <div class="row my-5">
          <div>
            <p class="writing-data">
              <img class="personalpic" src="@/assets/images/hdpic.jpg" width="200">
              {{ $t('homepage.aboutme') }}
            </p>
          </div>
          <div>
            <p class="writing-data" style="color:var(--primary);font-weight: bold; font-size: 1.6rem">{{
              $t('homepage.domains') }}</p>
            <p class="writing-data">{{ $t('homepage.domainstext') }}</p>
          </div>
          <div>
            <p class="writing-data" style="color:var(--primary);font-weight: bold; font-size: 1.6rem">{{
              $t('homepage.areas') }}</p>
            <p class="writing-data">{{ $t('homepage.areastext') }}</p>
          </div>
          <!--
          <div>
            <p class="writing-data" style="font-weight: bold; font-size: 1.6rem">Career Map:</p>
            <p class="writing-data">My career started with a position at Bombardier as a technologist, where I did this and that</p>
            <img src="@/assets/images/career.png" width="1000"> 
          </div>
          -->
        </div>
      </div>
    </div>
  </Layout>
</template>