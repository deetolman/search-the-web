<template>
  <section class="articles">
    <h2>News</h2>

    <NewsSearch :onSearch="handleSearch"/>
    
    <Loader :loading="loading"/>

    <!-- <pre v-show="error" class="error">
      {{error}}
    </pre> -->

    <p v-if="search">Searching for &quot;{{ search }}&quot;</p>
    <div class="search-container">
      <ul v-if="articles">
        <Article v-for="article in articles"
          :key="article.title"
          :article="article"
        />
      </ul>
    </div>

  </section>
</template>

<script>
import api from '../../services/api';
import Article from './Article';
import NewsSearch from './NewsSearch';
import Loader from './Loader';

export default {
  data() {
    return {
      articles: null,
      loading: false,
      error: null,
      search: '',
      totalResults: null
    };
  },
  components: {
    Article,
    NewsSearch,
    Loader
  },
  // created() {
  //   this.searchNews();
  // },
  methods: {
    handleSearch(search) {
      this.search = search;
      this.searchNews();
    },
    searchNews() {
      this.loading = true;
      this.error = null;

      api.getNews(this.search)
        .then(response => {
          this.articles = response.articles;
          this.total = response.totalResults;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    }
  }
};
</script>

<style>
.error {
  color: red;
}
.loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}
</style>