<template lang="html">
  <div>
    <Project
    class="projectCard"
    tags="html, handlebars, jquery, nodejs, express"
    name="Miku Site"
    description="Website for Miku discord bot"
    image="https://wallpaperplay.com/walls/full/5/4/2/293924.jpg"
    path="miku-site"
    github="https://github.com/shidoitsuka/another-miku-bot"
    url="https://miku.standinshd.site"
    />
  </div>
</template>

<script>
import Project from "~/components/ProjectCard.vue";
export default {
  data: () => ({
    isActive: false
  }),
  components: {
    Project
  }
};
</script>

<style lang="css" scoped>
@media only screen and (max-width: 1264px) {
  .projectCard {
    display: inherit;
    min-width: 100%;
  }
}

@media only screen and (min-width: 1265px) {
  .projectCard {
    display: inline-block;
    margin-left: 0.9%;
  }
}

.projectCard {
  margin-bottom: 3vh;
}
</style>
