<template lang="html">
  <div>
    <Project
      class="projectCard"
      tags="nodejs, sqlite, enmap, discord.js"
      name="Miku Bot"
      description="A just4fun discord bot made by 12042#5754"
      image="https://i.ibb.co/K6dcgn8/Miku-Logo-old.png"
      path="miku-bot"
      github="another-miku-bot"
      url="https://miku.standinshd.site"
    />
    <Project
      class="projectCard"
      tags="html, handlebars, jquery, nodejs, express"
      name="Miku Site"
      description="Website for Miku discord bot"
      image="https://i.ibb.co/VDpNjh9/66028ce3-d8f3-4656-aee3-c294c177ba0c-1.png"
      path="miku-site"
      github="another-miku-bot"
      url="https://miku.standinshd.site"
    />
    <Project
      class="projectCard"
      tags="jsx, vue, nuxt, nodejs, express"
      name="i-lo-vue"
      description="This website"
      image="https://i.ibb.co/5LdywPX/6017da3ed8f203fe979b16dae1ad2259.png"
      path="i-lo-vue"
      github="i-lo-vue"
      url="https://standinshd.site"
    />
    <Project
      class="projectCard"
      tags="html, css, javascript, handlebars, nodejs, express, json"
      name="isshort"
      description="Another basic link shortener app"
      image="https://i.ibb.co/1nrFZ5c/custom-trackable-short-url-feature.png"
      path="isshort"
      url="https://isshort.tk"
    />
    <Project
      class="projectCard"
      tags="nodejs, discord.js, discord-rpc"
      name="Adobe RPC"
      description="Discord Rich Presence for adobe apps"
      image="https://i.ibb.co/Stw8FHb/218-2180844-adobe-wallpapers-full-hd.jpg"
      path="adobe-rpc"
      github="adobe-rpc"
    />
    <Project
      class="projectCard"
      tags="html, css, javascript, jquery, handlebars, nodejs, express, sql"
      name="Master Barang"
      description="Aplikasi sederhana yang ditujukan untuk pembelajaran NodeJS + Handlebars"
      image="https://i.ibb.co/XJx38jN/business-database-iot-artificial.jpg"
      path="master-barang"
      github="masterBarang"
    />
    <Project
      class="projectCard"
      tags="html, css, javascript, jquery, nodejs, electron, json"
      name="Electron Kasir"
      description="Aplikasi kasir dengan target multi-platform"
      path="electron-kasir"
      github="electron-kasir"
    />
    <Project
      class="projectCard"
      tags="jsx, react-native"
      name="Kasir"
      description="Aplikasi kasir untuk android (tested) dan iOS (not yet tested)"
      path="rn-kasir"
    />
  </div>
</template>

<script>
import Project from "~/components/ProjectCard.vue";
export default {
  components: {
    Project
  },
  head() {
    return {
      // opengraphs
      // prettier-ignore
      meta: [
        { hid: 'description', name: 'description', property: 'og:description', content: 'Project Showcase' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Project Showcase' },
        { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'standinshd' },
        { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_property', name: 'og:site_property', property: 'og:site_property', content: 'standinshd' },
        { hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://i.ibb.co/HDtnrQ0/Miku-Chibi0.png' },
        { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: 'standinshd' }
      ]
    };
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
