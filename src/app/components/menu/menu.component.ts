import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ReplaceUnderscorePipe } from '../../pipes/replace-underscore.pipe';
import { CurrencyPipe } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ReplaceUnderscorePipe, CurrencyPipe, ProductComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private apiService: ApiService) {}

  menu = this.apiService.data.menu;

  types: string[] = [];
  showProdcuts: boolean = false;
  typeValue: string = '';
  icon: string = 'arrow_downward';

  ngOnInit() {
    for (let i = 0; i < this.menu.length; i++) {
      if (!this.types.includes(this.menu[i].type)) {
        this.types.push(this.menu[i].type);
      }
    }
  }

  toogleBar(type: string, $index: any, $event: any) {
    if (!this.showProdcuts) {
      this.showProdcuts = true;
      this.typeValue = type;
      if ($event.target.innerText === 'arrow_downward') {
        $event.target.innerText = 'arrow_upward';
      } else {
        $event.target.innerText = 'arrow_downward';
      }
    } else {
      this.showProdcuts = false;
      this.typeValue = '';
      $event.target.innerText = 'arrow_downward';
    }
    console.log($event);
  }


}
