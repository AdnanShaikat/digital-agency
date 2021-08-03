<template>
  <div class="container mx-auto mt-36">
    <div class="flex flex-col items-center justify-center">
      <p class="text-primary text-lg font-bold">Our Service</p>
      <h1 class="text-dark text-5xl font-bold mb-6">Awesome Service</h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mb-24 gap-4">
      <div
        class="card text-center py-4 px-4 bg-white shadow-lg"
        v-for="service in services"
        :key="service.designation"
      >
        <div class="card__header">
          <Idea height="65px" width="65px" class="mx-auto mb-4 text-primary" />
        </div>
        <div class="card__content">
          <p class="font-bold text-xl">{{ service.designation }}</p>
          <p class="text-sm">
            {{ service.quote }}
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
  },
  data() {
    return {
      services: [
        {
          designation: "Web Design",
          quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          designation: "Idea & Research",
          quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          designation: "Web Development",
          quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          designation: "Seo & Marketing",
          quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
      ]
    };
  }
};
</script>

<style></style>
