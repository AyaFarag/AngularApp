import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponant } from './about-componant';

describe('AboutComponant', () => {
  let component: AboutComponant;
  let fixture: ComponentFixture<AboutComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
