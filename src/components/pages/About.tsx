import { Outlet } from 'react-router-dom';

import { AccentTab, PageMenu, SocialLink } from '..';
import '../../styles/pages/About.css';

export function About() {
    const aboutParagraphs = [
        `In addition to my full-time work and individual projects in computer \
science, I maintain a wide range of hobbies including Sunfish sailing, kayaking, \
3D printing and painting minifigures for Dungeons & Dragons, and woodworking.`,
        `While my career is now primarily focused on technology, I studied classical music for \
15 years preceding this - including obtaining a Bachelor's of Music. I still enjoy and \
regularly listen to classical music, but I have found the day-to-day work of software engineering \
to be much better aligned with my long-term goals and preference for analytical thinking.`
    ];

    return (
        <>
            <PageMenu titles={['Home', 'Portfolio', 'About']} current='About' />
            <h1 id='about-header'>About me</h1>
            <div className='mobile-title-sep' />
            <div id='about-p-wrapper'>
                {aboutParagraphs.map((pg, index) => <p className='about-p' key={index}>{pg}</p>)}
                <SocialLink href='https://linkedin.com/in/adrian-binkley/' />
            </div>
            <AccentTab corner='SE' />
            <Outlet />
        </>
    );
}
