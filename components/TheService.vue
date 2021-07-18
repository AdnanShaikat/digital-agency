<template>
  <div class="container mx-auto mt-36">
    <div class="shape-2">
      <img
        src="@/static/svgs/bgshape-1.svg"
        style="height: 686px; width: 685px; position: absolute; top: 900px; left: -40px; opacity: 10%;"
        alt=""
      />
    </div>
    <div class="flex flex-col items-center justify-center">
      <p class="text-primary text-lg font-bold">Our Service</p>
      <h1 class="text-dark text-5xl font-bold mb-6">Awesome Service</h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mb-24 gap-4">
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
          <Research
            height="60px"
            width="60px"
            class="mx-auto mb-4 text-primary"
          />
        </div>
        <div class="card__content">
          <p class="font-bold text-xl">Idea & Research</p>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div class="card text-center py-4 px-4 bg-white shadow-lg">
        <div class="card__header">
          <Development
            height="50px"
            width="50px"
            class="mx-auto mb-4 text-primary"
          />
        </div>
        <div class="card__content">
          <p class="font-bold text-xl">Web Development</p>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div class="card text-center py-4 px-4 bg-white shadow-lg">
        <div class="card__header">
          <Seo height="50px" width="50px" class="mx-auto mb-4 text-primary" />
        </div>
        <div class="card__content">
          <p class="font-bold text-xl">Seo & Marketing</p>
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
import Research from "../components/icons/Research.vue";
import Development from "../components/icons/Development.vue";
import Seo from "../components/icons/Seo.vue";
export default {
  components: {
    Idea,
    Research,
    Development,
    Seo
  }
};
</script>

<style></style>
