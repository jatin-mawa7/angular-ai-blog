import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Blogs } from './blogs/blogs';
import { Categories } from './categories/categories';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'blogs', component: Blogs},
    {path: 'categories', component: Categories},
    {path: 'contact', component: Contact},
];
