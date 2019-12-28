<template lang="html">
  <DetailedProject
    :projectImage="projectImage"
    projectName="Miku Site"
    projectDate="2019"
    projectLanguage="HTML, CSS, Javascript, Handlebars, NodeJS, Express"
  >
    I finally decided to make a website for my lovely discord bot, Miku. The
    purpose is to let the people over the Internet know that Miku is actually
    here!
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
      "https://i.ibb.co/nfnGfpX/image.png",
      "https://i.ibb.co/s3B0fqp/image.png",
      "https://i.ibb.co/Q9dTGnm/image.png"
    ]
  }),
  mounted() {
    this.$store.state.ProjectName.name = "Miku Site";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
