import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGradient } from './page-gradient';

describe('PageGradient', () => {
  let component: PageGradient;
  let fixture: ComponentFixture<PageGradient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGradient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGradient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
