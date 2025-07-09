import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { COLORS } from '../../../../constants';

type Page = 'home' | 'about' | 'portfolio' | 'contact';

@Component({
	selector: 'app-nav',
	imports: [ButtonModule, CommonModule, MenubarModule],
	standalone: true,
	templateUrl: './nav.html',
	styleUrl: './nav.scss',
})
export class Nav {
	@Input() current: Page = 'home';
	public readonly navItems: MenuItem[] = [
		{
			label: 'Home',
			icon: PrimeIcons.HOME,
			routerLink: '/',
		},
		{
			label: 'About',
			icon: PrimeIcons.USER,
			routerLink: '/about',
		},
		{
			label: 'Portfolio',
			icon: PrimeIcons.BRIEFCASE,
			routerLink: '/portfolio',
		},
		{
			label: 'Contact',
			icon: PrimeIcons.ENVELOPE,
			routerLink: '/contact',
		},
	];

	public readonly navBar = {
		colorScheme: {
			light: {
				root: {
					background: COLORS.CONTRAST,
					borderColor: COLORS.CONTRAST,
					borderRadius: 0,
				},
				item: {
					color: COLORS.PRIMARY,
				},
			},
		},
	};
}
