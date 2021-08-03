<template>
  <div>
    <div class="text-center mb-5">
      <p class="text-lg text-primary font-bold">PORTFOLIO</p>
      <h1 class="text-5xl text-dark font-bold">See Our Work Project</h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mb-24">
      <div v-for="portfolio in portfolios" :key="portfolio.imgUrl">
        <img
          :src="`http://localhost:1337${portfolio.image.url}`"
          class="h-96 w-96"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio",
  data() {
    return {
      portfolios: [
        // {
        //   imgUrl: "/images/portfolio-1.jpg"
        // },
        // {
        //   imgUrl: "/images/portfolio-2.jpg"
        // },
        // {
        //   imgUrl: "/images/portfolio-3.jpg"
        // },
        // {
        //   imgUrl: "/images/portfolio-4.jpg"
        // }
      ]
    };
  },
  created() {
    fetch("http://localhost:1337/portfolios")
      .then(res => res.json())
      .then(data => {
        this.portfolios = data;
        console.log(data);
      });
  }
};
</script>
