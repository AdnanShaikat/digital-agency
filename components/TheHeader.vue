<template>
  <div class="header">
    <div class="header__shape z-0"></div>
    <nav class="container nav">
      <div class="p-0 m-0 mx-auto flex items-center relative justify-between">
        <div class="brand z-10 text-primary">
          <nuxt-link to="/">
            <p>BRAND</p>
          </nuxt-link>
        </div>
        <!-- nav -->
        <div class="hidden lg:block">
          <ul class="m-0 p-0 h-100 flex items-center z-0">
            <li class="menu-item font-bold h-100 hover:text-primary">
              <nuxt-link class="px-3" to="/home">Home</nuxt-link>
            </li>
            <li class="menu-item font-bold h-100 hover:text-primary">
              <nuxt-link class="px-3" to="/about">About Us</nuxt-link>
            </li>
            <TheDropdown title="services" :items="services" class="font-bold" />
            <li class="menu-item font-bold h-100 hover:text-primary">
              <nuxt-link class="px-3" to="/pages">Pages</nuxt-link>
            </li>
            <li class="menu-item font-bold h-100 hover:text-primary">
              <nuxt-link class="px-3" to="/blog">Blog</nuxt-link>
            </li>
            <li class="menu-item font-bold h-100 hover:text-primary">
              <nuxt-link class="px-3" to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- Shopping Cart -->
        <div class="nav__cart">
          <button></button>
        </div>
        <!-- End Shopping Cart -->
        <div class="hidden lg:block">
          <div class="flex items-center justify-items-center">
            <i class="fas fa-search z-20"></i>
            <div style="
                background-image: linear-gradient(#ff5464, #fc9547);
                margin-left: 10px;
              " class="rounded">
              <button class="text-white z-10">Call Now: 01627125430</button>
            </div>
          </div>
        </div>

        <div class="menu-bar lg:hidden z-20">
          <i @click="toggleBar" class="fas fa-bars text-primary text-2xl"></i>
        </div>
      </div>
    </nav>

    <!-- Sidebar Nav -->

    <div @click="sideBar" class="sidebar lg:hidden" :class="sideNav ? 'sidenave-remove' : 'sidenave-show' ">
      <transition name="fade">
        <div v-if="hideNav" class="sidebar__container">
          <ul class="sidebar__links mt-5">
            <li class="sidebar__item font-bold h-100">
              <nuxt-link class="" to="/">Home</nuxt-link>
            </li>

            <li class="sidebar__item font-bold h-100">
              <nuxt-link class="" to="/about">About Us</nuxt-link>
            </li>

            <li class="sidebar__item font-bold h-100">
              <nuxt-link class="" to="/service">Service</nuxt-link>
            </li>

            <li class="sidebar__item font-bold h-100">
              <nuxt-link class="" to="/pages">Pages</nuxt-link>
            </li>

            <li class="sidebar__item font-bold h-100">
              <nuxt-link class="" to="/blog">Blog</nuxt-link>
            </li>

            <li class="sidebar__item font-bold h-100">
              <nuxt-link class="" to="/Contact">Contact</nuxt-link>
            </li>
          </ul>

          <div class="mt-5" style="padding: 10px 20px">
            <div class="flex flex-col items-center justify-center">
              <div class="
                  text-center text-white
                  bg-primary
                  w-full
                  py-4
                  mb-2
                  rounded
                ">
                <i class="fas fa-search"></i>
              </div>
              <div style="background-image: linear-gradient(#ff5464, #fc9547)" class="rounded w-full text-center py-4">
                <button class="text-white">Call Now: 01627125430</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- End Sidebar Nav -->

    <TheHero :hero="hero" />
  </div>
</template>

<script>
import TheHero from "../components/TheHero.vue";
import TheDropdown from "../components/layouts/TheDropdown.vue";
export default {
  components: { TheHero, TheDropdown },
  data() {
    return {
      hideNav: false,
      sideNav: true,
      services: [
        {
          title: "Web",
          link: "#",
        },
        {
          title: "Designe",
          link: "#",
        },
        {
          title: "Vedio",
          link: "#",
        },
      ],
    };
  },
  methods: {
    toggleBar() {
      this.hideNav = !this.hideNav;
      this.sideNav = !this.sideNav;
    },
    sideBar() {
      this.sideNav = !this.sideNav;
      this.hideNav = !this.hideNav;
    },
  },
  props: {
    hero: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.brand p {
  font-size: 40px;
}
nav button {
  padding: 5px 15px;
}
.sidenave-show {
  height: 100%;
}
.sidenave-remove {
  height: 0;
}
.fade-enter-from {
  transform: translateX(100%);
}
.fade-enter-to {
  transform: translateX(0%);
}
.fade-enter-active {
  transition: all 300ms ease-out;
}
.fade-leave-from {
  transform: translateX(0%);
}
.fade-leave-to {
  transform: translateX(100%);
}
.fade-leave-active {
  transition: all 300ms ease-out;
}
</style>
