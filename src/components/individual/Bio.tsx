import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './Bio.css';

export const paragraphStrings = [
	`I am a software engineer based in the greater Philadelphia area. \
My main areas of expertise are TypeScript, React.js, Node.js, SQL, Python, \
and Java. I have experience with and certifications for various cloud \
technologies, and I'm passionate about exploring the intersections of \
technology with the arts and humanities.`,
	`If you're interested in knowing more, you can view my portfolio and a longer biography \
via the navigation menu. Additionally, you can:`
];

export const moreInfoOptions: { iconClass: 'download' | 'envelope'; iconPaths: string[]; anchor: ReactElement }[] = [
	{
		iconClass: 'download',
		iconPaths: [
			'M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z',
			'M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'
		],
		anchor: (
			<Link to='Resume.pdf' target='_blank' className='bio-link' download='Adrian Binkley - Resume.pdf'>
				Download my Résumé
			</Link>
		)
		// TODO: add back once CV finalized
		// }, {
		//     iconClass: 'download',
		//     iconPaths: [
		//         'M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z',
		//         'M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z',
		//     ],
		//     anchor: <a download>Download my CV</a>
	},
	{
		iconClass: 'envelope',
		iconPaths: [
			`M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 \
2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z`
		],
		anchor: (
			<a href='mailto:adrianbinkley@gmail.com' className='bio-link'>
				Contact me
			</a>
		)
	}
];

export function Bio() {
	return (
		<div id='bio-container'>
			<h2>Hi there, my name is</h2>
			<h1>Adrian Binkley</h1>
			<div className='separator-line-bio' />
			<div className='bio-content-wrapper'>
				{paragraphStrings.map((paragraph, index) => (
					<p key={`p-${index}`}>{paragraph}</p>
				))}
				<ol>
					{moreInfoOptions.map(({ iconClass, iconPaths, anchor }, index) => {
						return (
							<li className='info-option-row' key={`info-${index}`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									fill='currentColor'
									className={`bi bi-${iconClass}`}
									viewBox='0 0 16 16'
								>
									{iconPaths.map((path, index) => (
										<path d={path} key={`icon-path-${index}`} />
									))}
								</svg>
								{anchor}
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
}
