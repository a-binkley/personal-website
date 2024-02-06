import TestRenderer from 'react-test-renderer';
import { MenuPaddle, PageMenu } from './PageMenu';
import { BrowserRouter, Link } from 'react-router-dom';
import { fireEvent, getByRole, render } from '@testing-library/react';

describe('Page Menu component', () => {
	const testComponent = TestRenderer.create(
		<BrowserRouter>
			<PageMenu titles={['About', 'Home', 'Portfolio']} current='Home' />
		</BrowserRouter>
	).root.findByType(PageMenu);
	const titleList: string[] = testComponent.props.titles;

	describe('rendering', () => {
		it('should correctly pass prop values to MenuPaddle child components', () => {
			const menuPaddleChildren = testComponent.findAllByType(MenuPaddle);

			expect(menuPaddleChildren.length).toBe(titleList.length);
			titleList.forEach((title, index) => {
				expect(menuPaddleChildren[index].props.title).toBe(title);
				if (testComponent.props.current === title) {
					expect(menuPaddleChildren[index].props.type).toBe('current');
				} else {
					expect(menuPaddleChildren[index].props.type).toBe('other');
				}
			});
		});
	});

	describe('state handling', () => {
		it('should change label className according to state', () => {
			const elem = render(
				<BrowserRouter>
					<PageMenu titles={['About', 'Home', 'Portfolio']} current='Home' />
				</BrowserRouter>
			);
			const checkbox = getByRole(elem.container, 'checkbox');
			expect(elem.container.getElementsByClassName('checked').length).toBe(0);
			expect(elem.container.getElementsByClassName('unchecked').length).toBe(1);
			expect(elem.getByTestId('page-menu-list').style.minHeight).toBe('0');

			fireEvent.click(checkbox);
			expect(elem.container.getElementsByClassName('checked').length).toBe(1);
			expect(elem.container.getElementsByClassName('unchecked').length).toBe(0);
			expect(elem.getByTestId('page-menu-list').style.minHeight).toBe('100vh');
		});
	});
});

describe('Menu Paddle component rendering', () => {
	const testComponentCurrent = TestRenderer.create(
		<BrowserRouter>
			<MenuPaddle title='About' type='current' />
		</BrowserRouter>
	);
	const testComponentOther = TestRenderer.create(
		<BrowserRouter>
			<MenuPaddle title='Home' type='other' />
		</BrowserRouter>
	);

	it('should assign wrapper className according to props.type', () => {
		expect(testComponentCurrent.root.findByProps({ className: 'page-menu-list-item current' })).toBeDefined();
		expect(testComponentOther.root.findByProps({ className: 'page-menu-list-item other' })).toBeDefined();
	});

	it('should have Links pointing to the correct routes', () => {
		expect(testComponentCurrent.root.findByType(Link).props.to).toBe(
			`/${testComponentCurrent.root.findByType(MenuPaddle).props.title.toLowerCase()}`
		);
		expect(testComponentOther.root.findByType(Link).props.to).toBe('/');
	});

	it('should prevent default Link action if selecting current page', () => {
		const clickHandlerCurrent = testComponentCurrent.root.findByType(Link).props.onClick;
		const clickHandlerOther = testComponentOther.root.findByType(Link).props.onClick;
		const mockEvent: Partial<React.MouseEvent<HTMLAnchorElement, MouseEvent>> = {
			preventDefault: () => {
				return {};
			}
		};

		expect(clickHandlerCurrent(mockEvent)).not.toBeNull();
		expect(clickHandlerOther()).toBeNull();
	});
});
