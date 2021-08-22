<template>
  <div class="container mx-auto">
    <div class="
        hero
        flex flex-col
        items-center
        lg:flex-row
        lg:justify-between
        mt-28
      ">
      <div class="hero__text">
        <p class="text-lg text-primary font-bold">{{ hero.welcome }}</p>
        <p class="text-5xl font-bold">{{ hero.title }}</p>
        <p class="mt-4">
          {{ hero.description }}
        </p>
        <div style="background-image: linear-gradient(#ff5464, #fc9547)" class="rounded inline-block mt-4">
          <button class="text-white py-4 px-8">{{ hero.button }}</button>
        </div>
      </div>
      <div class="hero__image z-10 mt-10 lg:mt-0" :style="{backgroundImage: `url(${ strapiImage(hero.heroImage.url) })`}"></div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    hero: {
      type: Object,
    },
  },

  methods: {
    strapiImage(url) {
      if (process.env.NODE_ENV == "development") {
        return `http://localhost:1337${url}`;
      } else {
        return `hasibapp.com${url}`;
      }
    },
  },
};
</script>
