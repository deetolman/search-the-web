<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="search">
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  props: {
    onSearch: Function
  },
  data() {
    return {
      search: ''
    };
  },
  methods: {
    handleSubmit() {
      this.onSearch(this.search);
    }
  }
};
</script>

<style>
</style>