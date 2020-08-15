<template>
  <v-layout>
    <v-row>
      <v-col cols="3" class="left-container">
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
            <h3 class="text-center caption">
              sometimes i make things sometimes they worked
            </h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="9" class="right-container">
        <!-- main container -->
        <v-row class="main-100">
          <!-- main column -->
          <v-col cols="12" class="pa-5">
            <h2>Experience</h2>
          </v-col>
          <!-- nested-row-1 image -->
          <v-col cols="12">
            <v-row class="pa-3" no-gutters>
              <v-col cols="3">
                <v-img
                  src="/img/experience/1.jpg"
                  class="experience-image experience-image-hi"
                ></v-img>
              </v-col>
              <v-col cols="9">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-img
                      src="/img/experience/2.jpg"
                      class="experience-image experience-image-lo-1"
                    ></v-img>
                  </v-col>
                  <v-col cols="8">
                    <v-img
                      src="/img/experience/3.jpg"
                      class="experience-image experience-image-lo-2"
                      aspect-ratio="1"
                    ></v-img>
                  </v-col>
                  <v-col cols="4" class="d-flex justify-center align-center">
                    <v-btn class="py-10 px-15">Hire Me!</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="main-100">
          <v-col cols="12" class="pa-5">
            <h2>Skills</h2>
          </v-col>
          <v-col cols="3" class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="15"
              color="teal"
            >
              val
            </v-progress-circular>
            <p class="mt-2">Val</p>
          </v-col>
          <v-col cols="3" class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="15"
              color="teal"
            >
              val
            </v-progress-circular>
            <p class="mt-2">Val</p>
          </v-col>
          <v-col cols="3" class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="15"
              color="teal"
            >
              val
            </v-progress-circular>
            <p class="mt-2">Val</p>
          </v-col>
          <v-col cols="3" class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="150"
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

.experience-image
  border-radius: 15px
  margin: 10px

.experience-image-hi
  width: 15.5vw
  height: 70vh

.experience-image-lo-1
  height: 150px
  width: 50.5vw

.experience-image-lo-2
  height: 150px
  width: 34.5vw

.gallery-image
  border-radius: 15px

*
  // border: 1px solid blue
</style>
