import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { HomeComponent } from './components/home/home';
import { PortfolioComponent } from './components/portfolio/portfolio';

const siteTitle = 'Adrian Binkley';

export const routes: Routes = [
	{
		title: `${siteTitle} | Home`,
		path: '',
		component: HomeComponent,
	},
	{
		title: `${siteTitle} | Portfolio`,
		path: 'portfolio',
		component: PortfolioComponent,
	},
	{
		title: `${siteTitle} | About`,
		path: 'about',
		component: AboutComponent,
	},
	{
		title: `${siteTitle} | Contact`,
		path: 'contact',
		component: ContactComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
];
