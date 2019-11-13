import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';


export interface state {
  value: string;
  viewValue: string;
}

export interface city {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-hotels',
  templateUrl: './admin-hotels.component.html',
  styleUrls: ['./admin-hotels.component.scss']
})
export class AdminHotelsComponent implements OnInit {

  hotelSort = '';
  modalStatus = new BehaviorSubject (false);
  public hotelForm: FormGroup;


  states: state[] = [
    { value: 'por-0', viewValue: 'Portuguesa' },
    { value: 'car-1', viewValue: 'Carabobo' },
    { value: 'zulia-1', viewValue: 'Zulia' },
    { value: 'lara-1', viewValue: 'Lara' },
  ];

  cities: city[] = [
    { value: 'ccs-0', viewValue: 'Caracas' },
    { value: 'val-1', viewValue: 'Valencia' },
    { value: 'zulia-1', viewValue: 'Zulia' },
    { value: 'lara-1', viewValue: 'Lara' },
  ];

  services=[  ]



  constructor(private sideBarSV: SidebarService, private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createHotelForm();
  }

  addService(){
    this.services.push(this.hotelForm.controls.service.value);
    this.hotelForm.controls.service.setValue('');
  }


  createHotelForm() {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      stars: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      lat: ['', Validators.required],
      lon: ['', Validators.required],
      address: ['', Validators.required],
      fullDay: ['',],
      price: ['', Validators.required],
      service: ['',],
      image: ['', Validators.required],
      enabled: ['', ],

    })
  }

  toggleSideBar(){
    this.sideBarSV.toggleStatus();
  }

  
  changeModalStatus(val){
    this.modalStatus.next(val)
  }

  toggleModalStatus(){
    this.modalStatus.next(!this.modalStatus.value);
    this.createHotelForm();
  }

  modifyInfo(){
    // getData();
    this.hotelForm = this.fb.group({
      name: ['Sunsol', Validators.required],
      stars: ['5', Validators.required],
      state: ['nueva esparta', Validators.required],
      city: ['margarita', Validators.required],
      lat: ['22565', Validators.required],
      lon: ['265', Validators.required],
      address: ['dfssdffs', Validators.required],
      fullDay: ['true',],
      price: ['25000', Validators.required],
      service: ['dfssdffs', Validators.required],
      image: ['', Validators.required],
      enabled: ['true', ],

    })
    this.modalStatus.next(!this.modalStatus.value);
  }

  saveChanges(){
    // sendData();
    this.modalStatus.next(false);
  }

}