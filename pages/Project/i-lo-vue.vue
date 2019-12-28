<template lang="html">
  <DetailedProject
    :projectImage="projectImage"
    projectName="i-lo-vue"
    projectDate="2019"
    projectLanguage="JSX, Vue, Nuxt, NodeJS, Express"
  >
    What you are looking at now is it. I fell in love so easily and recently in
    2019 I fell in love with Vue. So I then decided to make my portofolio
    website using Vue!
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
      "https://i.ibb.co/HFgfR1B/image.png"
    ]
  }),
  mounted() {
    this.$store.state.ProjectName.name = "My Site";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
