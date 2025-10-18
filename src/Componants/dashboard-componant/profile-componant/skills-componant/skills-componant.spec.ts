import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponant } from './skills-componant';

describe('SkillsComponant', () => {
  let component: SkillsComponant;
  let fixture: ComponentFixture<SkillsComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
