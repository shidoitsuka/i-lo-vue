<template>
  <div class="bg-background text-gray-300">
    <div class="bg-background fixed w-full px-6 p-4 md:text-center">
      <h1 class="font-bolder text-3xl nav-text md:text-5xl">s</h1>
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

    <div class="w-full p-10 md:py-24 md:px-44 md:grid md:grid-cols-2 md:gap-5">
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

      <div class="card mb-5 w-full bg-primary rounded-lg md:mb-0">
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
        <div class="flex">
          <EducationImage class="w-full h-56" />
        </div>
      </div>

      <p class="text-2xl mb-5 font-light md:mb-0">
        I'm not limited to tech. I believe that <span class="font-bold">everything</span> has its own opportunity.
      </p>

      <div v-for="experience of experiences" :key="experience.name" class="card h-56 mb-5 w-full bg-primary rounded-lg relative cursor-pointer flex items-end md:mb-0" :class="experience.name + '-experience-container'">
        <div class="p-5 z-20 relative title-text">
          <div class="font-semibold text-3xl"></div>
          <p>
            {{ experience.title }}
          </p>
          <div class="border-t border-4 inline-block w-10 mb-1"></div>
        </div>
        <div class="w-full h-full absolute rounded-lg overflow-hidden">
          <img class="experience-img" :class="experience.name + '-experience'" :src="'/img/experience/' + experience.image" alt="" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      experiences: [
        {
          name: "first",
          title: "Event organizer, documenter, and photographer for student council orientation 2019",
          image: "1.jpeg"
        },
        {
          name: "second",
          title: "SMK Krian 1 representative for Sidoarjo Education and Culture Expo (SIEDUCEX) 2019",
          image: "2.jpeg"
        },
        {
          name: "third",
          title: "Student & Teacher exhcange with Thailand 2019",
          image: "3.jpeg"
        },
      ]
    }
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
  &:after
    position: absolute
    // transform: translateX(-20px)
    clip-path: revert-layer inset(10px 10px)
  &:hover:after
    content: "tandinshd"

@keyframes change
  0%, 12.66%, 100%
    transform: translate3d(0,0,0)
  16.66%, 29.32%
    transform: translate3d(0,-25%,0)
  33.32%,45.98%
    transform: translate3d(0,-50%,0)
  49.98%,62.64%
    transform: translate3d(0,-75%,0)
  66.64%,79.3%
    transform: translate3d(0,-50%,0)
  83.3%,95.96%
    transform: translate3d(0,-25%,0)
</style>
