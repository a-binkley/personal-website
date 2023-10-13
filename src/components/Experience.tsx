import { EducationalDetails, ProfessionalDetails, isProfessionalDetail, schoolExperience, workExperience } from '../ExperienceData';

import '../styles/Experience.css';
import '../styles/ExperienceList.css';
import '../fonts/Proxima Nova/stylesheet.css';

export function Experience() {
    return (
        <div id='experienceContainer'>
            <ExperienceList title='Work Experience' data={workExperience} />
            <div className='separatorLineExperience' />
            <ExperienceList title='Education History' data={schoolExperience} />
        </div>
    );
}

function ExperienceList(props: { title: string, data: ProfessionalDetails[] |  EducationalDetails[] }) {
    return (
        <>
            <h1 className='experienceLbl'>{props.title}</h1>
            <ul className='experienceListWrapper'>
                {props.data.map((instance) => {
                    const site = isProfessionalDetail(instance) ? instance.employer : instance.school;

                    return (
                        <li className='experienceCellContainer' key={site}>
                            <div className='experienceLocationContainer'>
                                <h2 className='employerLbl'>{site}</h2>
                                <div className='experienceSepPipe' />
                                <h4 className='experienceDateLbl'>{`${instance.fromDate} - ${instance.toDate}`}</h4>
                                <h5 className='experienceCityLbl' style={{ color: '#7f7f7f' }}>{instance.city}</h5>
                                <h6 className='experienceRoleLbl'>{instance.role}</h6>
                            </div>
                            <p className='experienceSummaryLbl'>{instance.summary}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
