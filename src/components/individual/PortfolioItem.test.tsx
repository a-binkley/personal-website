import moment from 'moment';
import TestRenderer from 'react-test-renderer';

import { PortfolioItem } from './PortfolioItem';

describe('Portfolio Item component rendering', () => {
	const testProps = {
		title: 'TestTitle',
		tagline: 'Test tagline',
		lastModified: 'Jan 01, 2000',
		bootstrapIcon: 'foobar',
		iconPaths: ['path A', 'path B'],
		url: 'foo://bar'
	};

	const testExpComponent = TestRenderer.create(<PortfolioItem {...testProps} />);
	const testExpComponentNoDate = TestRenderer.create(<PortfolioItem {...testProps} lastModified='(no data)' />);

	it('should point to the url provided in props', () => {
		expect(testExpComponent.root.findByProps({ className: 'portfolio-item-wrapper' }).props.href).toBe(testProps.url);
	});

	it('should render bootstrap icon paths correctly', () => {
		testExpComponent.root.findAllByType('path').forEach((elem, index) => {
			expect(elem.props.d).toBe(testProps.iconPaths[index]);
		});
	});

	it('should render item information in separate headers', () => {
		[
			['title', testProps.title],
			['tagline', testProps.tagline],
			['modified', testProps.lastModified === '(no data)' ? 'No data' : moment(testProps.lastModified).format('ll')]
		].forEach(([classSuffix, value]) => {
			expect(testExpComponent.root.findByProps({ className: `portfolio-item-${classSuffix}` }).children).toStrictEqual([
				value
			]);
		});

		expect(testExpComponentNoDate.root.findByProps({ className: 'portfolio-item-modified' }).children).toStrictEqual([
			'No data'
		]);
	});
});
