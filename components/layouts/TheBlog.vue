<template>
  <div class="relative">
    <div class="container">
      <div class="mb-5 text-center">
        <p class="text-lg text-primary font-bold">OUR BLOG</p>
        <h1 class="text-5xl text-dark font-bold">Latest News Feed</h1>
      </div>
      <div class="flex items-center justify-center">
        <div class="">
          <img src="@/static/images/blog-1.jpg" style="height: 250px;" alt="" />
          <div class="">
            <p class="text-2xl text-dark font-bold mt-4">
              It is also important to take notes of questions
            </p>
            <a to="#" class="text-primary font-bold mt-5 cursor-pointer" @click="showModal = true">ReadMore</a>

            <transition name="fade" appear>
              <div class="modal-overlay absolute inset-0" style="background-color: rgba(0, 0, 0, 0.5); zindex: 98;" v-if="showModal" @click="showModal = false">
              </div>
            </transition>

            <transition>
              <div class="modal" v-if="showModal">
                <p class="text-3xl">Lorem Impsum</p>
                <p class="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aliquam accusamus sint unde deleniti. Nisi quasi rerum, suscipit natus ut, corrupti quod aspernatur minus inventore assumenda sed quisquam unde quis!</p>
                <button class="button appearance-none outline-none border-none cursor-pointer inline-block py-2 px-6 rounded bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-lg font-bold shadow-lg mt-5" @click="showModal = false">Close</button>
              </div>
            </transition>
          </div>
        </div>

        <div class="">
          <img src="@/static/images/blog-1.jpg" style="height: 250px;" alt="" />
          <div class="">
            <p class="text-2xl text-dark font-bold mt-4">
              It is also important to take notes of questions
            </p>
            <router-link to="#" class="text-primary font-bold mt-5">ReadMore</router-link>
          </div>
        </div>

        <div class="">
          <img src="@/static/images/blog-1.jpg" style="height: 250px;" alt="" />
          <div class="">
            <p class="text-2xl text-dark font-bold mt-4">
              It is also important to take notes of questions
            </p>
            <router-link to="#" class="text-primary font-bold mt-5">ReadMore</router-link>
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
      showModal: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  background: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
