import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ReplaceUnderscorePipe } from "../../pipes/replace-underscore.pipe";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ReplaceUnderscorePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private apiService: ApiService) {}

  menu = this.apiService.data.menu;

  types: string[] = [];

  ngOnInit() {
    for (let i = 0; i < this.menu.length; i++) {
      if (!this.types.includes(this.menu[i].type)) {
        this.types.push(this.menu[i].type);
      }
    }
  }
}
