<template lang="html">
  <DetailedProject
    :projectImage="projectImage"
    projectName="Miku Bot"
    projectDate="2017 - Present"
    projectLanguage="NodeJS, SQLite, Enmap, discord.js"
  >
    I created a just for fun discord bot! At first, I was only making Miku Bot
    for fun. But then, I somehow taking this project seriously since I felt like
    this project gives me a lot of experiences in JS programming. Now here it
    is, you can play with her on discord!
  </DetailedProject>
</template>

<script>
import DetailedProject from "~/components/DetailedProject.vue";
export default {
  components: {
    DetailedProject
  },
  data: () => ({
    projectImage: [
      "https://i.ibb.co/7v2BCkF/image.png",
      "https://i.ibb.co/N6YGMSv/image.png",
      "https://i.ibb.co/S589Zd9/image.png"
    ]
  }),
  mounted() {
    this.$store.state.ProjectName.name = "Miku Bot";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
