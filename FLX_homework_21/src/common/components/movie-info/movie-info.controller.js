export class MovieInfoController {
  constructor($stateParams, moviesService) {
    this.moviesService = moviesService;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    console.log(this.movie);
    this.moviesService.findMovieById(this.$stateParams.movieId).then((movie) => {
      this.movie = movie;
    });
  }
}
MovieInfoController.$inject = ['$stateParams', 'moviesService']