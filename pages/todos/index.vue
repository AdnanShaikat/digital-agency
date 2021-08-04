<template>
  <div class="text-center">
    <div v-for="todo in todos" :key="todo.id">
      <nuxt-link :to="`/todos/${todo.id}`">{{ todo.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "todos",
  data() {
    return {
      todos: null
    };
  },
  created() {
    this.$axios.$get("/todos").then(data => {
      this.todos = data;
    });
  }
};
</script>

<style lang="scss" scoped></style>
