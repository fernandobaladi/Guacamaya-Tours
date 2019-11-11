import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHotelServicesComponent } from './admin-hotel-services.component';

describe('AdminHotelServicesComponent', () => {
  let component: AdminHotelServicesComponent;
  let fixture: ComponentFixture<AdminHotelServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHotelServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHotelServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
