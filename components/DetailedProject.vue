<template lang="html">
  <v-card flat>
    <v-row>
      <v-col cols="12" md="4">
        <v-carousel hide-delimiters continuous height="300px" interval="5000">
          <v-carousel-item
            v-for="image in projectImage"
            :src="image"
            :key="image"
            reverse-transition="fade-transition"
            transition="fade-transition"
          />
        </v-carousel>
      </v-col>
      <v-col cols="12" md="8">
        <h1 class="font-weight-light projectName">{{ projectName }}</h1>
        <div class="projectSpecs">
          <!-- prettier-ignore -->
          <div class="details"><slot class="projectDetail">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</slot></div>
          <!-- prettier-ignore -->
          <div class="date">
                <span class="subtitle-1 font-weight-medium">Date: </span>{{ projectDate }}
              </div>
          <!-- prettier-ignore -->
          <div class="languages">
                <!-- prettier-ignore -->
                <span class="subtitle-1 font-weight-medium">Languages/Frameworks: </span>{{ projectLanguage }}
              </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    projectImage: {
      type: Array,
      default: function() {
        return [
          "https://via.placeholder.com/300",
          "https://via.placeholder.com/500",
          "https://via.placeholder.com/800"
        ];
      }
    },
    projectName: {
      type: String,
      default: "My Project"
    },
    projectDate: {
      type: String,
      default: "2019 - Present"
    },
    projectLanguage: {
      type: String,
      default: "HTML is a programming language"
    }
  }
};
</script>

<style lang="css" scoped>
.projectName {
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: 3px solid #328582;
}
.details {
  margin-top: 1vh;
}
</style>
