<template>
  <div class="container">
    Todo Index page {{ $route.params.id }}
    <p class="text-primary font-bold text-5xl my-5">{{ todo.title }}</p>
    <p class="text-dark font-bold text-2xl">{{ todo.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {}
    };
  },
  created() {
    this.$axios.$get(`/todos/${this.$route.params.id}`).then(data => {
      console.log(data);
      this.todo = data;
    });
  }
};
</script>

<style lang="scss" scoped></style>
