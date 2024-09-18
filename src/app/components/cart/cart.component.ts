import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ApiService } from '../../services/api.service';
import { Order } from '../../../interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private apiService: ApiService
  ) {}

  data = this.apiService.data;

  today: Date = new Date();

  order: Order = {
    tables: this.cartService.tablesId,
    foods: this.cartService.choosenFoods,
  };

  ngOnInit(): void {
    this.today = new Date();
    console.log(this.today);
    // console.log(this.dateMin);
  }

  changeFoodQuantity(operation: string, param: number) {
    if (operation === '-') {
        this.order.foods[param].quantity--;
        if (this.order.foods[param].quantity === 0) {
          const newFood = this.order.foods.splice(param, 1);
        }
    } else {
      this.order.foods[param].quantity++;
    }
  }
}
