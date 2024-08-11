import { Component } from '@angular/core';
import { Seat, Table } from '../../../interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  constructor(private apiService:ApiService) {}

  tables:Table[] = this.apiService.tables;

}
