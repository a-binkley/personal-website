import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsTab } from './socials-tab';

describe('SocialsTab', () => {
  let component: SocialsTab;
  let fixture: ComponentFixture<SocialsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
