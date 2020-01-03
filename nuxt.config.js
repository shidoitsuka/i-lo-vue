module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "standinshd",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "fb:app_id", content: "613242665883559" },
      // prettier-ignore
      { hid: "description", name: "description", content: "Just another human that fell in love too much with </code>" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-particles.js", "~/plugins/vue-typed.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa"],
  /*
   ** Build configuration
  server: {
    port: 8000,
    host: '172.16.6.210'
  },
  */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
