import TestRenderer from 'react-test-renderer';
import { Experience, ExperienceList } from './Experience';
import { schoolExperience, workExperience } from '../../ExperienceData';

describe('Experience component rendering', () => {
	const testExpComponent = TestRenderer.create(<Experience />);

	it('should contain two ExperienceList child components with relevant titles', () => {
		const experienceListChildren = testExpComponent.root.findAllByType(ExperienceList);
		expect(experienceListChildren.length).toBe(2);
		expect(experienceListChildren[0].props.title).toBe('Work Experience');
		expect(experienceListChildren[1].props.title).toBe('Education History');
	});
});

describe('Experience List component rendering', () => {
	const testSchoolComponent = TestRenderer.create(<ExperienceList title='foo' data={schoolExperience} />);
	const testWorkComponent = TestRenderer.create(<ExperienceList title='bar' data={workExperience} />);

	it('should correctly title the experience list section with a header', () => {
		const sectionHeaderSchool = testSchoolComponent.root.findByProps({ className: 'experience-label' });
		const sectionHeaderWork = testWorkComponent.root.findByProps({ className: 'experience-label' });

		expect(sectionHeaderSchool.children).toStrictEqual([testSchoolComponent.root.props.title]);
		expect(sectionHeaderWork.children).toStrictEqual([testWorkComponent.root.props.title]);
	});

	it('should render all experience information in separate elements', () => {
		const sectionContentSchool = testSchoolComponent.root.findAllByProps({ className: 'experience-cell-container' });
		const sectionContentWork = testWorkComponent.root.findAllByProps({ className: 'experience-cell-container' });

		expect(sectionContentSchool.length).toBe(schoolExperience.length);
		expect(sectionContentWork.length).toBe(workExperience.length);
		sectionContentSchool.forEach((instance, index) => {
			expect(instance.findByProps({ className: 'employer-label' }).children).toStrictEqual([schoolExperience[index].school]);
			expect(instance.findByProps({ className: 'experience-date-label' }).children).toStrictEqual([
				`${schoolExperience[index].fromDate} - ${schoolExperience[index].toDate}`
			]);
			expect(instance.findByProps({ className: 'experience-city-label' }).children).toStrictEqual([
				schoolExperience[index].city
			]);
			expect(instance.findByProps({ className: 'experience-role-label' }).children).toStrictEqual([
				schoolExperience[index].role
			]);
		});
		sectionContentWork.forEach((instance, index) => {
			expect(instance.findByProps({ className: 'employer-label' }).children).toStrictEqual([workExperience[index].employer]);
			expect(instance.findByProps({ className: 'experience-date-label' }).children).toStrictEqual([
				`${workExperience[index].fromDate} - ${workExperience[index].toDate}`
			]);
			expect(instance.findByProps({ className: 'experience-city-label' }).children).toStrictEqual([
				workExperience[index].city
			]);
			expect(instance.findByProps({ className: 'experience-role-label' }).children).toStrictEqual([
				workExperience[index].role
			]);
			expect(instance.findByProps({ className: 'experience-summary-label' }).children).toStrictEqual([
				workExperience[index].summary
			]);
		});
	});
});
