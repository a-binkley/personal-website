import { Component } from '@angular/core';

import { Nav } from '../shared/nav/nav';

@Component({
	selector: 'app-about',
	imports: [Nav],
	standalone: true,
	templateUrl: './about.html',
	styleUrl: './about.scss',
})
export class About {}
