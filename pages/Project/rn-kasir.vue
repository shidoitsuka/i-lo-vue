<template lang="html">
  <DetailedProject
    :projectImage="projectImage"
    projectName="Electron Kasir"
    projectDate="2018 - 2019"
    projectLanguage="JSX, React Native"
  >
    Aplikasi ini saya buat untuk teman saya. Berbasis react-native yang
    multi-platform, yang berarti dapat dijalankan di 2 sistem operasi mobile
    terkenal yakni Android dan iOS.
  </DetailedProject>
</template>

<script>
import DetailedProject from "~/components/DetailedProject.vue";
export default {
  components: {
    DetailedProject
  },
  data: () => ({}),
  mounted() {
    this.$store.state.ProjectName.name = "Electron Kasir";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
