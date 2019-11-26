import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationBuilderComponent } from './vacation-builder.component';

describe('VacationBuilderComponent', () => {
  let component: VacationBuilderComponent;
  let fixture: ComponentFixture<VacationBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
