import { Component, OnInit } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SelectModule } from 'primeng/select';
import { ToolbarModule } from 'primeng/toolbar';

import { PortfolioService } from '../../services/portfolio';
import { Nav } from '../shared/nav/nav';
import { Card, CardInfo } from './card/card';

enum LoadingStatus {
	INITIAL = 'Initial',
	LOADING = 'Loading',
	READY = 'Ready',
	ERROR = 'Error',
}

@Component({
	selector: 'app-portfolio',
	imports: [
		Card,
		FloatLabel,
		IconFieldModule,
		InputIconModule,
		InputTextModule,
		MessageModule,
		Nav,
		ProgressSpinnerModule,
		SelectModule,
		ToolbarModule,
	],
	standalone: true,
	templateUrl: './portfolio.html',
	styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
	public readonly lsEnum = LoadingStatus;
	public loadingStatus = LoadingStatus.INITIAL;
	public cardInfo: CardInfo[] = [];

	constructor(private readonly portfolioSvc: PortfolioService) {}

	ngOnInit(): void {
		this.loadingStatus = LoadingStatus.LOADING;
		this.portfolioSvc
			.fetchPortfolioData()
			.then((response) => {
				this.cardInfo = response;
				this.loadingStatus = LoadingStatus.READY;
			})
			.catch(() => {
				this.loadingStatus = LoadingStatus.ERROR;
			});
	}
}
