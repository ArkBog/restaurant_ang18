import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ApiService } from '../../services/api.service';
import { Order } from '../../../interfaces';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule],
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

  removeItemFromCart(param:number){
    const newFood = this.order.foods.splice(param, 1);
  }

  orderForm = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    order: new FormControl(this.order)
  })

  orderSubmit(){
    if(this.orderForm.valid || this.order.tables.length === 0){
      alert("git")
    } else {
      alert("dupa")
    }
    console.log(this.orderForm)
  }
}
