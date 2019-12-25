<template>
<v-app class="app">
  <v-parallax dark class="parallax" height="100%" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-card class="mx-auto card text-center" min-width="70vw" min-height="50vh" elevation="10" shaped>
      <v-card-text class="text-container">
        <vue-typed-js :strings="['STANDINSHD', 'STA', 'BRIAN']" :backSpeed="35" :cursorChar="'_'">
          <h1 class="headtext display-2 font-weight-thin"><span class="typing"></span></h1>
        </vue-typed-js>
        <vue-typed-js :strings="['</code>']" :cursorChar="null" :contentType="'null'">
          <h3 class="overline">
            Just another human that fell in love too much with
            <span class="typing"></span>
          </h3>
        </vue-typed-js>
      </v-card-text>
      <v-card-actions class="actions">
        <v-btn color="teal darken-3" to="/about" text>About</v-btn>
        <v-btn color="teal darken-3" to="/profile" text>Profile</v-btn>
        <v-btn color="teal darken-3" to="/project" text>Projects <v-icon>mdi-menu-right</v-icon>
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
      <v-row class="socialmedia">
        <v-col cols="12">
          <v-btn icon>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-discord</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-post</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <vue-particles color="#dedede" :particlesNumber="60" :moveSpeed="4" shapeType="polygon" clickMode="push" />
  </v-parallax>
</v-app>
</template>

<script type="text/javascript">
export default {};
</script>
<style scoped>
@media only screen and (max-width: 900px) {
  .app .parallax {
    height: 100%;
  }
}

.headtext {
  margin-top: 5vh;
}

.card {
  position: absolute;
  left: 15vw;
}
</style>
