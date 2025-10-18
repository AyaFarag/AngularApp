import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponant } from './profile-componant';

describe('ProfileComponant', () => {
  let component: ProfileComponant;
  let fixture: ComponentFixture<ProfileComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
