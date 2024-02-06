import moment from 'moment';
import { Octokit } from 'octokit';

import { fetchGitHubData, parsePortfolioTags } from './NetworkRequests';

const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

const responseBase = {
	headers: {},
	status: -1,
	url: '',
	data: ''
};

const testRepoData = { name: 'testRepoName', html_url: 'https://github.com/testRepoUrl', updated_at: '2000-01-01T00:00:00+0000' };

const mockRequest = jest.fn();

jest.mock('octokit', () => {
	return {
		Octokit: jest.fn().mockImplementation(() => {
			return {
				request: mockRequest
			};
		})
	};
});

beforeEach(() => {
	jest.clearAllMocks();
	consoleSpy.mockReset();
});

describe('fetchGitHubData function', () => {
	const octokit = new Octokit();
	const testCallbackFunction = jest.fn();

	it('should properly invoke the callback function if receiving valid data', async () => {
		const testContent = {
			title: 'testTitle',
			tagline: 'asdf',
			bootstrapIcon: 'asdf',
			iconPaths: 'asdf'
		};
		mockRequest.mockResolvedValueOnce({ ...responseBase, status: 200, data: [testRepoData] }); // for call in fetchGitHubData
		mockRequest.mockResolvedValueOnce({
			...responseBase,
			status: 200,
			data: { type: 'file', content: btoa(JSON.stringify(testContent)) }
		}); // for call in parsePortfolioTags

		await fetchGitHubData(octokit, testCallbackFunction);
		expect(consoleSpy).toHaveBeenCalledTimes(0);
		expect(testCallbackFunction).toHaveBeenCalledTimes(1);
		expect(testCallbackFunction).toHaveBeenCalledWith([
			{
				...testContent,
				lastModified: moment(testRepoData.updated_at).format('ll'),
				url: testRepoData.html_url
			}
		]);
	});

	it('should log a console error if the network request fails', async () => {
		mockRequest.mockRejectedValueOnce({ ...responseBase, status: 400, data: 'Bad request' });
		await fetchGitHubData(octokit, testCallbackFunction);
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		expect(consoleSpy).toHaveBeenCalledWith(`Unable to fetch general portfolio data from GitHub (error 400). Bad request`);
	});
});

describe('parsePortfolioTags function', () => {
	const octokit = new Octokit();

	it('should return an empty array if no repos provided', async () => {
		expect(await parsePortfolioTags(octokit, [])).toStrictEqual([]);
	});

	it('should gracefully handle non-404 request errors', async () => {
		mockRequest.mockRejectedValueOnce({ ...responseBase, status: 400, data: 'Bad request' });
		await parsePortfolioTags(octokit, [testRepoData]);
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		expect(consoleSpy).toHaveBeenCalledWith(
			`Unable to fetch portfolio data for repository ${testRepoData.name} (error 400). Bad request`
		);
	});

	it('should gracefully handle 404 request errors', async () => {
		mockRequest.mockRejectedValueOnce({ ...responseBase, status: 404, data: 'Not found' });
		await parsePortfolioTags(octokit, [testRepoData]);
		expect(consoleSpy).toHaveBeenCalledTimes(0);
	});

	it('should log a console error if the response is an array', async () => {
		mockRequest.mockResolvedValueOnce({ ...responseBase, status: 200, data: [] });
		await parsePortfolioTags(octokit, [testRepoData]);
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		expect(consoleSpy).toHaveBeenCalledWith(`Unable to parse portfolio-tags.json for repository ${testRepoData.name}`);
	});

	it('should log a console error if the response data is not a file', async () => {
		mockRequest.mockResolvedValueOnce({ ...responseBase, status: 200, data: { type: 'zip' } });
		await parsePortfolioTags(octokit, [testRepoData]);
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		expect(consoleSpy).toHaveBeenCalledWith(`Unable to parse portfolio-tags.json for repository ${testRepoData.name}`);
	});

	it('should log a console error if the response is missing information', async () => {
		const partialJSONs = [
			{
				tagline: 'asdf',
				bootstrapIcon: 'asdf',
				iconPaths: 'asdf'
			},
			{
				title: 'asdf',
				bootstrapIcon: 'asdf',
				iconPaths: 'asdf'
			},
			{
				title: 'asdf',
				tagline: 'asdf',
				iconPaths: 'asdf'
			},
			{
				title: 'asdf',
				tagline: 'asdf',
				bootstrapIcon: 'asdf'
			}
		];

		for (const partial of partialJSONs) {
			const testContent = btoa(JSON.stringify(partial));
			mockRequest.mockResolvedValueOnce({ ...responseBase, status: 200, data: { type: 'file', content: testContent } });
			await parsePortfolioTags(octokit, [testRepoData]);
			expect(consoleSpy).toHaveBeenCalledTimes(1);
			expect(consoleSpy).toHaveBeenCalledWith(
				`Missing information from portfolio-tags.json for repository ${testRepoData.name}`
			);
			consoleSpy.mockReset();
		}
	});

	it('should log a console error if the repository url does not use HTTPS protocol', async () => {
		const testContent = {
			title: 'testTitle',
			tagline: 'asdf',
			bootstrapIcon: 'asdf',
			iconPaths: 'asdf'
		};
		mockRequest.mockResolvedValueOnce({
			...responseBase,
			status: 200,
			data: { type: 'file', content: btoa(JSON.stringify(testContent)) }
		});

		await parsePortfolioTags(octokit, [{ ...testRepoData, html_url: 'http://github.com/unsecureRepoUrl' }]);
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		expect(consoleSpy).toHaveBeenCalledWith(
			`Protocol for returned URL "http://github.com/unsecureRepoUrl" is not HTTPS, and is possibly vulnerable`
		);
	});

	it('should properly return a list of valid data', async () => {
		const testContent = {
			title: 'testTitle',
			tagline: 'asdf',
			bootstrapIcon: 'asdf',
			iconPaths: 'asdf'
		};
		mockRequest.mockResolvedValue({
			...responseBase,
			status: 200,
			data: { type: 'file', content: btoa(JSON.stringify(testContent)) }
		});
		expect(await parsePortfolioTags(octokit, [testRepoData, { ...testRepoData, updated_at: undefined }])).toStrictEqual([
			{
				...testContent,
				lastModified: moment(testRepoData.updated_at).format('ll'),
				url: testRepoData.html_url
			},
			{
				...testContent,
				lastModified: 'No data',
				url: testRepoData.html_url
			}
		]);
		expect(consoleSpy).toHaveBeenCalledTimes(0);
	});
});
