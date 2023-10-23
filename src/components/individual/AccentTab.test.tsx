import TestRenderer from 'react-test-renderer';
import { AccentTab, tabStyleFromProps } from './AccentTab';

describe('AccentTab component rendering', () => {
    it('should assign a className based on props.desktopOnly', () => {
        const testComponentDesktop = TestRenderer.create(<AccentTab corner='NW' desktopOnly={true} />);
        expect(testComponentDesktop.root.findByType('img').props.className).toBe('desktop');

        const testComponentShared = TestRenderer.create(<AccentTab corner='NW' desktopOnly={false} />);
        expect(testComponentShared.root.findByType('img').props.className).toBe('');
    });
});

describe('tabStyleFromProps() function logic', () => {
    it('should only return a transformation style object if props.corner = SE', () => {
        expect(tabStyleFromProps({ corner: 'NW', desktopOnly: true })).toStrictEqual({});
        expect(tabStyleFromProps({ corner: 'NW', desktopOnly: false })).toStrictEqual({});
        expect(tabStyleFromProps({ corner: 'SE', desktopOnly: true })).not.toStrictEqual({});
        expect(tabStyleFromProps({ corner: 'SE', desktopOnly: false })).not.toStrictEqual({});
    });
});
