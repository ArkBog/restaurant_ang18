import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ApiService } from '../../services/api.service';
import { Order } from '../../../interfaces';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(private cartService: CartService, private apiService: ApiService){}

  data = this.apiService.data;

  order:Order = {
    tables: this.cartService.tablesId,
    foods: this.cartService.choosenFoods
  }
  
}
