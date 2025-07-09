import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
export class Nav implements OnInit {
	@Input() current: Page = 'home';
	public navItems: MenuItem[] = [];
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

	ngOnInit(): void {
		this.navItems = [
			{
				label: 'Home',
				icon: PrimeIcons.HOME,
				routerLink: '/',
				style: this.itemStyle('home'),
			},
			{
				label: 'About',
				icon: PrimeIcons.USER,
				routerLink: '/about',
				style: this.itemStyle('about'),
			},
			{
				label: 'Portfolio',
				icon: PrimeIcons.BRIEFCASE,
				routerLink: '/portfolio',
				style: this.itemStyle('portfolio'),
			},
			{
				label: 'Contact',
				icon: PrimeIcons.ENVELOPE,
				routerLink: '/contact',
				style: this.itemStyle('contact'),
			},
		];
	}

	public itemStyle(pageName: string): { [klass: string]: string } {
		return this.current === pageName
			? {
					'border-bottom': `2px solid ${COLORS.ACCENT}`,
			  }
			: {};
	}
}
