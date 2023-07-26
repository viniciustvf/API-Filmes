import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu/services/menu.service';
import { Movie } from './menu/models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public movieList = {} as Movie[];

  constructor(private menuService: MenuService) {};

  ngOnInit(): void {
    this.menuService.movieSubject.subscribe((data) => console.log('REMOVER LOG'));
  }




}
