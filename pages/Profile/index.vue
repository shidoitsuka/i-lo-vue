<template>
<v-app>
  <v-card class="mx-auto card" :loading="loading" raised>
    <v-card-text>
      <div>In Progress</div>
      <p v-html="bigtext" class="display-1 text--primary"></p>
      <div v-html="smalltext" class="text--primary"></div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon @click="refresh()">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</v-app>
</template>

<script type="text/javascript">
export default {
  data: () => ({
    bigtext: null,
    smalltext: null,
    loading: true,
    words: {
      "your mom": "gay",
      "proh•grah•mmer": "Someone that can turns a coffee and pizza into an application",
      standinshd: "is awesome!",
      "I'm  still working on this!": "Please try again later",
      "Come back later!": "I do hope you found something good.",
      "Click refresh icon!": "and see the magic.",
      PANSYYYYYY: "protecc her smile dude.",
      "go home": "I mean click the home icon"
    }
  }),
  methods: {
    refresh() {
      const words = this.words;
      const allWords = Object.keys(words);
      const size = Object.keys(words).length;
      const randomed = allWords[Math.floor(Math.random() * allWords.length)];
      this.bigtext = randomed;
      this.smalltext = words[randomed];
      return;
    }
  },
  mounted() {
    this.refresh();
  }
};
</script>

<style scoped>
@media only screen and (max-width: 900px) {
  .card {
    width: 90vw;
    top: 50%;
    margin-top: -20%;
  }
}

.card {
  min-width: 50vw;
  top: 50%;
  margin-top: -10%;
}
</style>
