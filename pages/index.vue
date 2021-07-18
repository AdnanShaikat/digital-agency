<template>
  <div>
    <TheHeader />
    <TheService />
    <TheAbout />
    <TheNewsLetter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheService from "../components/TheService.vue";
import TheAbout from "../components/TheAbout.vue";
import TheNewsLetter from "../components/TheNewsLetter.vue";
export default {
  components: { TheHeader, TheService, TheAbout, TheNewsLetter }
};
</script>
