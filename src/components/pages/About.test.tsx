import TestRenderer from 'react-test-renderer';

import { About } from './About';
import { BrowserRouter } from 'react-router-dom';
import { AccentTab, PageMenu } from '../individual';

describe('About component rendering', () => {
	const testComponent = TestRenderer.create(
		<BrowserRouter>
			<About />
		</BrowserRouter>
	);

	it('should contain two AccentTabs in the NW and SE corners', () => {
		const accentTabs = testComponent.root.findAllByType(AccentTab);
		expect(accentTabs.length).toBe(2);
		expect(accentTabs[0].props.corner).toBe('NW');
		expect(accentTabs[1].props.corner).toBe('SE');
	});

	it('should contain a PageMenu with links to the "Home", "Portfolio", and "About" (current) pages', () => {
		expect(testComponent.root.findByType(PageMenu).props.titles).toStrictEqual(['Home', 'Portfolio', 'About']);
		expect(testComponent.root.findByType(PageMenu).props.current).toBe('About');
	});
});
