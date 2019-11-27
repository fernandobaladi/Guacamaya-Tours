import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationSideBarComponent } from './vacation-side-bar.component';

describe('VacationSideBarComponent', () => {
  let component: VacationSideBarComponent;
  let fixture: ComponentFixture<VacationSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
