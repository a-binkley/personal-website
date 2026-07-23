import { Component } from '@angular/core';

import { SocialsComponent } from '../../shared/socials/socials';

@Component({
	selector: 'app-business-card',
	imports: [SocialsComponent],
	templateUrl: './business-card.html',
	styleUrl: './business-card.scss',
})
export class BusinessCardComponent {}
