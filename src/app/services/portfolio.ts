import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';

import { CardInfo } from '../components/portfolio/card/card';

@Injectable({
	providedIn: 'root',
})
export class PortfolioService {
	private readonly octokit = new Octokit();

	public async fetchPortfolioData(): Promise<CardInfo[]> {
		const data: Record<string, CardInfo> = {};
		const repoMetadataResponse = await this.octokit.rest.repos.listForUser({
			username: 'a-binkley',
			headers: {
				'X-GitHub-Api-Version': '2022-11-28',
			},
		});

		const repoResponses: Promise<void>[] = [];
		repoMetadataResponse.data.forEach((repoData) => {
			data[repoData.name] = {
				repo: {
					title: '',
					tagline: '',
					url: repoData.html_url,
					site: '',
					iconPaths: [],
				},
				lastModified: new Date(
					repoData.updated_at ?? new Date().toISOString(),
				),
			};
			repoResponses.push(
				this.octokit.rest.repos
					.getContent({
						owner: 'a-binkley',
						repo: repoData.name,
						path: 'portfolio-tags.json',
						headers: {
							'X-GitHub-Api-Version': '2022-11-28',
						},
					})
					.then((response) => {
						if (
							'content' in response.data &&
							typeof response.data.content === 'string'
						) {
							const { title, tagline, url, iconPaths } =
								JSON.parse(
									Buffer.from(
										response.data.content,
										'base64',
									).toString(),
								) as {
									title: string;
									tagline: string;
									url: string;
									iconPaths: string[];
								};
							const matchingData = data[repoData.name];
							matchingData.repo = {
								...matchingData.repo,
								title,
								tagline,
								site: url,
								iconPaths,
							};
						}
					})
					.catch((error) => {
						if (error.status !== 404) {
							console.error(error);
						}
					}),
			);
		});

		await Promise.allSettled(repoResponses);

		return Object.values(data)
			.filter((item) => item.repo.title)
			.sort(
				(a, b) =>
					this.getTime(b.lastModified) - this.getTime(a.lastModified),
			);
	}

	private getTime(date?: Date) {
		return date != null ? date.getTime() : 0;
	}
}
