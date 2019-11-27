import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationBuilderStep2Component } from './vacation-builder-step2.component';

describe('VacationBuilderStep2Component', () => {
  let component: VacationBuilderStep2Component;
  let fixture: ComponentFixture<VacationBuilderStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationBuilderStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationBuilderStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
