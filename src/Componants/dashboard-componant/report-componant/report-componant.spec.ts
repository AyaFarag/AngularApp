import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponant } from './report-componant';

describe('ReportComponant', () => {
  let component: ReportComponant;
  let fixture: ComponentFixture<ReportComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
