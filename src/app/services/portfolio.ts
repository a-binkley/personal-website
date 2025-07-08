import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';

import { CardInfo } from '../components/portfolio/card/card';

@Injectable({
	providedIn: 'root',
})
export class PortfolioService {
	private readonly octokit = new Octokit();

	public async fetchPortfolioData(): Promise<CardInfo[]> {
		const data: { [key: string]: CardInfo } = {};
		const repoMetadataResponse = await this.octokit.request(
			'GET /users/a-binkley/repos',
			{
				headers: {
					'X-GitHub-Api-Version': '2022-11-28',
				},
			}
		);

		const repoResponses: Promise<any>[] = [];
		repoMetadataResponse.data.forEach(
			(repoData: {
				name: string;
				html_url: string;
				updated_at: string;
			}) => {
				data[repoData.name] = {
					repo: {
						title: '',
						tagline: '',
						url: repoData.html_url,
						iconPaths: [],
					},
					lastModified: new Date(repoData.updated_at),
				};
				repoResponses.push(
					this.octokit
						.request(
							'GET /repos/a-binkley/{repo}/contents/{path}',
							{
								repo: repoData.name,
								path: 'portfolio-tags.json',
								headers: {
									'X-GitHub-Api-Version': '2022-11-28',
								},
							}
						)
						.catch((error) => {
							if (error.status !== 404) {
								console.error(error);
							}
						})
				);
			}
		);

		await Promise.allSettled(repoResponses).then((responses) => {
			responses.forEach((response) => {
				if (response.status === 'fulfilled' && response.value) {
					const { title, tagline, iconPaths } = JSON.parse(
						Buffer.from(
							response.value.data.content,
							'base64'
						).toString()
					);
					const matchingData =
						data[response.value.data._links.html.split('/')[4]];
					matchingData.repo = {
						...matchingData.repo,
						title,
						tagline,
						iconPaths,
					};
				}
			});
		});

		return Object.values(data).filter((item) => item.repo.title);
	}
}
