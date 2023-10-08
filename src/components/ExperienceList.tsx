import { EducationalDetails, ProfessionalDetails, isProfessionalDetail } from '../ExperienceData';

import '../styles/ExperienceList.css';
import '../fonts/Proxima Nova/stylesheet.css';

export function ExperienceList(props: { title: string, data: ProfessionalDetails[] |  EducationalDetails[] }) {
    return (
        <>
            <h1 id='workExperienceLbl'>{props.title}</h1>
            <ul id='workExperienceColumn'>
                {props.data.map((instance) => {
                    return (
                        <li className='experienceCellContainer'>
                            <div className='experienceLocationContainer'>
                                <h2 className='employerLbl'>{isProfessionalDetail(instance) ? instance.employer : instance.school}</h2>
                                <div className='experienceSepPipe' />
                                <h4 className='experienceDateLbl'>{`${instance.fromDate} - ${instance.toDate}`}</h4>
                                <h5 className='experienceCityLbl' style={{ color: '#7f7f7f' }}>{instance.city}</h5>
                            </div>
                            <p className='experienceSummaryLbl'>{instance.summary}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
