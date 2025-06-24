import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfTimeline } from './prof-timeline';

describe('ProfTimeline', () => {
  let component: ProfTimeline;
  let fixture: ComponentFixture<ProfTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfTimeline],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfTimeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
