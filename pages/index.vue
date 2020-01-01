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
        { hid: 'description', name: 'og:description', content: 'Just another human that fell in love too much with </code>' },
        { hid: 'og:description', name: 'og:description', content: 'Just another human that fell in love too much with </code>' },
        { hid: 'og:title', name: 'og:title', content: 'standinshd' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'standinshd' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:site_name', name: 'og:site_name', content: 'standinshd' },
        { hid: 'og:image', name: 'og:image', content: 'https://i.ibb.co/5LdywPX/6017da3ed8f203fe979b16dae1ad2259.png' }
      ]
    };
  }
};
</script>
