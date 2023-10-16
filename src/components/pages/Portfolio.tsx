import { Outlet } from 'react-router-dom';

import { AccentTab, PageMenu, SocialLink } from '..';
import '../../styles/pages/Portfolio.css';

export function Portfolio() {
    return (
        <>
            <AccentTab corner='NW' desktopOnly={true} />
            <PageMenu titles={['Home', 'Portfolio', 'About']} current='Portfolio' />
            <h1 id='portfolio-header'>Portfolio</h1>
            <div className='mobile-title-sep' />
            <div id='portfolio-body-wrapper'>
                <p>Content coming soon!</p>
                <SocialLink href='https://github.com/a-binkley' />
            </div>
            <AccentTab corner='SE' desktopOnly={false} />
            <Outlet />
        </>
    );
}
