import TestRenderer from 'react-test-renderer';
import { SocialLink, svgPaths } from './SocialLink';

describe('Social Link component', () => {
    it('should throw an error if site provided in props is invalid', () => {
        expect(() => TestRenderer.create(<SocialLink href='foo://bar.com/' />)).toThrowError('No path string found for site "bar"');
    });

    describe('rendering', () => {
        const testComponent = TestRenderer.create(<SocialLink href='https://github.com/' />);
        
        it('should include a label saying "See More"', () => {
            expect(testComponent.root.findByProps({ className: 'social-see-more' }).children).toStrictEqual(['See More:'])
        });
    
        it('should include a link to the site provided in props', () => {
            expect(testComponent.root.findByType('a').props.href).toBe(testComponent.root.props.href);
        });
    
        it('should correctly map social sites to their bootstrap icon paths', () => {
            expect(testComponent.root.findByType('path').props.d).toBe(svgPaths.get('github'));
        });
    });
});
