import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDestinationCategoriesComponent } from './admin-destination-categories.component';

describe('AdminDestinationCategoriesComponent', () => {
  let component: AdminDestinationCategoriesComponent;
  let fixture: ComponentFixture<AdminDestinationCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDestinationCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDestinationCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
