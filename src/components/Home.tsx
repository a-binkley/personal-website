import { AccentTab, Bio, Experience, PageMenu, SocialLink } from '.';

import '../styles/Home.css';

export type PageTitle = 'About' | 'Portfolio';

export function Home() {
    return (
        <>
            <AccentTab corner='NW' />
            <div id='bodySections'>
                <Bio />
                <Experience />
            </div>
            <PageMenu titles={['About', 'Portfolio']} />
            <div id='socialsContainer'>
                <SocialLink href='https://github.com/a-binkley' />
                <SocialLink href='https://linkedin.com/in/adrian-binkley/' />
            </div>
            <div id='issueReporterWrapper'>
                <p id='issueReporterPrompt'>Something not quite right?</p>
                <a id='issueReporterLink' href='https://github.com/a-binkley/personal-website/issues' target='_blank' rel='noreferrer'>Report an issue</a>
            </div>
            <AccentTab corner='SE' />
        </>
    );
}
