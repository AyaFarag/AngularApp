import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponant } from './experience-componant';

describe('ExperienceComponant', () => {
  let component: ExperienceComponant;
  let fixture: ComponentFixture<ExperienceComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceComponant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
