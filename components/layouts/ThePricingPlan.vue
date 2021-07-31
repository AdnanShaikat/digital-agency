<template>
  <div>
    <div class="pricing container mb-24">
      <div class="text-center mb-5">
        <p class="text-3xl text-primary font-bold">PRICING PLAN</p>
        <h1 class="text-5xl font-bold">Choose Our Plans</h1>
      </div>

      <div class="flex items-center justify-center gap-4">
        <div v-for="pricing in pricings" :key="pricing.packageName">
          <div class="pricing-card bg-white shadow py-4 px-4">
            <div class="pricing-card__header text-center">
              <p class="text-2xl font-bold">{{ pricing.packageName }}</p>
              <p>
                <span class="text-primary text-2xl font-bold">{{
                  pricing.price
                }}</span
                ><small>{{ pricing.month }}</small>
              </p>
              <small>{{ pricing.quote }}</small>
            </div>

            <!-- PRICING CARD BODY -->
            <div
              class="pricing-card__body mb-3 flex items-center justify-center"
            >
              <div>
                <div
                  class="flex items-center mt-3"
                  v-for="course in courses"
                  :key="course.imgUrl"
                >
                  <img :src="course.imgUrl" class="h-4 w-4" alt="" />
                  <div class="ml-3 text-gray">
                    {{ course.designation }}
                  </div>
                </div>
              </div>
            </div>

            <div class="pricing-footer w-full flex justify-center my-6">
              <button
                @mouseover="hover = true"
                class="py-2 px-2 w-28 text-primary border-2 border-primary rounded"
              >
                {{ pricing.button }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      pricings: [
        {
          packageName: "Beginner",
          price: "$5",
          month: "/Month",
          quote: "aneean nulla veilt, molestie et omareeros.",
          button: "JUST NOW",
          packageDetail: "Graphic Design"
        },
        {
          packageName: "Starter",
          price: "$15",
          month: "/Month",
          quote: "aneean nulla veilt, molestie et omareeros.",
          button: "JUST NOW",
          packageDetail: "Graphic Design"
        },
        {
          packageName: "Professional",
          price: "$25",
          month: "/Month",
          quote: "aneean nulla veilt, molestie et omareeros.",
          button: "JUST NOW",
          packageDetail: "Graphic Design"
        },
        {
          packageName: "Power Plan",
          price: "$35",
          month: "/Month",
          quote: "aneean nulla veilt, molestie et omareeros.",
          button: "JUST NOW",
          packageDetail: "Graphic Design"
        }
      ],
      courses: [
        {
          imgUrl: "/svgs/checked.svg",
          designation: "Graphic Design"
        },
        {
          imgUrl: "/svgs/checked.svg",
          designation: "Web Design"
        },
        {
          imgUrl: "/svgs/checked.svg",
          designation: "UI/UX"
        },
        {
          imgUrl: "/svgs/checked.svg",
          designation: "HTML/CSS"
        },
        {
          imgUrl: "/svgs/checked.svg",
          designation: "SEO Marketing"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.pricing-footer {
  button:hover {
    background-image: linear-gradient(#ff5464, #fc9547);
    color: #ffffff;
    border: none;
  }
}
</style>
