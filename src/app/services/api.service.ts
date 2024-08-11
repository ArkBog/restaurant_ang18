import { Injectable } from '@angular/core';
import * as data from '../../menu.json';
import * as tables from '../../tables.json';
import { Table } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  data = data
  tables:Table[] = tables.tables

  constructor() { }
}
