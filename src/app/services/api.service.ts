import { Injectable } from '@angular/core';
import * as data from '../../menu.json'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  data = data

  constructor() { }
}
