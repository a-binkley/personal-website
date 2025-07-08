import { Component, OnInit } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SelectModule } from 'primeng/select';
import { ToolbarModule } from 'primeng/toolbar';

import { PortfolioService } from '../../services/portfolio';
import { Nav } from '../shared/nav/nav';

enum LoadingStatus {
	INITIAL = 'Initial',
	LOADING = 'Loading',
	READY = 'Ready',
	ERROR = 'Error',
}

// const sortByOptions = [
// 	'Last Modified',
// 	'Name',
// ]

@Component({
	selector: 'app-portfolio',
	imports: [
		IconFieldModule,
		InputIconModule,
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

	constructor(private readonly portfolioSvc: PortfolioService) {}

	ngOnInit(): void {
		this.loadingStatus = LoadingStatus.LOADING;
		this.portfolioSvc
			.fetchPortfolioData()
			.then((response) => {
				console.log('Service response', response);
				// TODO
				this.loadingStatus = LoadingStatus.READY;
			})
			.catch((error) => {
				this.loadingStatus = LoadingStatus.ERROR;
			});
	}
}
