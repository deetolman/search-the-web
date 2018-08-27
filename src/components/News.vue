<template>
  <li>
    {{news.name}} born {{news.birth_year}}
  </li>
</template>

<script>
export default {
  props: {
    news: Object
  }
};
</script>

<style>
</style>