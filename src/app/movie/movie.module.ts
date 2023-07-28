import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFindComponent } from './components/movie-find/movie-find.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MovieFindComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule
  ],
  exports: [
    MovieFindComponent
  ]
})
export class MovieModule { }
