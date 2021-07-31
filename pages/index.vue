<template>
  <div>
    <TheHeader />
    <TheService />
    <TheAbout />
    <TheNewsLetter />
    <TheTestimonial />
    <ThePricingPlan />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheService from "../components/TheService.vue";
import TheAbout from "../components/TheAbout.vue";
import TheNewsLetter from "../components/TheNewsLetter.vue";
import TheTestimonial from "../components/layouts/TheTestimonial.vue";
import ThePricingPlan from "../components/layouts/ThePricingPlan.vue";
export default {
  components: {
    TheHeader,
    TheService,
    TheAbout,
    TheNewsLetter,
    TheTestimonial,
    ThePricingPlan
  }
};
</script>
