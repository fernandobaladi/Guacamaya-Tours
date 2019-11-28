import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationBuilderHeaderComponent } from './vacation-builder-header.component';

describe('VacationBuilderHeaderComponent', () => {
  let component: VacationBuilderHeaderComponent;
  let fixture: ComponentFixture<VacationBuilderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationBuilderHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationBuilderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
