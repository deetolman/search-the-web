<template>
  <li>
   <p>{{ article.title }}</p>
   <p>{{ article.author }}</p>
  </li>
</template>

<script>

export default {
  props: {
    article: Object
  }
};
</script>

<style>
</style>