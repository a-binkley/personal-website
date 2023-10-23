import { Outlet } from 'react-router-dom';

import { AccentTab, PageMenu, PortfolioItem, SocialLink } from '../individual';
import './Portfolio.css';
import { PortfolioData } from '../..';

export function Portfolio(props: { data: PortfolioData[] | null }) {
    return (
        <>
            <AccentTab corner='NW' desktopOnly={true} />
            <PageMenu titles={['Home', 'Portfolio', 'About']} current='Portfolio' />
            <h1 id='portfolio-header'>Portfolio</h1>
            <div className='mobile-title-sep' />
            <div id='portfolio-body-wrapper'>
                {props.data ? <div id='portfolio-data-wrapper'>
                    {props.data.map((item, index) => <PortfolioItem {...item} key={`portfolio-item-${index}`} />)}
                </div> : <p>Fetching content...</p>}
                <br />
                <SocialLink href='https://github.com/a-binkley' />
            </div>
            <AccentTab corner='SE' desktopOnly={false} />
            <Outlet />
        </>
    );
}
