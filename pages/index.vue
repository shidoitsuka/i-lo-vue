<template>
  <v-content>
    <Main />
  </v-content>
</template>

<script type="text/javascript">
import Main from "~/components/Main.vue";
export default {
  components: {
    Main
  },
  head() {
    return {
      // opengraphs
      // prettier-ignore
      meta: [
        { hid: 'description', name: 'og:description', property: 'og:description', content: 'Just another human that fell in love too much with </code>' },
        { hid: 'title', name: 'og:title', property: 'og:title', content: 'standinshd' },
        { hid: 'type', name: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'image', name: 'og:image', property: 'og:image', content: 'https://i.ibb.co/5LdywPX/6017da3ed8f203fe979b16dae1ad2259.png' }
      ]
    };
  }
};
</script>
