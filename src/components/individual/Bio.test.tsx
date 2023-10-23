import TestRenderer from 'react-test-renderer';
import { Bio, moreInfoOptions, paragraphStrings } from './Bio';
import { BrowserRouter } from 'react-router-dom';

describe('Biography component rendering', () => {
    const testComponent = TestRenderer.create(<BrowserRouter><Bio /></BrowserRouter>);

    it('should render separate paragraphs from static data', () => {
        const paragraphElements = testComponent.root.findAllByType('p');
        expect(paragraphElements.length).toBe(paragraphStrings.length);

        paragraphElements.forEach((elem, index) => {
            expect(elem.children[0]).toBe(paragraphStrings[index]);
        });
    });

    it('should render separate list items from bootstrap icon info', () => {
        const listItemElements = testComponent.root.findAllByType('li');
        const vectorElements = testComponent.root.findAllByType('svg');
        expect(listItemElements.length).toBe(moreInfoOptions.length);
        expect(vectorElements.length).toBe(moreInfoOptions.length);

        vectorElements.forEach((elem, index) => {
            expect(elem.props.className).toBe(`bi bi-${moreInfoOptions[index].iconClass}`);
            expect(elem.children.length).toBe(moreInfoOptions[index].iconPaths.length);
        });
    });
});
