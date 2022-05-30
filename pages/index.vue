<template>
  <div class="bg-background text-gray-300" v-bind:class="{ 'overflow-y-hidden h-full': $route.name != 'index' }">
    <div class="bg-background fixed w-full px-6 p-4 md:text-center">
      <h1 class="font-bolder nav-text md:text-4xl absolute animate__animated" id="titleIn">s</h1>
      <!-- <h1 class="font-bolder nav-text md:text-5xl absolute animate__animated" id="titleOut"></h1> -->
      <div class="border-t-4 inline-block pb-3 w-4 md:w-6" />
    </div>
    <div class="w-full h-screen shadow-2xl">
      <div class="w-full mx-auto md:mx-0">
        <PrimaryImage class="mx-auto primary-img" />
      </div>

      <div class="mr-auto self-center text-center mb-32 md:ml-5">
        <h1 class="text-5xl font-main px-10" data-text="Brian Harianja">
          Brian Harianja
        </h1>
        <h3 class="text-sm font-thin">beyond possibilities.</h3>
        <div class="flex justify-center mt-5">
          <a class="mr-5" href="https://wa.me/6285337974324/" target="_blank">
            <img class="h-8" src="/img/icons/whatsapp.svg" alt="">
          </a>
          <a class="mr-5" href="https://www.linkedin.com/in/standinshd/" target="_blank">
            <img class="h-8" src="/img/icons/linkedin.svg" alt="">
          </a>
          <a class="mr-5" href="mailto:brian.harianja@gmail.com/">
            <img class="h-8" src="/img/icons/mail.svg" alt="">
          </a>
          <a class="mr-5" href="https://fb.me/officialultimateotaku/" target="_blank">
            <img class="h-8" src="/img/icons/facebook.svg" alt="">
          </a>
          <a href="https://instagram.com/standinshd/" target="_blank">
            <img class="h-8" src="/img/icons/instagram.svg" alt="">
          </a>
        </div>
      </div>
    </div>

    <div class="w-full p-10 description md:py-24 md:px-44 md:grid md:grid-cols-2 md:gap-5">
      <p class="text-right text-2xl mb-5 font-light">
        a <span class="font-bold">fullstack web developer</span> based in
        Indonesia with more than 5 years working on frontend web environment.
      </p>

      <div class="card mb-5 w-full bg-primary rounded-lg md:mb-0" style="background: url(/codes.svg) #4D5055 fixed">
        <div class="p-5">
          <div class="font-semibold text-3xl">Skills</div>
          <div class="border-b border-4 inline-block w-10 mb-2"></div>
          <p class="text-justify">
            I believe knowledge is power. So, I keep learning everything that
            makes me curious. Here are some of my skills :
          </p>
          <div class="font-bold grid grid-cols-2">
            <p>Javascript</p>
            <p>React</p>
            <p>Vue</p>
            <p>Express</p>
            <p>UI / UX</p>
            <p>Photoshop</p>
            <p>Illustrator</p>
            <p>After Effects</p>
          </div>
        </div>
      </div>

      <div class="card mb-5 w-full bg-primary rounded-lg md:mb-0 flex">
        <div class="">
          <div class="p-5">
            <div class="font-semibold text-3xl">Education</div>
            <div class="border-b border-4 inline-block w-10 mb-2"></div>
            <p>
              • SMP N 1 Siak Hulu
              <span class="font-light text-xs">(2013-2016)</span>
            </p>
            <p>
              • SMK Krian 1 Sidoarjo
              <span class="font-light text-xs">(2018-2021)</span>
            </p>
          </div>
        </div>
        <div class="p-5">
          <EducationImage class="w-full h-full" />
        </div>
      </div>

      <p class="text-2xl mb-5 font-light md:mb-0">
        I'm not limited to tech. I believe that <span class="font-bold">everything</span> has its own opportunity.
      </p>

      <nuxt-link to="/foto" v-for="experience of experiences" :key="experience.id" class="card h-56 mb-5 w-full bg-primary rounded-lg relative cursor-pointer flex items-end md:mb-0" :class="experience.name + '-experience-container'">
        <div class="p-5 z-20 relative title-text">
          <div class="font-semibold text-3xl"></div>
          <p>
            {{ experience.title }}
          </p>
          <div class="border-t border-4 inline-block w-10 mb-1"></div>
        </div>
        <div class="w-full h-full absolute rounded-lg overflow-hidden">
          <img class="experience-img" :class="experience.name + '-experience'" :src="'/img/experience/' + experience.image" v-shared-element:[`img-${experience.id}`] alt="" />
        </div>
      </nuxt-link>

    </div>

    <div class="fixed top-0 left-0 w-screen h-screen">
      <div class="h-2/3 w-full">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      scrollPosition: 0,
      scrollState: "UNPASS",
      previewImage: false,
      selectedImage: {},
      experiences: [
        {
          id: 0,
          name: "first",
          title: "Event organizer, documenter, and photographer for student council orientation 2019",
          image: "1.jpeg"
        },
        {
          id: 1,
          name: "second",
          title: "SMK Krian 1 representative for Sidoarjo Education and Culture Expo (SIEDUCEX) 2019",
          image: "2.jpeg"
        },
        {
          id: 2,
          name: "third",
          title: "Student & Teacher exhcange with Thailand 2019",
          image: "3.jpeg"
        },
      ]
    }
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      const titleInEl = document.querySelector("#titleIn");
      const titleOutEl = document.querySelector("#titleOut");
      const targetScrollEl = document.querySelector(".description");
      if (this.scrollPosition + 450 > targetScrollEl.scrollHeight) {
        if (this.scrollState == "PASS") return;
        this.scrollState = "PASS";
        // passing description, show standinshd
        titleInEl.classList.add("animate__backOutRight", "fadeOutDown");
      } else {
        if (this.scrollState == "UNPASS") return;
        this.scrollState = "UNPASS";
        // show s
        titleInEl.classList.add("animate__backOutRight", "fadeOutDown");
      }
      titleInEl.addEventListener('animationend', () => {
        if (this.scrollState == "PASS") titleInEl.innerHTML = "standinshd";
        else titleInEl.innerHTML = "s";
        titleInEl.classList.add("animate__backInLeft");
        titleInEl.classList.remove("animate__backOutRight", "fadeInDown", "fadeOutDown");
      });
    },
    openImage(name) {
      this.selectedImage = this.experiences.find(experience => experience.name === name);
      this.previewImage = true;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="sass" scoped>
.primary-img
  max-height: 75vh

.first-experience-container, .second-experience-container, .third-experience-container
  &:hover
    .title-text
      opacity: 0
      transform: translateY(-50%)
    .experience-img
      filter: grayscale(25%) brightness(75%)
      transform: scale(1.3)

.title-text
  opacity: 1
  transition: .5s

.experience-img
  filter: grayscale(75%) brightness(25%)
  transition: .5s ease-out

.nav-text
  position: relative
</style>
