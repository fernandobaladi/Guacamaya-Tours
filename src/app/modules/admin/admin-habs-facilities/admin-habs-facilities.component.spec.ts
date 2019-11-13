import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHabsFacilitiesComponent } from './admin-habs-facilities.component';

describe('AdminHabsFacilitiesComponent', () => {
  let component: AdminHabsFacilitiesComponent;
  let fixture: ComponentFixture<AdminHabsFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHabsFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHabsFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
