import { schoolExperience, workExperience } from '../ExperienceData';
import { ExperienceList } from '.';

import '../styles/Experience.css';
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
