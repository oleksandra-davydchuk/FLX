export class MoviesService {
  constructor($http) {
    this.$http = $http;
  }

  findMovieById(id) {
    return this.$http
    .get(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then(result => result.data, error => console.log(error));
  }

  getAllMovies() {
    return this.$http
    .get('https://reactjs-cdp.herokuapp.com/movies?limit=200')
    .then(result => result.data.data, error => console.log(error));
  }
}

 MoviesService.serviceName = 'moviesService';
MoviesService.$inject = ['$http'];
