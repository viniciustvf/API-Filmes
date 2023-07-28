import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuModule } from '../menu/menu.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterLink
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
