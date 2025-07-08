import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

export interface RepoInfo {
	title: string;
	tagline: string;
	url: string; // GitHub repo
	site: string; // web app
	iconPaths: string[];
}

export interface CardInfo {
	repo: RepoInfo;
	lastModified?: Date;
}

@Component({
	selector: 'app-card',
	imports: [ButtonModule, CardModule],
	templateUrl: './card.html',
	styleUrl: './card.scss',
})
export class Card implements OnInit {
	@Input() info!: CardInfo;
	public lastModifiedDate: string = 'No data';

	ngOnInit(): void {
		if (this.info.lastModified) {
			this.lastModifiedDate = DateTime.fromJSDate(
				this.info.lastModified
			).toFormat('dd LLL yyyy');
		}
	}
}
