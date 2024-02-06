import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { Portfolio } from './Portfolio';
import { AccentTab, PageMenu, PortfolioItem, SocialLink } from '../individual';

const testData = [
	{
		title: 'projectTitle1',
		tagline: 'tagline1',
		bootstrapIcon: 'icon1',
		iconPaths: ['iconPath1A', 'iconPath1B'],
		lastModified: '2000-01-01T00:00:00+0000',
		url: 'https://github.com/testRepoUrl1'
	},
	{
		title: 'projectTitle2',
		tagline: 'tagline2',
		bootstrapIcon: 'icon2',
		iconPaths: ['iconPath2A', 'iconPath2B'],
		lastModified: '2005-01-01T00:00:00+0000',
		url: 'https://github.com/testRepoUrl2'
	}
];

describe('About component rendering', () => {
	const testComponentNoData = TestRenderer.create(
		<BrowserRouter>
			<Portfolio data={null} />
		</BrowserRouter>
	);
	const testComponentWithData = TestRenderer.create(
		<BrowserRouter>
			<Portfolio data={testData} />
		</BrowserRouter>
	);

	it('should contain two AccentTabs in the NW and SE corners', () => {
		const accentTabs = testComponentNoData.root.findAllByType(AccentTab);
		expect(accentTabs.length).toBe(2);
		expect(accentTabs[0].props.corner).toBe('NW');
		expect(accentTabs[1].props.corner).toBe('SE');
	});

	it('should contain a PageMenu with links to the "Home", "Portfolio" (current), and "About" pages', () => {
		expect(testComponentNoData.root.findByType(PageMenu).props.titles).toStrictEqual(['Home', 'Portfolio', 'About']);
		expect(testComponentNoData.root.findByType(PageMenu).props.current).toBe('Portfolio');
	});

	it('should display a list of PortfolioItems if API data has been fetched', () => {
		expect(testComponentWithData.root.findAllByType(PortfolioItem).length).toBe(testData.length);
	});

	it('should display a loading message if awaiting API data', () => {
		render(
			<BrowserRouter>
				<Portfolio data={null} />
			</BrowserRouter>
		);
		expect(screen.getByText('Fetching content...')).toBeDefined();
	});

	it('should contain a link to my GitHub', () => {
		expect(testComponentNoData.root.findByType(SocialLink).props.href).toBe('https://github.com/a-binkley');
	});
});
