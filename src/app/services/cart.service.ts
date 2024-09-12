import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  tablesId: number[] = [];
  choosenFoods: any = [];

  createNewPositionInOrder(param: number) {
    let order = {
      id: param,
      quantity: 1,
    };
    this.choosenFoods.push(order);
  }

  addToCart(param: number) {

    

    console.log('done');
  }
}
