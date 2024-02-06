import { Link } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';

import { NotFound } from './NotFound';
import { BrowserRouter } from 'react-router-dom';

describe('About component rendering', () => {
	const testComponent = TestRenderer.create(
		<BrowserRouter>
			<NotFound />
		</BrowserRouter>
	);

	it('should contain a Link to the Home page', () => {
		expect(testComponent.root.findByType(Link).props.to).toBe('/');
	});
});
