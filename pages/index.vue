<template>
  <div>
    <TheHeader v-if="homePage" :hero="homePage.hero" />
    <TheService />
    <TheAbout />
    <TheNewsLetter />
    <TheTestimonial />
    <ThePricingPlan />
    <ThePortfolio />
    <TheBlog />

  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheService from "../components/TheService.vue";
import TheAbout from "../components/TheAbout.vue";
import TheNewsLetter from "../components/TheNewsLetter.vue";
import TheTestimonial from "../components/layouts/TheTestimonial.vue";
import ThePricingPlan from "../components/layouts/ThePricingPlan.vue";
import ThePortfolio from "../components/layouts/ThePortfolio.vue";
import TheBlog from "../components/layouts/TheBlog.vue";

export default {
  name: "home-page",
  data() {
    return {
      homePage: null,
    };
  },
  components: {
    TheHeader,
    TheService,
    TheAbout,
    TheNewsLetter,
    TheTestimonial,
    ThePricingPlan,
    ThePortfolio,
    TheBlog,
  },
  created() {
    this.$axios.$get("/home-page").then((response) => {
      this.homePage = response;
    });
  },
};
</script>
