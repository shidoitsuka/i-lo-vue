<template>
  <v-layout>
    <v-alert
      type="warning"
      class="alert"
      transition="scale-transition"
      :value="showAlert"
    >
      This site is under development!
    </v-alert>
    <v-row>
      <v-col cols="12" md="3" class="left-container">
        <v-row>
          <v-col cols="12">
            <v-img
              src="/img/photo.JPG"
              lazy-src="/img/lazy/lazy.svg"
              aspect-ratio="1"
              class="rounded-circle mx-auto profile-photo"
              height="auto"
              width="200px"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <h1 class="text-center">Brian Harianja</h1>
            <div class="text-center caption">
              sometimes i make things sometimes they worked
            </div>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn
              class="social-icon whatsapp-icon"
              href="https://api.whatsapp.com/send?phone=6285337974324/"
              target="_blank"
              icon
              ><v-icon>mdi-whatsapp</v-icon></v-btn
            >
            <v-btn
              class="social-icon facebook-icon"
              href="htpps://fb.me/OfficialUltimateOtaku/"
              target="_blank"
              icon
              ><v-icon>mdi-facebook</v-icon></v-btn
            >
            <v-btn
              class="social-icon github-icon"
              href="https://github.com/shidoitsuka/"
              target="_blank"
              icon
              ><v-icon>mdi-github</v-icon></v-btn
            >
            <v-btn
              class="social-icon linkedin-icon"
              href="https://www.linkedin.com/in/standinshd/"
              target="_blank"
              icon
              ><v-icon>mdi-linkedin</v-icon></v-btn
            >
            <v-btn
              class="social-icon email-icon"
              href="mailto:mail@standinshd.site"
              icon
              ><v-icon>mdi-email</v-icon></v-btn
            >
            <v-btn
              class="social-icon instagram-icon"
              href="https://instagram.com/standinshd/"
              target="_blank"
              icon
              ><v-icon>mdi-instagram</v-icon></v-btn
            >
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn
              color="#919EFF"
              href="https://drive.google.com/file/d/1Liy9MUsT9HCDdG49JJ86_kXnUBTAFatX/view?usp=sharing"
              target="_blank"
            >
              Check out my CV
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <!-- right container -->
      <v-col cols="12" md="9" class="right-container">
        <!-- main -- experience -->
        <v-row class="main-100">
          <!-- main column -->
          <v-col cols="12" class="pa-5">
            <h2 class="head-title">Experience</h2>
          </v-col>
          <!-- nested-row-1 image -->
          <v-col cols="12">
            <v-row class="pa-3" no-gutters>
              <v-col cols="12" md="3">
                <v-img
                  src="/img/experience/1.jpg"
                  lazy-src="/img/lazy/lazy.svg"
                  class="experience-image experience-image-hi"
                  v-ripple="{ center: true }"
                  aspect-ratio="1"
                >
                  <div class="experience-image-info">
                    <div class="experience-image-inner"></div>
                    <span class="experience-image-text font-weight-bold">
                      Event organizer, documenter & photographer for student
                      council orientation period 2019
                    </span>
                  </div>
                </v-img>
              </v-col>
              <v-col cols="12" md="9">
                <v-row no-gutters>
                  <v-col cols="6" md="12">
                    <v-img
                      src="/img/experience/2.jpg"
                      lazy-src="/img/lazy/lazy.svg"
                      class="experience-image experience-image-lo-1"
                      v-ripple="{ center: true }"
                      aspect-ratio="1"
                    >
                      <div class="experience-image-info">
                        <div class="experience-image-inner"></div>
                        <span class="experience-image-text font-weight-bold">
                          SMK Krian 1 representative for Sidoarjo Education and
                          Culture Expo (SIEDUCEX) 2019
                        </span>
                      </div>
                    </v-img>
                  </v-col>
                  <v-col cols="6" md="12">
                    <v-img
                      src="/img/experience/3.jpg"
                      lazy-src="/img/lazy/lazy.svg"
                      class="experience-image experience-image-lo-2"
                      v-ripple="{ center: true }"
                      aspect-ratio="1"
                    >
                      <div class="experience-image-info">
                        <div class="experience-image-inner"></div>
                        <span class="experience-image-text font-weight-bold">
                          Part of student & teacher exchange with Thailand 2019
                        </span>
                      </div>
                    </v-img>
                  </v-col>
                  <!-- <v-col
                    cols="12"
                    class="d-flex justify-center justify-sm-space-around mt-2"
                  >
                    <v-btn small>Download CV</v-btn>
                    <v-btn small>Hire Me!</v-btn>
                  </v-col> -->
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- !! main -- experience -->
        <!-- main -- skills -->
        <v-row class="main-100">
          <v-col cols="12" class="pa-5">
            <h2 class="head-title">Skills</h2>
          </v-col>
          <v-col cols="6" md="3" class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="120"
              :width="15"
              color="teal"
            >
              val
            </v-progress-circular>
            <p class="mt-2">Val</p>
          </v-col>
          <v-col cols="6" md="3" class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="120"
              :width="15"
              color="teal"
            >
              val
            </v-progress-circular>
            <p class="mt-2">Val</p>
          </v-col>
          <v-col cols="6" md="3" class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="120"
              :width="15"
              color="teal"
            >
              val
            </v-progress-circular>
            <p class="mt-2">Val</p>
          </v-col>
          <v-col cols="6" md="3" class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="120"
              :width="15"
              color="teal"
            >
              val
            </v-progress-circular>
            <p class="mt-2">Val</p>
          </v-col>
        </v-row>
        <!-- !! main -- skills -->
        <!-- main -- gallery -->
        <v-row class="main-100">
          <v-col cols="12" class="pa-5">
            <h2 class="head-title">Gallery</h2>
          </v-col>
          <v-col cols="12" class="text-center gallery-container">
            <v-row no-gutters>
              <v-col
                v-for="n in galleryData.length"
                :key="n"
                cols="6"
                md="4"
                class="pa-2 gallery-image-container mx-auto text-center"
              >
                <v-img
                  :src="'/img/gallery/' + galleryData[n - 1].file"
                  lazy-src="/img/lazy/lazy.svg"
                  class="gallery-image"
                  height="200px"
                  v-ripple="{ center: true }"
                  aspect-ratio="1"
                >
                  <div class="gallery-image-inner">
                    <span class="gallery-image-text">{{
                      galleryData[n - 1].tooltip
                    }}</span>
                  </div>
                </v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- !! main -- gallery -->
        <!-- main -- project -->
        <v-row class="main-100">
          <v-col cols="12" class="pa-5">
            <h2 class="head-title">Projects</h2>
          </v-col>
          <v-col cols="12" class="project-container text-center d-flex">
            <v-dialog
              v-model="projectDetails"
              width="500px"
              v-for="projects in projectData.length"
              :key="projects"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-card
                  class="project-card-container mr-7"
                  min-height="130px"
                  min-width="300px"
                  v-bind="attrs"
                >
                  <v-container>
                    <v-row justify="center" align="center">
                      <v-col cols="12">
                        <div class="project-card-title">
                          <h3>
                            {{ projectData[projects - 1].name }}
                          </h3>
                          <p>
                            {{ projectData[projects - 1].overview }}
                          </p>
                        </div>
                        <div class="project-card-action">
                          <v-btn icon v-on="on"><v-icon>mdi-information-outline</v-icon></v-btn>
                          <v-btn icon><v-icon>mdi-xml</v-icon></v-btn>
                          <v-btn icon><v-icon>mdi-share</v-icon></v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </template>
              <v-card>
                <h1>{{ projectData[projects - 1].name }}</h1>
                <p>
                  {{ projectData[projects - 1].overview }}
                </p>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <!-- !! main -- project -->
      </v-col>
      <!-- !! right container -->
    </v-row>
  </v-layout>
