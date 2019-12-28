<template lang="html">
  <DetailedProject
    :projectImage="projectImage"
    projectName="Isshort"
    projectDate="2019"
    projectLanguage="HTML, CSS, Javascript, Handlebars, NodeJS, Express, JSON"
  >
    A simple link shortener with custom path.
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
      "https://i.ibb.co/YdYXyWh/image.png",
      "https://i.ibb.co/Vv5Dz2b/image.png"
    ]
  }),
  mounted() {
    this.$store.state.ProjectName.name = "Isshort";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
