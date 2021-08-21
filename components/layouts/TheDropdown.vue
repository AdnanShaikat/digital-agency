<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <nuxt-link to="#">
      {{ title }}
    </nuxt-link>
    <i class="fas fa-caret-down"></i>
    <transition name="faded" appear>
      <div class="sub-menu bg-primary" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-items">
          <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.sub-menu {
  position: absolute;
  padding: 10px 20px;
}

.faded-enter-active,
.faded-leave-active {
  transition: all 0.5 ease-out;
}
.faded-enter,
.faded-leave-to {
  opacity: 0;
}
</style>