</template>

<script>
import galleryData from "~/assets/gallery.js";
import projectData from "~/assets/projects.js";
export default {
  data() {
    return {
      galleryData,
      projectData,
      showAlert: true,
      projectDetails: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
};
</script>

<style lang="sass" scoped>
.alert
  position: fixed
  left: 15px
  bottom: 0
  z-index: 3

.left-container
  height: 100%
  background: #F6F6F9
  +innerShadow(-10px, 0, 30px, #b5b5b5)
  background-image: url("/img/background.svg")
  background-size: 400px
  // animation: leftRight 60s infinite
  @media only screen and (max-width: 960px)
    height: 120vh
    display: flex
    justify-content: center
    align-items: center
    background-size: 600px
    // animation: bottomTop 60s infinite
    +innerShadow(0, -20px, 50px, #b5b5b5)

.right-container
  background: #F6F6F9

.profile-photo
  border-bottom: 10px solid #919eff

.head-title
  border-bottom: 5px solid #919eff
  padding-bottom: 5px
  display: inline

.social-icon
  padding: 20px

.whatsapp-icon:hover
  color: green

.facebook-icon:hover
  color: blue

.github-icon:hover
  color: #24292E

.linkedin-icon:hover
  color: #2867B2

.email-icon:hover
  color: #cccb89

.instagram-icon:hover
  color: #fa39a0

.experience-image
  border-radius: 15px
  margin: 10px
  z-index: 1
  cursor: pointer
  +outerShadow(3px, 2px, 20px, 3px, #b5b5b5)
  animation: fadeIn .3s
  animation: grayscaleIn .5s ease-in
  filter: grayscale(70%)

.experience-image:hover
  animation: grayscaleOut .5s ease-out
  filter: grayscale(0%)

.experience-image-inner
  background: rgba(255, 255, 255, 0.5)
  position: absolute
  width: 100%
  height: 100%
  opacity: 1

.experience-image-text
  position: absolute
  bottom: 0
  z-index: 2
  margin: 5px
  padding: 5px
  color: #000
  animation: fadeIn .5s

.experience-image-info:hover > *
  animation: fadeOut .3s
  opacity: 0

.experience-image-lo-1 .experience-image-text
  max-width: 70%
  @media only screen and (max-width: 960px)
    max-width: 100%

.experience-image-hi
  width: 15.5vw
  height: 70vh
  @media only screen and (max-width: 960px)
    height: 30vh
    width: 100vw

.experience-image-lo-1
  height: 150px
  width: 50.5vw
  @media only screen and (max-width: 960px)
    height: 20vh
    width: 45vw
    margin: 0 auto

.experience-image-lo-2
  height: 150px
  width: 34.5vw
  @media only screen and (max-width: 960px)
    height: 20vh
    width: 45vw
    margin: 0 auto

.gallery-container
  height: 50vh
  overflow-y: scroll

.gallery-image
  border-radius: 10px
  cursor: pointer

.gallery-image-inner
  display: flex
  justify-content: flex-end
  margin: 5px
  animation: fadeOut .3s
  opacity: 0

.gallery-image-text
  font-weight: bolder
  background: #F6F6F9
  border-radius: 5px
  padding: 1% 3%

.gallery-image:hover .gallery-image-inner
  animation: fadeIn .3s
  opacity: 1

.project-container
  // prevent flex-box to overflows whole document
  width: 1px
  // make it scroll
  overflow-x: scroll

*
  // border: 1px solid blue
</style>
