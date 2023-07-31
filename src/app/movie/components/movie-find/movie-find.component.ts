import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-find',
  templateUrl: './movie-find.component.html',
  styleUrls: ['./movie-find.component.scss'],
})
export class MovieFindComponent implements OnInit{
  public movieList = {} as Movie[];

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // const query = this.route.snapshot.queryParamMap.get('query');
    // if(query){
    //   this.movieService.search(query).subscribe((data) => this.movieList = data);
    // }
    this.movieService.movieSubject.subscribe((data) => this.movieList = data);
  }
}
