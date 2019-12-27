<template lang="html">
  <v-app>
    <v-card flat>
      <v-toolbar
        color="teal"
        dark
        prominent
        flat
        height="500px"
        tile
        src="https://i.picsum.photos/id/100/2500/1656.jpg"
      />

      <v-card class="mx-auto" max-width="90vw" style="margin-top: -10vh;">
        <div class="hd">
          <v-toolbar flat>
            <div v-if="$store.state.ProjectName.name == ''">
              <v-toolbar-title class="grey--text">Projects</v-toolbar-title>
            </div>
            <div v-else>
              <!-- prettier-ignore -->
              <v-toolbar-title class="grey--text">
                <NuxtLink to="/project" icon>
                  <v-icon>mdi-arrow-left</v-icon>
                </NuxtLink>
                {{ $store.state.ProjectName.name }}
              </v-toolbar-title>
            </div>

            <v-spacer></v-spacer>

            <v-btn to="/" icon>
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </v-toolbar>
        </div>

        <v-divider></v-divider>

        <v-card-text style="height: auto;">
          <NuxtChild />
        </v-card-text>
      </v-card>
    </v-card>
  </v-app>
</template>

<script>
import Project from "~/components/ProjectCard.vue";
export default {
  components: {
    Project
  }
};
</script>

<style lang="css" scoped>
@media only screen and (max-width: 1264px) {
  .detailedproject {
    display: inherit;
    min-width: 100%;
  }
}

@media only screen and (min-width: 1265px) {
  .detailedproject {
    display: inline-block;
    margin-left: 0.9%;
  }
}

.detailedproject {
  margin-bottom: 3vh;
}

.project {
  z-index: -1;
}

.hd {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
