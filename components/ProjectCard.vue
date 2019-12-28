<template lang="html">
  <v-card width="48.5%" class="card" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ tags }}</div>
        <v-list-item-title class="headline mb-1">{{ name }}</v-list-item-title>
        <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="80">
        <v-img :src="image" />
      </v-list-item-avatar>
    </v-list-item>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :to="'/project/' + path" icon>
        <v-icon>mdi-crop-landscape</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :href="'https://github.com/shidoitsuka/' + github" target="_blank" icon>
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn :href="url" target="_blank" icon>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-card-actions>
    <!-- <v-snackbar v-model="snackbar">
      This project has no repository
      <v-btn color="teal" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar> -->
  </v-card>
</template>

<script>
export default {
  // TODO: show snackbar when github is not defined
  /*data: () => ({
    methods: {
      snackbar: false
    },
    github() {
      this.snackbar: false
    }
  }),*/
  props: {
    tags: {
      type: String,
      default: "Project Tags"
    },
    name: {
      type: String,
      default: "Project Name"
    },
    description: {
      type: String,
      default: "Detailed information about this project"
    },
    image: {
      type: String,
      default: "https://i.ibb.co/dKBDgp3/96915.jpg"
    },
    path: {
      type: String,
      default: "/project"
    },
    github: {
      type: String,
      default: "https://github.com/shidoitsuka"
    },
    url: {
      type: String,
      default: "null"
    }
  }
};
</script>

<style lang="css" scoped></style>
