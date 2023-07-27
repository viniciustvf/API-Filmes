import { Component } from '@angular/core';
import { Movie } from '../../../menu/models/movie';
import { MenuService } from '../../../menu/services/menu.service';

@Component({
  selector: 'app-movie-find',
  templateUrl: './movie-find.component.html',
  styleUrls: ['./movie-find.component.scss']
})
export class MovieFindComponent {
  public movieList = {} as Movie[];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.movieSubject.subscribe((data) => (this.movieList = data));
  }
  
}
