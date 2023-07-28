import { Component } from '@angular/core';
import { MovieService } from '../../movie/services/movie.service';
import { Movie } from '../../movie/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public movieList = {} as Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.listAll().subscribe((data) => this.movieList = data);
    
  }
}
