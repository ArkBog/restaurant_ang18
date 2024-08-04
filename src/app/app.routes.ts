import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookComponent } from './components/book/book.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about-us",
        component: AboutComponent
    },
    {
        path: "menu",
        component: MenuComponent
    },
    {
        path: "book",
        component: BookComponent
    },
    {
        path: "contact",
        component: ContactComponent
    }
];
