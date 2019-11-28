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

  uploaderRes(res) {
    this.hotelServiceForm.controls.imageURL.setValue(res.imageURL);
    this.hotelServiceForm.controls.imagePath.setValue(res.imagePath);
  }

  createHotelServiceForm() {
    this.hotelServiceForm = this.fb.group({
      name: ['', Validators.required],
      status: ['',],
      imageURL: ['',Validators.required],
      imagePath: ['',],
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
      this.hotelServiceForm.controls.imageURL.setValue(facility.data.imageURL);
      this.hotelServiceForm.controls.imagePath.setValue(facility.data.imagePath);
      this.hotelServiceForm.controls.id.setValue(facility.id);
    } else {
      this.hotelServiceForm.reset();
    }
    this.modalStatus.next(!this.modalStatus.value);
  }


  public inputTextfield: string;
  public apareceBorde: boolean = false;
  public colorBorde: boolean = false;

  saveChanges() {

    var empty = /^$/;
    var regex = /^[a-zA-Z]+$/;
    if (!regex.test(this.inputTextfield) && !empty.test(this.inputTextfield)) {

      //console.log("Mega ahre");
      this.apareceBorde = true;
      this.colorBorde = true;

    } else {

        this.loading = true;

        if(!this.hotelServiceForm.controls.status.value){
          this.hotelServiceForm.controls.status.setValue(false);
        }
        let data = {
          name: this.hotelServiceForm.controls.name.value,
          status: this.hotelServiceForm.controls.status.value,
          imagePath: this.hotelServiceForm.controls.imagePath.value,
          imageURL: this.hotelServiceForm.controls.imageURL.value,
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

}