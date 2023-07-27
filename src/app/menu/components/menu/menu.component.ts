import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public searchString: string = 'star'

  constructor(private menuService: MenuService) {}
  
  public search(){
    this.menuService.search(this.searchString).subscribe()
  }

}
