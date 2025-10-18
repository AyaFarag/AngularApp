import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingComponant } from './setting-componant';

describe('SettingComponant', () => {
  let component: SettingComponant;
  let fixture: ComponentFixture<SettingComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingComponant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
