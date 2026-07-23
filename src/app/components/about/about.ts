import { Component } from '@angular/core';

import { about } from '../../../constants';
import { NavComponent } from '../shared/nav/nav';

@Component({
	selector: 'app-about',
	imports: [NavComponent],
	standalone: true,
	templateUrl: './about.html',
	styleUrl: './about.scss',
})
export class AboutComponent {
	public readonly text = about;
}
