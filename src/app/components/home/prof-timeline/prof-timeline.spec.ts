import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProfTimelineComponent } from './prof-timeline';

describe('ProfTimelineComponent', () => {
	let component: ProfTimelineComponent;
	let fixture: ComponentFixture<ProfTimelineComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProfTimelineComponent, RouterTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(ProfTimelineComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
