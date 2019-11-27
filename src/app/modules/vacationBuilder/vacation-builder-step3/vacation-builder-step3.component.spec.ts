import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationBuilderStep3Component } from './vacation-builder-step3.component';

describe('VacationBuilderStep3Component', () => {
  let component: VacationBuilderStep3Component;
  let fixture: ComponentFixture<VacationBuilderStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationBuilderStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationBuilderStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
