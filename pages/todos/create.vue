<template>
  <div>
    <div class="container">
      <h2>HTML Forms</h2>

      <div>
        <input v-model="formData.title" class="border my-4" type="text" />
        <br />
        <textarea
          v-model="formData.description"
          class="border"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <button
          @click="saveTodo"
          class="border font-bold text-primary rounded px-4 py-2"
        >
          submit
        </button>
      </div>

      <p>
        If you click the "Submit" button, the form-data will be sent to a page
        called "/action_page.php".
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "createtodo",
  data() {
    return {
      formData: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    saveTodo(e) {
      this.$axios.$post("/todos", this.formData);
    }
  }
};
</script>

<style lang="scss" scoped></style>
