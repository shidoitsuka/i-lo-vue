<template>
  <v-app class="app">
    <div class="bgImage">
      <img class="img0" src="/profileIcons/adobecc.svg" />
      <img class="img1" src="/profileIcons/android.svg" />
      <img class="img2" src="/profileIcons/angular.svg" />
      <img class="img3" src="/profileIcons/apple.svg" />
      <img class="img4" src="/profileIcons/css.svg" />
      <img class="img5" src="/profileIcons/github.svg" />
      <img class="img6" src="/profileIcons/html.svg" />
      <img class="img7" src="/profileIcons/java.svg" />
      <img class="img8" src="/profileIcons/joomla.svg" />
      <img class="img9" src="/profileIcons/js.svg" />
      <img class="img10" src="/profileIcons/less.svg" />
      <img class="img11" src="/profileIcons/linux.svg" />
      <img class="img12" src="/profileIcons/node.svg" />
      <img class="img13" src="/profileIcons/php.svg" />
      <img class="img14" src="/profileIcons/react.svg" />
      <img class="img15" src="/profileIcons/sass.svg" />
      <img class="img16" src="/profileIcons/sublime.svg" />
      <img class="img17" src="/profileIcons/swift.svg" />
      <img class="img18" src="/profileIcons/vs.svg" />
      <img class="img19" src="/profileIcons/windows.svg" />
      <img class="img20" src="/profileIcons/woo.svg" />
      <img class="img21" src="/profileIcons/wordpress.svg" />
    </div>
    <v-lazy
      v-model="lazyHeader"
      :options="{
        threshold: 0.5
      }"
      min-height="200"
      transition="slide-y-transition"
      class="fullpage"
    >
      <div class="header-text">
        <h1 class="display-2 glitch" data-text="standinshd">standinshd</h1>
        <vue-typed-js
          :strings="['a.k.a Brian']"
          :startDelay="1500"
          :showCursor="false"
        >
          <span
            class="typing overline subheader-text glitch"
            data-text="A.K.A BRIAN"
          ></span>
        </vue-typed-js>
      </div>
    </v-lazy>

    <!-- <v-lazy
      v-model="lazyBody1"
      :options="{
        threshold: 0.7
      }"
      min-height="700"
      transition="scale-transition"
      class="fullpage"
    > -->
    <div class="fullpage">
      <div>
        <v-slide-group v-model="model" class="pa-4" show-arrows>
          <v-slide-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'grey darken-3' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="70"
              @click="toggle"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  >
                  </v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
          <v-slide-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'grey darken-3' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="70"
              @click="toggle"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  >
                  </v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <v-expand-transition>
          <v-sheet
            v-if="model != null"
            color="grey lighten-4"
            height="200"
            tile
          >
            <v-row class="fill-height" align="center" justify="center">
              <h3>test</h3>
            </v-row>
          </v-sheet>
        </v-expand-transition>
        <v-expand-transition>
          <v-sheet
            v-if="model != null"
            color="grey lighten-4"
            height="200"
            tile
          >
            <v-row class="fill-height" align="center" justify="center">
              <h3>tes444t</h3>
            </v-row>
          </v-sheet>
        </v-expand-transition>
      </div>
      <!-- <v-responsive height="100%">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item fill-dot icon="mdi-star" color="purple">
            <v-card width="90%" elevation>
              <v-card-title class="blue">Lorem Ipsum Dolor</v-card-title>
              <v-card-text class="white text--primary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item style="" fill-dot icon="mdi-pause" color="purple">
            <v-card width="90%" class="left-timeline" color="white" elevation>
              <v-card-title class="blue">Lorem Ipsum Dolor</v-card-title>
              <v-card-text class="white text--primary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item fill-dot icon="mdi-play" color="purple">
            <v-card width="90%" elevation>
              <v-card-title class="blue">Lorem Ipsum Dolor</v-card-title>
              <v-card-text class="white text--primary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-responsive> -->
    </div>
  </v-app>
</template>

<script type="text/javascript">
export default {
  data: () => ({
    model: null,
    lazyHeader: false,
    lazyBody1: false
  })
};
</script>

<style lang="scss" src="~/assets/style/profileSCSS.scss" scoped></style>
<style lang="scss" src="~/assets/style/profileGlitch.scss" scoped></style>
<style lang="scss" src="~/assets/style/profileImages.scss" scoped></style>
