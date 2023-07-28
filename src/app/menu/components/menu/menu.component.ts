import { Component } from '@angular/core';
import { MovieService } from '../../../movie/services/movie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public searchString: string = 'avatar'

  constructor(private movieService: MovieService) {}
  
  public search(){
    this.movieService.search(this.searchString).subscribe()
  }

}
