type GeneralDetails = {
	city: string;
	role: string;
	summary?: string;
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
		role: 'Software Engineer II',
		fromDate: 'Dec 2023',
		toDate: 'Present',
		summary: `Orchestrated a general ledger drilldown and transaction processing module responsible \
for almost $8 trillion of funds and assets. Architected and implemented an automated testing tool used \
department-wide with Cypress and GitHub Actions, eliminating over 100 hours of yearly manual work`
	},
	{
		employer: 'The Vanguard Group',
		city: 'Malvern, PA',
		role: 'Software Engineer I',
		fromDate: 'May 2022',
		toDate: 'Dec 2023',
		summary: `Modernized data integrations in AWS, managed team automation and CI/CD system projects, \
created and updated ERP reports through Oracle Cloud IaaS and SaaS applications. Co-created an internal NPM \
library facilitating networking, visibility, and authorization for cross-cloud workflow`
	},
	{
		employer: 'eBay Inc.',
		city: 'Remote (US)',
		role: 'Software Engineer Intern',
		fromDate: 'May 2021',
		toDate: 'Aug 2021',
		summary: `Researched, developed, and integrated a full-stack live streaming service POC application \
for the eBay Storefront using Node.js, RESTful APIs, and a Spring Boot backend`
	}
];

export const schoolExperience: EducationalDetails[] = [
	{
		school: 'The University of Pennsylvania',
		city: 'Philadelphia, PA',
		role: "Master's Degree in Computer & Information Technology",
		fromDate: 'Sep 2020',
		toDate: 'May 2022'
	},
	{
		school: 'The Curtis Institute of Music',
		city: 'Philadelphia, PA',
		role: "Bachelor's Degree in Music Performance",
		fromDate: 'Sep 2016',
		toDate: 'May 2020'
	}
];
