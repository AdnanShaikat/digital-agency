<template>
  <div class="header">
    <div class="header__shape z-0"></div>
    <nav>
      <div class="container mx-auto flex items-center justify-between">
        <div class="brand">
          <nuxt-link to="/"><p>BRAND</p></nuxt-link>
        </div>
        <div class="lg:block" :class="{ hidden: hideNav }">
          <ul class="m-0 p-0 h-100 flex items-center">
            <li class="font-bold h-100">
              <nuxt-link class="py-0 px-3" to="/home">Home</nuxt-link>
              <nuxt-link class="py-0 px-3" to="/about">About Us</nuxt-link>
              <nuxt-link class="py-0 px-3" to="/service">Service</nuxt-link>
              <nuxt-link class="py-0 px-3" to="/pages">Pages</nuxt-link>
              <nuxt-link class="py-0 px-3" to="/blog">Blog</nuxt-link>
              <nuxt-link class="py-0 px-3" to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="hidden lg:block">
          <div class="flex items-center justify-items-center">
            <i class="fas fa-search z-20"></i>
            <div
              style="
                background-image: linear-gradient(#ff5464, #fc9547);
                margin-left: 10px;
              "
              class="rounded z-20"
            >
              <button class="text-white z-20">Call Now: 01627125430</button>
            </div>
          </div>
        </div>
        <div class="menu-bar lg:hidden md:block z-20">
          <i @click="toggleBar" class="fas fa-bars text-primary text-2xl"></i>
        </div>
      </div>
    </nav>

    <TheHero />
  </div>
</template>

<script>
import TheHero from "../components/TheHero.vue";
export default {
  components: { TheHero },
  data() {
    return {
      hideNav: false
    };
  },
  methods: {
    toggleBar() {
      this.hideNav = !this.hideNav;
    }
  }
};
</script>

<style lang="scss">
.brand p {
  font-size: 40px;
  color: #ff6376;
}
nav button {
  padding: 5px 15px;
}
</style>
