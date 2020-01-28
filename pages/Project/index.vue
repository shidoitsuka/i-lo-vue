<template lang="html">
  <v-row>
    <v-col cols="12" md="6">
      <v-lazy
        v-model="item1"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="slide-y-transition"
      >
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
      </v-lazy>
    </v-col>

    <v-col cols="12" md="6">
      <v-lazy
        v-model="item2"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="slide-y-transition"
      >
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
      </v-lazy>
    </v-col>
    <v-col cols="12" md="6">
      <v-lazy
        v-model="item3"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="slide-y-transition"
      >
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
      </v-lazy>
    </v-col>
    <v-col cols="12" md="6">
      <v-lazy
        v-model="item4"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="slide-y-transition"
      >
        <Project
          class="projectCard"
          tags="html, css, javascript, handlebars, nodejs, express, json"
          name="isshort"
          description="Another basic link shortener app"
          image="https://i.ibb.co/1nrFZ5c/custom-trackable-short-url-feature.png"
          path="isshort"
          url="https://isshort.tk"
        />
      </v-lazy>
    </v-col>
    <v-col cols="12" md="6">
      <v-lazy
        v-model="item5"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="slide-y-transition"
      >
        <Project
          class="projectCard"
          tags="nodejs, discord.js, discord-rpc"
          name="Adobe RPC"
          description="Discord Rich Presence for adobe apps. *only Photoshop is currently supported"
          image="https://i.ibb.co/Stw8FHb/218-2180844-adobe-wallpapers-full-hd.jpg"
          path="adobe-rpc"
          github="adobe-rpc"
        />
      </v-lazy>
    </v-col>
    <v-col cols="12" md="6">
      <v-lazy
        v-model="item6"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="slide-y-transition"
      >
        <Project
          class="projectCard"
          tags="html, css, javascript, jquery, handlebars, nodejs, express, sql"
          name="Master Barang"
          description="Aplikasi sederhana yang ditujukan untuk pembelajaran NodeJS + Handlebars"
          image="https://i.ibb.co/XJx38jN/business-database-iot-artificial.jpg"
          path="master-barang"
          github="masterBarang"
        />
      </v-lazy>
    </v-col>
    <v-col cols="12" md="6">
      <v-lazy
        v-model="item7"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="slide-y-transition"
      >
        <Project
          class="projectCard"
          tags="html, css, javascript, jquery, nodejs, electron, json"
          name="Electron Kasir"
          description="Aplikasi kasir dengan target multi-platform"
          path="electron-kasir"
          github="electron-kasir"
        />
      </v-lazy>
    </v-col>
    <v-col cols="12" md="6">
      <v-lazy
        v-model="item8"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="slide-y-transition"
      >
        <Project
          class="projectCard"
          tags="jsx, react-native"
          name="Kasir"
          description="Aplikasi kasir untuk android (tested) dan iOS (not yet tested)"
          path="rn-kasir"
        />
      </v-lazy>
    </v-col>
  </v-row>
</template>

<script>
import Project from "~/components/ProjectCard.vue";
export default {
  data: () => ({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false
  }),
  components: {
    Project
  },
  transition: {
    name: "expand-transition"
  }
};
</script>

<style lang="css" scoped>
.projectCard {
  min-width: 100%;
  min-height: 50px;
}
</style>
