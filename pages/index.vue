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
        { hid: 'description', property: 'og:description', content: 'Just another human that fell in love too much with </code>' },
        { hid: 'og:description', property: 'og:description', content: 'Just another human that fell in love too much with </code>' },
        { hid: 'og:title', property: 'og:title', content: 'standinshd' },
        { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: 'standinshd' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'standinshd' },
        { hid: 'og:image', property: 'og:image', content: 'https://i.ibb.co/5LdywPX/6017da3ed8f203fe979b16dae1ad2259.png' }
      ]
    };
  }
};
</script>
