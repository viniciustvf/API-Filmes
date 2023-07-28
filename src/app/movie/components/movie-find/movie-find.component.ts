import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-find',
  templateUrl: './movie-find.component.html',
  styleUrls: ['./movie-find.component.scss'],
})
export class MovieFindComponent {
  public movieList = {} as Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.movieSubject.subscribe((data) => this.movieList = data);
  }
}
