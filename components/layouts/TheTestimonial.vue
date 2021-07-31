<template>
  <div>
    <div class="container">
      <div class="testimonial mb-24">
        <div class="testimonial__header text-center mb-5">
          <p class="text-lg text-primary font-bold">Testimonial</p>
          <h1 class="text-5xl font-bold">What Our Client Say</h1>
        </div>
        <!-- Testimonial Card -->

        <div class="flex justify-center items-center">
          <splide :options="options">
            <splide-slide
              v-for="testimonial in testimonials"
              :key="testimonial.clientName"
            >
              <div class="testimonial__card bg-white shadow py-4 px-4">
                <div class="flex items-center">
                  <div style="border-radius: 500px; height:80px; width:80px;">
                    <img
                      :src="testimonial.imgUrl"
                      alt=""
                      style="height:100%; width:100%; object-fit:cover; border-radius: 500px"
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-lg font-bold">
                      {{ testimonial.clientName }}
                    </p>
                    <small>{{ testimonial.designation }}</small>
                  </div>
                </div>
                <div class="mt-4 text-justify">
                  {{ testimonial.quote }}
                </div>
              </div>
            </splide-slide>
          </splide>
        </div>

        <!-- End Testimonial Card -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        perPage: 2,
        gap: "1rem",
        pagination: true,
        arrows: true
      },
      testimonials: [
        {
          imgUrl: "/images/client-1.jpg",
          clientName: "John Doe",
          designation: "Designer",
          quote:
            "ZenDesk’s testimonial page is beautifully laid out AND functional, with a silent customer video playing on loop to serve as the banner."
        },
        {
          imgUrl: "/images/client-2.jpg",
          clientName: "Adam Doe",
          designation: "Designer",
          quote:
            "ZenDesk’s testimonial page is beautifully laid out AND functional, with a silent customer video playing on loop to serve as the banner."
        },
        {
          imgUrl: "/images/client-3.jpg",
          clientName: "Jonson Doe",
          designation: "Developer",
          quote:
            "ZenDesk’s testimonial page is beautifully laid out AND functional, with a silent customer video playing on loop to serve as the banner."
        },
        {
          imgUrl: "/images/client-4.jpg",
          clientName: "David Doe",
          designation: "Developer",
          quote:
            "ZenDesk’s testimonial page is beautifully laid out AND functional, with a silent customer video playing on loop to serve as the banner."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.splide__arrow--prev {
  left: -3em;
}
.splide__arrow--next {
  right: -3em;
}
.splide__pagination {
  bottom: -2.5rem;
  &__page {
    background: #ff5464;
  }
}
.splide__pagination__page.is-active {
  transform: scale(1.4);
  background: #ff5464;
}
</style>
