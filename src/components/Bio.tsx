import '../styles/Bio.css';
import '../fonts/Proxima Nova/stylesheet.css';

export function Bio() {
    const description = [
        `I am a software engineer based in the greater Philadelphia area. \
My main areas of expertise are TypeScript, Node.js, Python, and Java. I \
have experience with and certifications for various cloud technologies, \
and I'm passionate about exploring the intersections of technology with \
the arts and humanities.`,
        `In addition to my full-time work and individual projects in computer \
science, I maintain a wide range of hobbies including woodworking, Sunfish \
sailing, kayaking, and 3D printing and painting minifigures for Dungeons & Dragons. \
While my career is now primarily focused on technology, I studied classical music for \
15 years preceding this - including obtaining a Bachelor's of Music. I still enjoy and \
regularly listen to classical music, but I have found the day-to-day work of software engineering \
to be much better aligned with my long-term goals and preference for analytical thinking.`,
        `If you're interested in knowing more about my professional work, you can \
view my GitHub portfolio and LinkedIn profile via the social icons at the bottom of the page. \
Additionally, you can:`
    ];

    const moreInfoOptions = [
        ['download', 'Download my Résumé'],
        ['download', 'Download my CV'],
        ['envelope', 'Contact me']
    ];

    const iconPaths: { [key: string]: string[] } = {
        'download': [
            'M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z', 
            'M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'
        ],
        'envelope': [
            'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z'
        ]
    };

    return (
        <div id='bioContainer'>
            <h2>Hi there, my name is</h2>
            <h1>Adrian Binkley</h1>
            <div className='separatorLineBio' />
            {description.map((paragraph, index) => <p key={`p-${index}`}>{paragraph}</p>)}
            <ol>
                {moreInfoOptions.map(([icon, option], index) => {
                    return (
                        <li className='infoOptionRow' key={`info-${index}`}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className={`bi bi-${icon}`} viewBox='0 0 16 16'>
                                {iconPaths[icon].map((path, index) => <path d={path} key={`icon-path-${index}`} />)}
                            </svg>
                            <a>{option}</a>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
