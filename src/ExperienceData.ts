type GeneralDetails = {
    city: string;
    role: string;
    summary: string;
    fromDate: string;
    toDate: string;
};

export type ProfessionalDetails = {
    employer: string;
} & GeneralDetails;

export type EducationalDetails = {
    school: string;
} & GeneralDetails;

export function isProfessionalDetail(x: object): x is ProfessionalDetails {
    return Object.keys(x).includes('employer');
}

export const workExperience: ProfessionalDetails[] = [
    {
        employer: 'The Vanguard Group',
        city: 'Malvern, PA',
        role: 'Software Engineer',
        fromDate: 'May 2022',
        toDate: 'Present',
        summary: `Modernizing data integrations in AWS, managing team automation projects and CI/CD \
systems migrations, and creating and updating ERP reports through Oracle Cloud IaaS`
    }, {
        employer: 'eBay Inc.',
        city: 'Remote (US)',
        role: 'Software Engineer Intern',
        fromDate: 'May 2021',
        toDate: 'Aug 2021',
        summary: `Researched, developed, and integrated a full-stack live streaming service POC \
application using Node.js, RESTful APIs, and a custom Java/Spring Boot backend`
    }, {
        employer: 'The University of Pennsylvania',
        city: 'Philadelphia, PA',
        role: 'Teaching Assistant',
        fromDate: 'Sep 2020',
        toDate: 'May 2022',
        summary: `Co-led weekly discussion groups, hosted weekly office hours, and guided subject agendas \
for graduate-level courses on data structures, algorithms, and systems programming`
    }
];

export const schoolExperience: EducationalDetails[] = [
    {
        school: 'The University of Pennsylvania',
        city: 'Philadelphia, PA',
        role: 'Master\'s Degree in Computer & Information Technology',
        fromDate: 'Sep 2020',
        toDate: 'May 2022',
        summary: `Relevant coursework in data analytics, databases, artificial intelligence, data structures, \
algorithms, advanced mathematics, and computer systems`
    }, {
        school: 'The Curtis Institute of Music',
        city: 'Philadelphia, PA',
        role: 'Bachelor\'s Degree in Music Performance',
        fromDate: 'Sep 2016',
        toDate: 'May 2020',
        summary: `Focus in Pipe Organ studies, Certificate in Harpsichord Performance. Additional coursework \
in computer science and psychology`
    }
];
