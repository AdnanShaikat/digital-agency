<template>
  <div>
    Todo Index page {{ $route.params.id }}
    <p>{{ todo.title }}</p>
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
