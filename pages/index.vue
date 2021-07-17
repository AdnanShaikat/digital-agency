<template>
  <div>
    <TheHeader />
    <TheService />
    <TheAbout />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheService from "../components/TheService.vue";
import TheAbout from "../components/TheAbout.vue";
export default {
  components: { TheHeader, TheService, TheAbout }
};
</script>
