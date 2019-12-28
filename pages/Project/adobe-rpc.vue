<template lang="html">
  <DetailedProject
    :projectImage="projectImage"
    projectName="Adobe RPC"
    projectDate="2019"
    projectLanguage="NodeJS, discord.js, discord-rpc"
  >
    A simple adobe apps discord rich presence for discord.
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
      "https://i.ibb.co/RDB22Pm/image.png",
      "https://i.ibb.co/1dNSWXV/image.png",
      "https://i.ibb.co/Mhgm9j9/image.png",
      "https://i.ibb.co/g30m940/image.png",
      "https://i.ibb.co/pP5jkV6/image.png"
    ]
  }),
  mounted() {
    this.$store.state.ProjectName.name = "Adobe RPC";
  },
  beforeDestroy() {
    this.$store.state.ProjectName.name = "";
  }
};
</script>

<style lang="css" scoped></style>
