<script>
export default {
  data() {
    return {
      currentTheme: localStorage.getItem("theme-color"),
      yellowTheme: "#ffff00",
      pinkTheme: "#d223c6",
      blueTheme: "blue",
      navTheme: "#fff",
      navThemeDark: "#141114",
      selectionTheme: "#fff",
      selectionThemeDark: "#141114",
    };
  },
  created() {
    console.log(this.$route.name);
    this.onThemeChange();
  },
  methods: {
    setVariablesProperty(primaryTheme, navTheme, selectionTheme) {
      document.documentElement.style.setProperty("--primary", primaryTheme);
      document.documentElement.style.setProperty("--nav", navTheme);
      document.documentElement.style.setProperty("--selection", selectionTheme);
    },
    onThemeChange() {
      this.currentTheme = localStorage.getItem("theme-color");
      if (this.currentTheme == "theme-blue") {
        this.setVariablesProperty(this.blueTheme, this.navTheme, this.navTheme);
      } else if (this.currentTheme == "theme-pink") {
        this.setVariablesProperty(this.pinkTheme, this.navTheme, this.navTheme);
      } else if (this.currentTheme == "theme-yellow") {
        this.setVariablesProperty(
          this.yellowTheme,
          this.navThemeDark,
          this.navThemeDark
        );
      }
    },
    switchTheme(theme) {
      localStorage.setItem("theme-color", theme);
      this.onThemeChange();
    },
  },
};
</script>

<template>
  <div
    id="topnav"
    class="sticky-top container-fluid pl-0 d-xl-none d-lg-none d-sm-block"
  ></div>
  <div class="row g-0">
    <div class="col-2 pl-0 d-none d-xl-block">
      <div class="card">
        <div id="sidebar">
          <p class="logo-branding mb-0">hamza</p>
          <p class="logo-branding mb-0">dellam</p>
          <ul class="mt-5 pl-0">
            <li class="litem">
              <router-link to="/hdlm_portfolio/">00.about me</router-link>
              <!--
              <a
                :class="{ active: $route.name === 'Home' }"
                href="/hdlm_portfolio/"
                >00.about me</a
              >
            --></li>
            <li class="litem">
              <router-link to="/hdlm_portfolio/portfolio"
                >01.portfolio</router-link
              >
              <!--
              <a
                :class="{ active: $route.name === 'Portfolio' }"
                href="/hdlm_portfolio/portfolio"
                >01.portfolio</a
              >
              -->
            </li>
            <li class="litem">
              <router-link to="/hdlm_portfolio/techstack"
                >02.tech stack</router-link
              >
              <!--
              <a
                :class="{ active: $route.name === 'Tech Stack' }"
                href="/hdlm_portfolio/techstack"
                >02.tech stack</a
              >
              -->
            </li>
            <li class="litem">
              <router-link to="/hdlm_portfolio/coderepos"
                >03.code repos</router-link
              >
              <!--
              <a
                :class="{ active: $route.name === 'Code Repos' }"
                href="/hdlm_portfolio/coderepos"
                >03.code repos</a
              >
                -->
            </li>
          </ul>
          <div class="row mt-5 my-contact">
            <div class="col-12">
              <a href="https://github.com/HamzaDLM" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hamzadellam/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </a>
            </div>
            <div class="col-12">
              <br />
              <a class="email" href="mailto:hamzadelam@hotmail.com">
                <svg
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  focusable="false"
                  role="img"
                  aria-label="envelope"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi-envelope b-icon bi"
                >
                  <g data-v-7fbe1623="">
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                    ></path>
                  </g>
                </svg>
                hamzadellam@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="theme-options">
          <div
            id="theme-yellow"
            style="color:{{yellowTheme}}"
            v-bind:class="{ active: currentTheme === 'theme-yellow' }"
            v-on:click="switchTheme('theme-yellow')"
          ></div>
          <div
            id="theme-blue"
            v-bind:class="{ active: currentTheme === 'theme-blue' }"
            v-on:click="switchTheme('theme-blue')"
          ></div>
          <div
            id="theme-pink"
            v-bind:class="{ active: currentTheme === 'theme-pink' }"
            v-on:click="switchTheme('theme-pink')"
          ></div>
        </div>
      </div>
    </div>

    <div class="col-auto"></div>

    <slot> </slot>
  </div>
</template>
