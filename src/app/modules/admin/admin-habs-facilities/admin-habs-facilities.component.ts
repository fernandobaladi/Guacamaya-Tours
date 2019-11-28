import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomsFacilitiesService } from 'src/app/services/hotels/rooms/rooms-facilities.service';

@Component({
  selector: 'app-admin-habs-facilities',
  templateUrl: './admin-habs-facilities.component.html',
  styleUrls: ['./admin-habs-facilities.component.scss']
})
export class AdminHabsFacilitiesComponent implements OnInit {

  
  optionSort = '';
  modalStatus = new BehaviorSubject (false);
  public facilityForm: FormGroup;
  facilities;
  loading = false;
  downloadURL: string;

  constructor(private sideBarSV: SidebarService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private habsFacilitiesService: RoomsFacilitiesService
    ) { }

  ngOnInit() {
    this.createFacilityForm();
    this.habsFacilitiesService.getAllFacilities().subscribe((facilitiesSnapshot) => {
      this.facilities = [];
      facilitiesSnapshot.forEach((e: any) => {
        this.facilities.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });
  }

  createFacilityForm() {
    this.facilityForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', ],
      imageURL: ['', Validators.required],
      imagePath: [''],
      id:['']
    });
  }

  uploaderRes(res) {
    this.facilityForm.controls.imageURL.setValue(res.imageURL);
    this.facilityForm.controls.imagePath.setValue(res.imagePath);
  }

  toggleSideBar(){
    this.sideBarSV.toggleStatus();
  }

  
  changeModalStatus(val) {
    this.modalStatus.next(val);
  }

  toggleModalStatus(){
    this.modalStatus.next(!this.modalStatus.value);
    this.createFacilityForm();
  }

  
  openModal(facility?) {
    if (facility) {
      this.facilityForm.controls.name.setValue(facility.data.name);
      this.facilityForm.controls.status.setValue(facility.data.status);
      this.facilityForm.controls.imageURL.setValue(facility.data.imageURL);
      this.facilityForm.controls.imagePath.setValue(facility.data.imagePath);
      this.facilityForm.controls.id.setValue(facility.id);
    } else {
      this.facilityForm.reset();
    }
    this.modalStatus.next(!this.modalStatus.value);
  }

  saveChanges(){
    this.loading = true;

    if(!this.facilityForm.controls.status.value){
      this.facilityForm.controls.status.setValue(false);
    }
    let data = {
      name: this.facilityForm.controls.name.value,
      status: this.facilityForm.controls.status.value,
      imagePath: this.facilityForm.controls.imagePath.value,
      imageURL: this.facilityForm.controls.imageURL.value
    };

    if (!this.facilityForm.controls.id.value) {

      this.habsFacilitiesService.createFacility(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente el estado!');
          this.facilityForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });

    } else {

      this.habsFacilitiesService.updateFacility(this.facilityForm.controls.id.value, data)
        .then(res => {
          alert('¡Se ha editado exitosamente el estado!');
          this.facilityForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });
    }
    this.modalStatus.next(false);
  
  }

}
