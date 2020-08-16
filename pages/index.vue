<template>
  <v-layout>
    <v-row>
      <v-col cols="12" sm="3" class="left-container">
        <v-row>
          <v-col cols="12">
            <v-img
              src="/img/photo.JPG"
              aspect-ratio="1"
              class="rounded-circle mx-auto"
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
            <v-btn class="social-icon whatsapp-icon" icon
              ><v-icon>mdi-whatsapp</v-icon></v-btn
            >
            <v-btn class="social-icon facebook-icon" icon
              ><v-icon>mdi-facebook</v-icon></v-btn
            >
            <v-btn class="social-icon linkedin-icon" icon
              ><v-icon>mdi-linkedin</v-icon></v-btn
            >
            <v-btn class="social-icon email-icon" icon
              ><v-icon>mdi-email</v-icon></v-btn
            >
            <v-btn class="social-icon instagram-icon" icon
              ><v-icon>mdi-instagram</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="9" class="right-container">
        <!-- main container -->
        <v-row class="main-100">
          <!-- main column -->
          <v-col cols="12" class="pa-5">
            <h2>Experience</h2>
          </v-col>
          <!-- nested-row-1 image -->
          <v-col cols="12">
            <v-row class="pa-3" no-gutters>
              <v-col cols="12" sm="3">
                <v-img
                  src="/img/experience/1.jpg"
                  class="experience-image experience-image-hi"
                >
                  <div class="experience-image-info">
                    <div class="experience-image-inner"></div>
                    <span class="experience-image-text font-weight-bold">
                      Description In publishing and graphic design, Lorem ipsum
                      is a placeholder text commonly used to
                    </span>
                  </div>
                </v-img>
              </v-col>
              <v-col cols="12" sm="9">
                <v-row no-gutters>
                  <v-col cols="6" sm="12">
                    <v-img
                      src="/img/experience/2.jpg"
                      class="experience-image experience-image-lo-1"
                    >
                      <div class="experience-image-info">
                        <div class="experience-image-inner"></div>
                        <span class="experience-image-text font-weight-bold">
                          Description In publishing and graphic design, Lorem
                          ipsum is a placeholder text commonly used to
                        </span>
                      </div>
                    </v-img>
                  </v-col>
                  <v-col cols="6" sm="12">
                    <v-img
                      src="/img/experience/3.jpg"
                      class="experience-image experience-image-lo-2"
                      aspect-ratio="1"
                    >
                      <div class="experience-image-info">
                        <div class="experience-image-inner"></div>
                        <span class="experience-image-text font-weight-bold">
                          Description In publishing and graphic design, Lorem
                          ipsum is a placeholder text commonly used to
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
        <v-row class="main-100">
          <v-col cols="12" class="pa-5">
            <h2>Skills</h2>
          </v-col>
          <v-col cols="6" sm="3" class="text-center">
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
          <v-col cols="6" sm="3" class="text-center">
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
          <v-col cols="6" sm="3" class="text-center">
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
          <v-col cols="6" sm="3" class="text-center">
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
        <v-row class="main-100">
          <v-col cols="12" class="pa-5">
            <h2>Gallery</h2>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-row no-gutters>
              <v-col cols="4" class="pa-5">
                <v-img
                  src="/img/gallery/1.jpg"
                  class="gallery-image"
                  height="150px"
                  aspect-ratio="1"
                >
                </v-img>
              </v-col>
              <v-col cols="4" class="pa-5">
                <v-img
                  src="/img/gallery/2.jpg"
                  class="gallery-image"
                  height="150px"
                  aspect-ratio="1"
                >
                </v-img>
              </v-col>
              <v-col cols="4" class="pa-5">
                <v-img
                  src="/img/gallery/3.jpg"
                  class="gallery-image"
                  height="150px"
                  aspect-ratio="1"
                >
                </v-img>
              </v-col>
              <v-col cols="4" class="pa-5">
                <v-img
                  src="/img/gallery/4.jpg"
                  class="gallery-image"
                  height="150px"
                  aspect-ratio="1"
                >
                </v-img>
              </v-col>
              <v-col cols="4" class="pa-5">
                <v-img
                  src="/img/gallery/5.jpg"
                  class="gallery-image"
                  height="150px"
                  aspect-ratio="1"
                >
                </v-img>
              </v-col>
              <v-col cols="4" class="pa-5">
                <v-img
                  src="/img/gallery/6.jpg"
                  class="gallery-image"
                  height="150px"
                  aspect-ratio="1"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.left-container
  height: 100%
  background: #f0f0f0
  +innerShadow(-10px, 0, 10px, #b5b5b5)
  @media only screen and (max-width: 600px)
    height: 100vh
    +innerShadow(0, -10px, 10px, #b5b5b5)


.social-icon
  padding: 20px

.whatsapp-icon:hover
  color: green

.facebook-icon:hover
  color: blue

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
  +outerShadow(3px, 2px, 20px, 5px, #b5b5b5)
  animation: fadeIn 1.5s

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
  animation: fadeIn 2s

.experience-image-info:hover > *
  animation: fadeOut 1s
  opacity: 0

.experience-image-lo-1 .experience-image-text
  max-width: 70%
  @media only screen and (max-width: 600px)
    max-width: 100%

.experience-image-hi
  width: 15.5vw
  height: 70vh
  @media only screen and (max-width: 600px)
    height: 30vh
    width: 100vw

.experience-image-lo-1
  height: 150px
  width: 50.5vw
  @media only screen and (max-width: 600px)
    height: 20vh
    width: 45vw
    margin: 0 auto

.experience-image-lo-2
  height: 150px
  width: 34.5vw
  @media only screen and (max-width: 600px)
    height: 20vh
    width: 45vw
    margin: 0 auto

.gallery-image
  border-radius: 15px

*
  // border: 1px solid blue
</style>
