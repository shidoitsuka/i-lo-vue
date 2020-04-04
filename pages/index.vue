<template>
  <div>
    <div class="main">
      <h1 class="text">standinshd</h1>
      <h4>Trying to do everything I could.</h4>
    </div>
    <div class="content">
      <v-row>
        <v-col cols="12" md="3">
          <img src="https://picsum.photos/200/200" class="img" />
        </v-col>
        <v-col cols="12" md="9">
          <h1>Who am I, actually?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-col>
      </v-row>
    </div>
    <div class="break"></div>
    <div class="content">
      <v-row>
        <v-col v-if="mobile">
          <img src="https://picsum.photos/200/200" class="img" />
        </v-col>
        <v-col cols="12" md="9">
          <h1>Experience</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-col>
        <v-col v-if="!mobile">
          <img src="https://picsum.photos/200/200" class="img" />
        </v-col>
      </v-row>
    </div>
    <div class="break"></div>
    <div class="content-full">
      <v-row>
        <v-col cols="12">
          <h1>My Projects</h1>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: this.$vuetify.breakpoint.mdAndDown
    }
  }
};
</script>

<style type="scss">
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
.main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.text {
  font-family: "Do Hyeon", sans-serif;
  font-size: 3rem;
  margin-top: -5%;
}
.content {
  height: 45vh;
}
.content-full {
  height: 98vh;
}
.img {
  height: 50vh;
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
}
</style>
