import './styles/Experience.css';

type ExperienceDetails = {
    companyOrSchool: string;
    fromDate: string;
    toDate: string;
    description: string;
}

const workExperience: ExperienceDetails[] = [
    {
        companyOrSchool: 'The Vanguard Group',
        fromDate: 'May 2022',
        toDate: 'Present',
        description: 'TODO'
    }
]

export function Experience() {
    return (
        <div id='experienceContainer'>

        </div>
    );
};
