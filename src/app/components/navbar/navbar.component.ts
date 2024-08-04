import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Option } from '../../../interfaces';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menu: Option[] = [
    {
      name: "menu",
      path: "/menu"
    },
    {
      name: "book table",
      path: "/book"
    },
    {
      name: "phone orders & contact",
      path: "/contact"
    },
    {
      name: "about us",
      path: "/about"
    }
  ]

  classHidden = "hidden"

  toggleMenu(){
    if(this.classHidden === "hidden"){
      this.classHidden =  ""
    } else{
      this.classHidden = "hidden"
    }
  }
}
