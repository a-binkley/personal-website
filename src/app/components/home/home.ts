import { Component, inject } from '@angular/core';

import { home } from '../../../constants';
import { HomeService } from '../../services/home';
import { Nav } from '../shared/nav/nav';
import { BusinessCard } from './business-card/business-card';
import { ProfTimeline } from './prof-timeline/prof-timeline';

@Component({
	selector: 'app-home',
	imports: [BusinessCard, Nav, ProfTimeline],
	standalone: true,
	templateUrl: './home.html',
	styleUrl: './home.scss',
})
export class Home {
	public readonly content = home;
	private readonly homeSvc = inject(HomeService);

	public get yoe(): number {
		return this.homeSvc.experienceYears;
	}
}
