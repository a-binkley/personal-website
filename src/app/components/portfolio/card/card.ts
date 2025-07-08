import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

export interface RepoInfo {
	title: string;
	url: string;
	tagline: string;
	iconPaths: string[];
}

export interface CardInfo {
	repo: RepoInfo;
	lastModified?: Date;
}

@Component({
	selector: 'app-card',
	imports: [],
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
			).toFormat('ll');
		}
	}
}
