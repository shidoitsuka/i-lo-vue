<template lang="html">
  <DetailedProject
    :projectImage="projectImage"
    projectName="Master Barang"
    projectDate="2018"
    projectLanguage="HTML, CSS, Javascript, JQuery, Handlebars, NodeJS, Express, SQL"
  >
    Aplikasi ini saya buat untuk teman saya. Walau tidak dapat dikatakan sebuah
    project, namun aplikasi ini cukup simple untuk mempelajari sistem kerja
    NodeJS + Handlebars.
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
      "https://glowvarietyshow.com/wp-content/uploads/2017/03/placeholder-image.jpg",
      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
    ]
  }),
  mounted() {
    this.$store.state.ProjectName.name = "Master Barang";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
