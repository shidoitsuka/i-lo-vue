<template lang="html">
  <DetailedProject
    projectName="React Native Kasir"
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
  mounted() {
    this.$store.state.ProjectName.name = "React Native Kasir";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
