<script>
export default {};
</script>

<template>
  <div class="row">
    <div class="col-2 pl-0 d-none d-xl-block">
      <div class="card">
        <div id="sidebar">
          <p class="logo-branding mb-0">egirl</p>
          <p class="logo-branding mb-0">capital</p>
          <ul class="mt-5 pl-0">
            <li class="litem active"><a href="/HomePage">00.about me</a></li>
            <li class="litem"><a href="/">01.portfolio</a></li>
            <li class="litem"><a href="/">02.tech stack</a></li>
            <li class="litem"><a href="/">03.code repos</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-auto"></div>

    <div class="col-12 col-xl-8 align-self-right">
      <div class="container" id="writings">
        <h1 class="d-none d-xl-block">SOME WRITINGS</h1>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  background-color: #141114 !important;
}
.logo-branding {
  font-family: Oswald, sans-serif !important;
  font-size: 5rem;
  line-height: 4.4rem;
  text-transform: uppercase;
  padding-left: 19px;
  border-left: 5px solid #d223c6;
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
}
.container {
  width: 100% !important;
  padding-right: 15px !important;
  padding-left: 15px !important;
  margin-right: auto !important;
  margin-left: auto !important;
}
ul {
  font-family: Anonymous Pro, monospace;
  padding-left: 0 !important;
}
.litem {
  font-size: 2rem !important;
  list-style-type: none;
  text-align: left;
}
.active {
  transition-property: background-color;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  background-color: #d223c6;
}
#sidebar {
  position: fixed;
}
li {
  padding: 0;
}
ul a {
  text-decoration: none;
  color: white;
  padding: 8px 24px;
  font-size: 2rem;
  color: #fff;
}
ul a:hover {
  text-decoration: none;
  color: white;
  padding-left: 19px;
  border-left: 5px solid #d223c6;
}
#writings {
  margin-top: 60px;
}
#writings h1 {
  font-family: Oswald, sans-serif;
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 400;
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}
</style>
