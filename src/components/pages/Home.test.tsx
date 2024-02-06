import TestRenderer from 'react-test-renderer';

import { Home } from './Home';
import { BrowserRouter } from 'react-router-dom';
import { AccentTab, Bio, Experience, PageMenu } from '../individual';

describe('About component rendering', () => {
	const testComponent = TestRenderer.create(
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	);

	it('should contain two AccentTabs in the NW and SE corners', () => {
		const accentTabs = testComponent.root.findAllByType(AccentTab);
		expect(accentTabs.length).toBe(2);
		expect(accentTabs[0].props.corner).toBe('NW');
		expect(accentTabs[1].props.corner).toBe('SE');
	});

	it('should contain a PageMenu with links to the "Home" (current), "Portfolio", and "About" pages', () => {
		expect(testComponent.root.findByType(PageMenu).props.titles).toStrictEqual(['Home', 'Portfolio', 'About']);
		expect(testComponent.root.findByType(PageMenu).props.current).toBe('Home');
	});

	it('should contain a Bio and an Experience component', () => {
		expect(testComponent.root.findByType(Bio)).toBeDefined();
		expect(testComponent.root.findByType(Experience)).toBeDefined();
	});
});
