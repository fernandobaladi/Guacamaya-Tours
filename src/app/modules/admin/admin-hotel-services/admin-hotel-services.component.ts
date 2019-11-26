import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HotelFacilitiesService } from 'src/app/services/hotels/hotel-facilities.service';

@Component({
  selector: 'app-admin-hotel-services',
  templateUrl: './admin-hotel-services.component.html',
  styleUrls: ['./admin-hotel-services.component.scss']
})
export class AdminHotelServicesComponent implements OnInit {

  optionSort = '';
  modalStatus = new BehaviorSubject(false);
  public hotelServiceForm: FormGroup;
  facilities;
  loading = false;

  constructor(private sideBarSV: SidebarService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private hotelsFacilities: HotelFacilitiesService
  ) { }

  ngOnInit() {
    this.createHotelServiceForm();
    this.hotelsFacilities.getAll().subscribe((facilitiesSnapshot) => {
      this.facilities = [];
      facilitiesSnapshot.forEach((e: any) => {
        this.facilities.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });
  }

  createHotelServiceForm() {
    this.hotelServiceForm = this.fb.group({
      name: ['', Validators.required],
      status: ['',],
      image: ['',],
      id: ['']

    });
  }

  toggleSideBar() {
    this.sideBarSV.toggleStatus();
  }


  changeModalStatus(val) {
    this.modalStatus.next(val)
  }

  toggleModalStatus() {
    this.modalStatus.next(!this.modalStatus.value);
    this.createHotelServiceForm();
  }

  openModal(facility?) {
    if (facility) {
      this.hotelServiceForm.controls.name.setValue(facility.data.name);
      this.hotelServiceForm.controls.status.setValue(facility.data.status);
      this.hotelServiceForm.controls.id.setValue(facility.id);
    } else {
      this.hotelServiceForm.reset();
    }
    this.modalStatus.next(!this.modalStatus.value);
  }

  saveChanges() {
    this.loading = true;

    if(!this.hotelServiceForm.controls.status.value){
      this.hotelServiceForm.controls.status.setValue(false);
    }
    let data = {
      name: this.hotelServiceForm.controls.name.value,
      status: this.hotelServiceForm.controls.status.value
    };

    if (!this.hotelServiceForm.controls.id.value) {

      this.hotelsFacilities.create(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente el estado!');
          this.hotelServiceForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });

    } else {

      this.hotelsFacilities.update(this.hotelServiceForm.controls.id.value, data)
        .then(res => {
          alert('¡Se ha editado exitosamente el estado!');
          this.hotelServiceForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });
    }
    this.modalStatus.next(false);
  
  }

}