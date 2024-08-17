import { Component } from '@angular/core';
import { Seat, Table } from '../../../interfaces';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  constructor(private apiService:ApiService, private cartService: CartService) {}

  tables:Table[] = this.apiService.tables;

  choosenTables:number[]=[];

  tableForm = new FormGroup({
    table: new FormControl('')
  });

  onSubmit(){
    this.cartService.tablesId = this.choosenTables;
    console.log(this.cartService.tablesId);
  };

  changeStatus($event:any, tableID: number){
    if($event.target.checked === true){
      this.choosenTables.push(tableID);
    } else {
     const currentIndex =  this.choosenTables.findIndex((e) => e === tableID);
     const newChoosenTables = this.choosenTables.filter((_, index) => index !== currentIndex);
     this.choosenTables = newChoosenTables
    }
  };


}
