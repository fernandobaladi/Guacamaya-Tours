import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationBuilderNavigationComponent } from './vacation-builder-navigation.component';

describe('VacationBuilderNavigationComponent', () => {
  let component: VacationBuilderNavigationComponent;
  let fixture: ComponentFixture<VacationBuilderNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationBuilderNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationBuilderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
