<template>
  <div class="container mx-auto mt-36">
    <div class="flex flex-col items-center justify-center">
      <p class="text-primary text-lg font-bold">Our Service</p>
      <h1 class="text-dark text-5xl font-bold">Awesome Service</h1>
    </div>
    <div class="flex items-center justify-between gap-4">
      <div class="card text-center py-4 px-4 bg-white shadow-lg">
        <div class="card__header">
          <Idea height="65px" width="65px" class="mx-auto mb-4 text-primary" />
        </div>
        <div class="card__content">
          <p class="font-bold text-xl">Web Design</p>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div class="card text-center py-4 px-4 bg-white shadow-lg">
        <div class="card__header">
          <Idea height="65px" width="65px" class="mx-auto mb-4" />
        </div>
        <div class="card__content">
          <p class="font-bold text-xl">Web Design</p>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div class="card text-center py-4 px-4 bg-white shadow-lg">
        <div class="card__header">
          <Idea height="65px" width="65px" class="mx-auto mb-4" />
        </div>
        <div class="card__content">
          <p class="font-bold text-xl">Web Design</p>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div class="card text-center py-4 px-4 bg-white shadow-lg">
        <div class="card__header">
          <Idea height="65px" width="65px" class="mx-auto mb-4" />
        </div>
        <div class="card__content">
          <p class="font-bold text-xl">Web Design</p>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Idea from "../components/icons/Idea.vue";
export default {
  components: {
    Idea
  }
};
</script>

<style></style>
