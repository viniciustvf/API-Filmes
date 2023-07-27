import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieFindComponent } from './components/movie-find/movie-find.component';



@NgModule({
  declarations: [
    MovieFindComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieFindComponent
  ]
})
export class MovieModule { }
