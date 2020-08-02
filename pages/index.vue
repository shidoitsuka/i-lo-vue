<template>
  <div>
    <div class="main-container">
      <div class="main-image-container">
        <img class="main-background" src="~/assets/img/background.svg" />
        <img class="main-photo" src="~/assets/img/me.svg" />
      </div>
      <v-row class="main-text-container">
        <v-col cols="12" offset-md="8">
          <h1 class="main-text">Hi, I'm Brian.</h1>
          <h6 class="main-minitext">
            sometimes i make things, sometimes they worked
          </h6>
        </v-col>
      </v-row>
      <!-- <h1 class="main-text glitch" data-text="standinshd">standinshd</h1>
        <h4
          class="main-subtext glitch"
          data-text="Trying to do everything I could."
        >
          Trying to do everything I could.
        </h4> -->
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
          <h1 class="section-text">About Me</h1>
          <p class="mt-3">
            I love "everything" about technology, usually code in javascript &
            it's frameworks. I also do graphic design a lil' bit. I also love to
            learn new things even though it's not about tech. In short, I'm just
            trying to do everything I could!
          </p>
          <v-btn href="https://drive.google.com/file/d/1Liy9MUsT9HCDdG49JJ86_kXnUBTAFatX/view?usp=sharing" target="_blank">
            <v-icon left size="1.3rem">mdi-note-outline</v-icon> Download CV
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="section">
      <h1 class="section-text">Skills</h1>
      <v-row align="center" justify="center" class="mx-auto skill-container">
        <v-col class="skill" cols="6" md="2">
          <v-progress-circular
            :value="90"
            width="10"
            size="130"
            rotate="-90"
            color="#999999"
          >
            <i class="devicon-express-original-wordmark skill-icon"></i>
          </v-progress-circular>
        </v-col>
        <v-col class="skill" cols="6" md="2">
          <v-progress-circular
            :value="90"
            width="10"
            size="130"
            rotate="-90"
            color="#3E863D"
          >
            <i class="devicon-nodejs-plain-wordmark skill-icon"></i>
          </v-progress-circular>
        </v-col>
        <v-col class="skill" cols="6" md="2">
          <v-progress-circular
            :value="20"
            width="10"
            size="130"
            rotate="-90"
            color="#E47911"
          >
            <i class="devicon-amazonwebservices-original skill-icon"></i>
          </v-progress-circular>
        </v-col>
        <v-col class="skill" cols="6" md="2">
          <v-progress-circular
            :value="50"
            width="10"
            size="130"
            rotate="-90"
            color="#41B883"
          >
            <i class="devicon-vuejs-plain skill-icon"></i>
          </v-progress-circular>
        </v-col>
        <v-col class="skill" cols="6" md="2">
          <v-progress-circular
            :value="90"
            width="10"
            size="130"
            rotate="-90"
            color="#F34F29"
          >
            <i class="devicon-git-plain skill-icon"></i>
          </v-progress-circular>
        </v-col>
        <v-col class="skill" cols="6" md="2">
          <v-progress-circular
            :value="90"
            width="10"
            size="130"
            rotate="-90"
            color="#8B63C7"
          >
            <i class="devicon-bootstrap-plain skill-icon"></i>
          </v-progress-circular>
        </v-col>
      </v-row>
    </div>
    <div class="break"></div>
    <div class="section-full">
      <v-row>
        <v-col cols="12">
          <h1 class="section-text">My Projects</h1>
        </v-col>
        <v-col cols="12">
          <v-slide-group
            v-model="model"
            class="pa-4"
            mobile-breakpoint="800"
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
                      <!-- prettier-ignore -->
                      <div v-for="a in projects[model].engines.length" :key="a">
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
  }
};
</script>

<style lang="scss" src="~/assets/scss/headerImages.scss" scoped></style>
<style lang="scss" src="~/assets/scss/textGlitch.scss" scoped></style>
<style lang="scss" scoped>
/* header */
.main-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  text-align: center;
}
.main-image-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.main-photo {
  position: absolute;
  left: -10%;
  z-index: 0;
  width: 70%;
  height: auto;
  filter: brightness(70%);
}
.main-background {
  position: absolute;
  right: 0;
  z-index: 1;
  width: 70%;
}
.main-text-container {
  position: absolute;
  z-index: 2;
}
.main-text {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 5vw;
}
.main-minitext {
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  letter-spacing: 1px;
  font-size: 1rem;
}
/* sections */
.section {
  min-height: 45vh;
  margin-top: 4vh;
}
.section-full {
  min-height: 98vh;
}
.section-text {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 2px solid #cfcfcf;
  display: inline-block;
}
.skill-container {
  margin-top: 5%;
}
.skill-icon {
  font-size: 3.5rem;
}
.skill {
  text-align: center;
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
  padding: 10px 0 0 0;
  font-weight: 200;
}
.project-specs {
  margin: 5px 0 0 0;
  padding: 5px;
}
.project-engines {
  float: left;
  margin: 0 10px 10px 0;
}
.project-links {
  margin-right: 10px;
}

// globals
p {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}
.project-engines i {
  font-size: 21px;
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
  .main-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    text-align: center;
  }
  .main-image-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  .main-photo {
    position: absolute;
    z-index: 0;
    width: auto;
    height: 55vh;
    filter: grayscale(100%) brightness(70%);
  }
  .main-background {
    position: absolute;
    bottom: -20vh;
    z-index: 1;
    height: 85vh;
    width: auto;
    transform: scale(3, 2) rotate(90deg);
    filter: brightness(150%);
  }
  .main-text-container {
    z-index: 2;
    margin: 0 auto;
  }
  .main-text {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 3rem;
  }
  .main-minitext {
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
    letter-spacing: 1px;
    font-size: .7rem;
  }
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
