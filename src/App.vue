<template>
  <div id="app">
    <header>
     <h1>News</h1>
      <img alt="news-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-LTY2aZix0jl5SQCPvTjcfzqs29tp4l88jjSr-7dF3u0hngI"> -->
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/news">News</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:azure;
  margin-top: 60px;
}
nav {
  display:flex;
  justify-content: center;}
img {
  width:300px;
}
</style>
