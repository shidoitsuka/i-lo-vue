<template lang="html">
  <DetailedProject
    :projectImage="projectImage"
    projectName="Electron Kasir"
    projectDate="2019"
    projectLanguage="HTML, CSS, Javascript, JQuery, NodeJS, Electron, JSON"
  >
    Aplikasi ini saya buat untuk teman saya. Berbasis elektron yang
    multi-platform, yang berarti dapat dijalankan di 3 sistem operasi terkenal
    yakni Windows, MacOS, dan Linux.
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
      "https://i.ibb.co/D7H1bC3/image.png",
      "https://i.ibb.co/Bjsqvv1/image.png"
    ]
  }),
  mounted() {
    this.$store.state.ProjectName.name = "Electron Kasir";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
