import { Injectable } from '@angular/core';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  tablesId: number[] = [];
  choosenFoods = [{id: 1, quantity: 1}];

  createNewPositionInOrder(param: number) {
    let order = {
      id: param,
      quantity: 1,
    };
    this.choosenFoods.push(order);
  }

  addToCart(param: number):void {

    const founded = this.choosenFoods.find((e:any) => e.id === param)

      if(founded){
        founded.quantity++
        console.log(founded)
      } else {
        this.createNewPositionInOrder(param)
      }

    

    console.log('done');
  }
}
