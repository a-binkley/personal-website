import { EducationalDetails, ProfessionalDetails, isProfessionalDetail } from '../ExperienceData';

import '../styles/ExperienceList.css';
import '../fonts/Proxima Nova/stylesheet.css';

export function ExperienceList(props: { title: string, data: ProfessionalDetails[] |  EducationalDetails[] }) {
    return (
        <>
            <h1 id='workExperienceLbl'>{props.title}</h1>
            <ul id='workExperienceColumn'>
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
