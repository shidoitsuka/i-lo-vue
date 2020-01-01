<template>
  <v-app>
    <v-timeline class="px-5">
      <v-timeline-item color="teal" small>
        <template v-slot:opposite>
          <span class="headline font-weight-bold teal--text">2020</span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 teal--text">
            Lorem ipsum
          </h2>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item color="teal" small>
        <template v-slot:opposite>
          <span class="headline font-weight-bold teal--text">2020</span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 teal--text">
            Lorem ipsum
          </h2>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>

<script type="text/javascript">
export default {
  head() {
    return {
      title: "Profile",
      // opengraphs
      // prettier-ignore
      meta: [
        { hid: 'description', name: 'description', content: 'Profile' },
        { hid: 'og:title', property: 'og:title', content: 'standinshd' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: 'https://i.ibb.co/HDtnrQ0/Miku-Chibi0.png' }
      ]
    };
  }
};
</script>

<style scoped>
@media only screen and (max-width: 900px) {
}
</style>
