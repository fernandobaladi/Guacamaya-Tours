import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationBuilderStep5Component } from './vacation-builder-step5.component';

describe('VacationBuilderStep5Component', () => {
  let component: VacationBuilderStep5Component;
  let fixture: ComponentFixture<VacationBuilderStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationBuilderStep5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationBuilderStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
