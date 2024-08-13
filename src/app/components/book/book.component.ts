import { Component } from '@angular/core';
import { Seat, Table } from '../../../interfaces';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  constructor(private apiService:ApiService) {}

  tables:Table[] = this.apiService.tables;

  choosenTables:number[]=[];

  tableForm = new FormGroup({
    table: new FormControl('')
  });

  onSubmit(){
    console.log(this.tableForm)
  };

  changeStatus($event:any, tableID: number){
    if($event.target.checked === true){
      this.choosenTables.push(tableID);
      // console.log(this.choosenTables)
    } else {
     const currentIndex =  this.choosenTables.findIndex((e) => e === tableID);
     console.log(currentIndex)
     const newChoosenTables = this.choosenTables.filter((_, index) => index !== currentIndex);
     console.log(newChoosenTables)
    }
    console.log($event.target.checked)
  };


}
