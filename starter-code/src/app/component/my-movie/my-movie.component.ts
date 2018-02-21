import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

movieName: Object;
movieId: Number;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService) { 
    this.activatedRoute.params
      .subscribe((params) => this.movieId = Number(params['id']));
    this.movieName = movieService.getMovie(this.movieId);
  }

  ngOnInit() {
    
  }

}
