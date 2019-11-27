import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationBuilderStep4Component } from './vacation-builder-step4.component';

describe('VacationBuilderStep4Component', () => {
  let component: VacationBuilderStep4Component;
  let fixture: ComponentFixture<VacationBuilderStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationBuilderStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationBuilderStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
