import { Link, Outlet } from 'react-router-dom';

import { AccentTab, PageMenu, SocialLink } from '..';
import '../../styles/pages/Portfolio.css';
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
                    {props.data.map(({ title, tagline, lastModified, bootstrapIcon, iconPaths, url }, index) => {
                        return (
                            <Link to={url} className='portfolio-project' key={index}>
                                <svg className={`bi bi-${bootstrapIcon} portfolio-icon`} xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='currentColor' viewBox='0 0 16 16'>
                                    {iconPaths.map((iconPath) => <path d={iconPath} />)}
                                </svg>
                                <h2 className='portfolio-project-title'>{title}</h2>
                                <h3 className='portfolio-project-tagline'>{tagline}</h3>
                                <h4 className='portfolio-project-modified'>{lastModified}</h4>
                            </Link>
                        );
                    })}
                </div> : <p>Fetching content...</p>}
                <SocialLink href='https://github.com/a-binkley' />
            </div>
            <AccentTab corner='SE' desktopOnly={false} />
            <Outlet />
        </>
    );
}
