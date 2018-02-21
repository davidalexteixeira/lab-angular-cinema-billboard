import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  movies: Array<object> = [{
    id: Number,
    title: String,
    poster: String,
    synopsis: String,
    genres: [String],
    year: Number,
    director: String,
    actors: [String],
    hours: [String],
    room: Number
  }]

  constructor() { }

  getMovies(){
    return this.movies;
  }

  getMovie(id){
    this.getMovie(id);
  }

}
