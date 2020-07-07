import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  // prettier-ignore
  head: {
    // titleTemplate: "%s - " + process.env.npm_package_name,
    title: "Brian Harianja - Trying to do everything I could.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { hid: "description", name: "description", content: "Hi, I'm Brian. A full-stack developer from Sidoarjo!" },
      { hid: "og:description", name: "og:description", content: "Hi, I'm Brian. A full-stack developer from Sidoarjo!" },
      { hid: "og:title", name: "og:title", content: "Brian Harianja" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Do+Hyeon&family=IBM+Plex+Sans:wght@500;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" },
      { rel: 'stylesheet', href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" }
    ]
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
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  server: {
    port: "3000",
    host: "192.168.0.105" // default: localhost
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
