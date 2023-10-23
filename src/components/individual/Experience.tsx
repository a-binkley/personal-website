import { EducationalDetails, ProfessionalDetails, isProfessionalDetail, schoolExperience, workExperience } from '../../ExperienceData';

import './Experience.css';
import './ExperienceList.css';

export function Experience() {
    return (
        <div id='experience-container'>
            <ExperienceList title='Work Experience' data={workExperience} />
            <div className='separator-line-experience' />
            <ExperienceList title='Education History' data={schoolExperience} />
        </div>
    );
}

export function ExperienceList(props: { title: string, data: ProfessionalDetails[] |  EducationalDetails[] }) {
    return (
        <>
            <h1 className='experience-label'>{props.title}</h1>
            <ul className='experience-list-wrapper'>
                {props.data.map((instance) => {
                    const site = isProfessionalDetail(instance) ? instance.employer : instance.school;

                    return (
                        <li className='experience-cell-container' key={site}>
                            <div className='experience-location-container'>
                                <h2 className='employer-label'>{site}</h2>
                                <div className='experience-sep-pipe' />
                                <h4 className='experience-date-label'>{`${instance.fromDate} - ${instance.toDate}`}</h4>
                                <h5 className='experience-city-label' style={{ color: '#7f7f7f' }}>{instance.city}</h5>
                                <h6 className='experience-role-label'>{instance.role}</h6>
                            </div>
                            <p className='experience-summary-label'>{instance.summary}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
