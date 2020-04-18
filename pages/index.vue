<template>
  <div>
    <div class="main">
      <h1 class="main-text glitch" data-text="standinshd">standinshd</h1>
      <h4
        class="main-subtext glitch"
        data-text="Trying to do everything I could."
      >
        Trying to do everything I could.
      </h4>
    </div>
    <!-- <div class="background-image" v-for="i in 22" :key="i">
      <img
        :src="require('assets/img/icons/' + i + '.svg')"
        :class="'img' + i"
      />
    </div> -->
    <div class="section">
      <v-row>
        <v-col cols="12" md="3">
          <v-img :src="require('assets/img/profile.jpg')" class="img" />
        </v-col>
        <v-col cols="12" md="9">
          <h1 class="section-text">Who am I, actually?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-col>
      </v-row>
    </div>
    <div class="break"></div>
    <client-only>
      <div class="section">
        <v-row>
          <v-col v-if="mobile">
            <v-img src="https://picsum.photos/200/200" class="img" />
          </v-col>
          <v-col cols="12" md="9">
            <h1 class="section-text">Experience</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </v-col>
          <v-col v-if="!mobile">
            <v-img src="https://picsum.photos/200/200" class="img" />
          </v-col>
        </v-row>
      </div>
    </client-only>
    <div class="break"></div>
    <client-only>
      <div class="section-full">
        <v-row>
          <v-col cols="12">
            <h1 class="section-text">My Projects</h1>
          </v-col>
          <v-col cols="12">
            <v-slide-group
              v-model="model"
              class="pa-4"
              mobile-break-point="800"
              center-active
              show-arrows
            >
              <v-slide-item
                v-for="n in projects.length"
                :key="n"
                v-slot:default="{ active, toggle }"
              >
                <v-card
                  :color="active ? 'grey darken-3' : ''"
                  class="ma-4"
                  height="350"
                  width="250"
                  @click="toggle"
                >
                  <!-- prettier-ignore -->
                  <v-img
                  :src="require('assets/img/projectThumbs/' + projects[n - 1].thumb)"
                  width="100%"
                  height="100%"
                  :style="active ? 'filter: brightness(110%);' : ''"
                />
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-octagon-outline'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
            <v-expand-transition>
              <v-sheet v-if="model != null" max-height="700" tile>
                <v-row class="project-container">
                  <v-col cols="12">
                    <div class="project-title-container">
                      <h3 class="project-title">
                        {{ projects[model].name }}
                        <span class="project-subtitle">
                          {{ projects[model].subtitle }}
                        </span>
                      </h3>
                    </div>
                    <v-divider class="project-divider"></v-divider>
                    <p class="project-description">
                      {{ projects[model].description }}
                    </p>
                    <v-divider />
                    <v-row class="project-specs">
                      <v-col cols="6">
                        <p>Engines :</p>
                        <div v-for="a in projects[model].engines.length" :key="a">
                          <!-- prettier-ignore -->
                          <v-btn to="/" icon class="project-engines">
                            <i :class="'devicon-'+projects[model].engines[a-1]"></i>
                          </v-btn>
                        </div>
                      </v-col>
                      <v-col cols="6">
                        <p>
                          More :
                        </p>
                        <v-btn icon to="/" class="project-links">
                          <v-icon>mdi-link-variant</v-icon>
                        </v-btn>
                        <v-btn icon to="/" class="project-links">
                          <v-icon>mdi-github</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-expand-transition>
          </v-col>
        </v-row>
      </div>
    </client-only>
  </div>
</template>

<script>
import proj from "~/assets/js/projects.js";
export default {
  data() {
    return {
      mobile: this.$vuetify.breakpoint.mdAndDown,
      model: null,
      projects: proj
    };
  },
  head() {
    return { title: "Brian Harianja - Full-stack developer from Sidoarjo." };
  }
};
</script>

<style lang="scss" src="~/assets/scss/headerImages.scss" scoped></style>
<style lang="scss" src="~/assets/scss/textGlitch.scss" scoped></style>
<style lang="scss" scoped>
.project-engines i {
  font-size: 21px;
}
/* header */
.background-image {
  max-width: 100%;
  max-height: 100%;
  z-index: -1;
}
.main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.main-text {
  font-family: "Do Hyeon", sans-serif;
  font-size: 3rem;
  margin-top: -5%;
}
.main-subtext {
  font-family: "Montserrat", sans-serif;
}

/* sections */
.section {
  height: 45vh;
}
.section-full {
  min-height: 98vh;
}
.section-text {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 2rem;
  font-weight: 700;
}

/* project details */
.project-container {
  padding: 1.5rem;
}
.project-title-container {
  margin-bottom: 1em;
}
.project-title {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}
.project-subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: normal;
}
.project-description {
  padding: 10px 0px 0px 0px;
  font-weight: 200;
}
.project-specs {
  margin: 5px 0px 0px 0px;
  padding: 5px;
}
.project-engines {
  float: left;
  margin: 0px 10px 10px 0px;
}
.project-links {
  margin-right: 10px;
}

// globals
p {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}
.img {
  height: 45vh;
  max-width: 100%;
}
.break {
  width: 100%;
  height: 7vh;
}
@media only screen and (max-width: 960px) {
  .img {
    height: 25vh;
    min-width: 100%;
  }
  .break {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
}
</style>
