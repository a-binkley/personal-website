type GeneralDetails = {
    city: string;
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
        fromDate: 'May 2022',
        toDate: 'Present',
        summary: `Software and data engineering work modernizing data integrations in AWS, managing team automation projects and CI/CD \
systems migrations, and creating and updating ERP reports through Oracle Cloud IaaS`
    }, {
        employer: 'eBay Inc.',
        city: 'Remote (US)',
        fromDate: 'May 2021',
        toDate: 'Aug 2021',
        summary: `Interned as a software engineer for the eBay Storefront team to research, develop, and integrate a full-stack live \
streaming service POC application using Node.js, RESTful APIs, and a custom Java/Spring Boot backend`
    }, {
        employer: 'The University of Pennsylvania',
        city: 'Philadelphia, PA',
        fromDate: 'Sep 2020',
        toDate: 'May 2022',
        summary: `Served as a teaching assistant by co-leading weekly discussion groups, hosting weekly office hours, and guiding subject agendas \
for graduate-level courses on data structures, algorithms, and systems programming`
    }
];

export const schoolExperience: EducationalDetails[] = [
    {
        school: 'The University of Pennsylvania',
        city: 'Philadelphia, PA',
        fromDate: 'Sep 2020',
        toDate: 'May 2022',
        summary: `Master's Degree in Computer & Information Technology. Relevant coursework in \
data analytics, databases, artificial intelligence, data structures, algorithms, advanced mathematics, and computer systems`
    }, {
        school: 'The Curtis Institute of Music',
        city: 'Philadelphia, PA',
        fromDate: 'Sep 2016',
        toDate: 'May 2020',
        summary: `Bachelor's Degree in Music Performance with a focus in Pipe Organ studies, \
Certificate in Harpsichord Performance. Additional coursework in computer science and psychology`
    }
];
