<template lang="html">
  <v-app>
    <v-card flat height="100%">
      <v-container>
        <v-img
          src="https://wallpaperplay.com/walls/full/5/4/2/293924.jpg"
          lazy-src="https://i.ibb.co/pnqV1Db/image.png"
          aspect-ratio="1"
          height="300px"
          width="500px"
        ></v-img>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.state.ProjectName.name = "Miku Site";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
