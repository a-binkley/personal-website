import { AccentTab, Bio, Experience, SocialLink } from '.';

import '../styles/Home.css';

export function Home() {
    return (
        <>
            <AccentTab corner='NW' />
            <div id='bodySections'>
                <Bio />
                <Experience />
            </div>
            <div id='socialsContainer'>
                <SocialLink href='https://github.com/a-binkley' />
                <SocialLink href='https://linkedin.com/in/adrian-binkley/' />
            </div>
            <AccentTab corner='SE' />
        </>
    );
};
