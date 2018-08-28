
export default {
    getNews(searchTerm = '') {
      return fetch(`https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(searchTerm)}&apiKey=ac3f6dc2e91b4903b93888ac7270f98f`)
        .then(response => response.json());
    }
  };

