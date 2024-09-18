import { Injectable } from '@angular/core';
import { config } from 'rxjs';
import { Food } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  tablesId: number[] = [1];
  choosenFoods:Food[] = [{id: 1, quantity: 1}];

  createNewPositionInOrder(param: number) {
    let order: Food = {
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
