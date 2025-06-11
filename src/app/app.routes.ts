import { Routes } from '@angular/router';

import { Bio } from './components/bio/bio';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Portfolio } from './components/portfolio/portfolio';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: Home,
  },
  {
    title: 'Portfolio',
    path: 'portfolio',
    component: Portfolio,
  },
  {
    title: 'Bio',
    path: 'bio',
    component: Bio,
  },
  {
    title: 'Contact',
    path: 'contact',
    component: Contact,
  },
];
