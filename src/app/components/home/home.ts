import { Component, inject } from '@angular/core';

import { home } from '../../../constants';
import { HomeService } from '../../services/home';
import { NavComponent } from '../shared/nav/nav';
import { BusinessCardComponent } from './business-card/business-card';
import { ProfTimelineComponent } from './prof-timeline/prof-timeline';

@Component({
	selector: 'app-home',
	imports: [BusinessCardComponent, NavComponent, ProfTimelineComponent],
	standalone: true,
	templateUrl: './home.html',
	styleUrl: './home.scss',
})
export class HomeComponent {
	public readonly content = home;
	private readonly homeSvc = inject(HomeService);

	public get yoe(): number {
		return this.homeSvc.experienceYears;
	}
}
