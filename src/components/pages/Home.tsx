import { Outlet } from 'react-router-dom';
import { AccentTab, Bio, Experience, PageMenu } from '../individual';

import './Home.css';

export function Home() {
    return (
        <>
            <AccentTab corner='NW' desktopOnly={false} />
            <div id='bodySections'>
                <Bio />
                <Experience />
            </div>
            <PageMenu titles={['Home', 'Portfolio', 'About']} current='Home' />

            {/* <div id='issueReporterWrapper'>
                <p id='issueReporterPrompt'>Something not quite right?</p>
                <a id='issueReporterLink' href='https://github.com/a-binkley/personal-website/issues' target='_blank' rel='noreferrer'>Report an issue</a>
            </div> */}
            <AccentTab corner='SE' desktopOnly={false} />
            <Outlet />
        </>
    );
}
