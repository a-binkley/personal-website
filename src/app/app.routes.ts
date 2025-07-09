import { Routes } from '@angular/router';

import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Portfolio } from './components/portfolio/portfolio';

const siteTitle = 'Adrian Binkley';

export const routes: Routes = [
	{
		title: `${siteTitle} | Home`,
		path: '',
		component: Home,
	},
	{
		title: `${siteTitle} | Portfolio`,
		path: 'portfolio',
		component: Portfolio,
	},
	{
		title: `${siteTitle} | About`,
		path: 'about',
		component: About,
	},
	{
		title: `${siteTitle} | Contact`,
		path: 'contact',
		component: Contact,
	},
	{
		path: '**',
		redirectTo: '',
	},
];
