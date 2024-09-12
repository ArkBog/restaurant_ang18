import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(private cartService:CartService){}

  @Input()
  product!: Product;

  addToCart(param:number){
    this.cartService.addToCart(param)
  }

}
