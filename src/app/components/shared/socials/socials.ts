import { Component } from '@angular/core';

interface SocialData {
	site: string;
	link: string;
	description: string;
}

@Component({
	selector: 'app-socials',
	imports: [],
	standalone: true,
	templateUrl: './socials.html',
	styleUrl: './socials.scss',
})
export class SocialsComponent {
	public readonly socials: SocialData[] = [
		{
			site: 'github',
			link: 'https://github.com/a-binkley',
			description: 'GitHub',
		},
		{
			site: 'linkedin',
			link: 'https://www.linkedin.com/in/adrian-binkley/',
			description: 'LinkedIn',
		},
		{
			site: 'printables',
			link: 'https://www.printables.com/@abinkley_2729572',
			description: 'Printables',
		},
	];
}
