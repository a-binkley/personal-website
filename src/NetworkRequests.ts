import { Buffer } from 'buffer';
import { Octokit } from 'octokit';

import { PortfolioData } from '.';

/** Fetch repository info for portfolio page
 * @param client the {@link Octokit} client used to make API calls
 * @param callback the callback function to execute using {@link parsePortfolioTags()}.
 * Intended to be a React state setter function, but can be something else if desired
 */
export async function fetchGitHubData(client: Octokit, callback: (data: PortfolioData[]) => void) {
	// Retrieve all public repositories for a-binkley
	await client.request('GET /users/{username}/repos', { username: 'a-binkley' }).then(
		async (response) => {
			// Destructure relevant information
			const repoInfo = response.data.map(({ name, html_url, updated_at }) => {
				return {
					name,
					html_url,
					updated_at
				};
			});

			callback(await parsePortfolioTags(client, repoInfo));
		},
		(rejection) => {
			console.error(`Unable to fetch general portfolio data from GitHub (error ${rejection.status}). ${rejection.data}`);
		}
	);
}

/** Parse information from portfolio-tags.json for each relevant public repository.
 * Helper function for {@link fetchGitHubData()}
 * @param client the {@link Octokit} client used to make API calls
 * @param repos the relevant data from a list of public repositories returned by the GitHub API
 * @returns an array of {@link PortfolioData} objects to be used for rendering
 */
export async function parsePortfolioTags(
	client: Octokit,
	repos: { name: string; html_url: string; updated_at: string | null | undefined }[]
) {
	const data: PortfolioData[] = [];

	// Check for repositories with a portfolio-tags.json and save those to render on Portfolio route
	for (const repo of repos) {
		await client
			.request('GET /repos/{owner}/{repo}/contents/{path}', {
				owner: 'a-binkley',
				repo: repo.name,
				path: 'portfolio-tags.json'
			})
			.then(
				(response) => {
					console.log(response);
					if (Array.isArray(response.data) || response.data.type !== 'file') {
						console.error(`Unable to parse portfolio-tags.json for repository ${repo.name}`);
					} else {
						// Parse portfolio tag data and add to array
						const { title, tagline, url, bootstrapIcon, iconPaths } = JSON.parse(
							Buffer.from(response.data.content, 'base64').toString()
						);

						if (!title || !tagline || !bootstrapIcon || !iconPaths) {
							console.error(`Missing information from portfolio-tags.json for repository ${repo.name}`);
						} else if (new URL(repo.html_url).protocol !== 'https:') {
							console.error(`Protocol for returned URL "${repo.html_url}" is not HTTPS, and is possibly vulnerable`);
						} else {
							data.push({
								title,
								tagline,
								lastModified: repo.updated_at ?? '(no data)',
								bootstrapIcon,
								iconPaths,
								url: url ?? repo.html_url
							});
						}
					}
				},
				(rejection) => {
					if (rejection.status !== 404) {
						console.error(
							`Unable to fetch portfolio data for repository ${repo.name} (error ${rejection.status}). ${rejection.data}`
						);
					}
					// Ignore 404 errors since these are public repositories I'm choosing not to highlight in my portfolio
				}
			);
	}

	return data.sort((a, b) => b.lastModified.localeCompare(a.lastModified));
}
