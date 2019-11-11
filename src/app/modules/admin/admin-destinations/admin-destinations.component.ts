import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface category {
  value: string;
  viewValue: string;
}

export interface state {
  value: string;
  viewValue: string;
}

export interface city {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-admin-destinations',
  templateUrl: './admin-destinations.component.html',
  styleUrls: ['./admin-destinations.component.scss']
})
export class AdminDestinationsComponent implements OnInit {

  destinationSort = '';
  modalStatus = new BehaviorSubject (false);
  public destinationForm: FormGroup;

  categories: category[] = [
    { value: 'monta-0', viewValue: 'Montaña' },
    { value: 'costa-1', viewValue: 'Costa' },
    { value: 'selva-1', viewValue: 'Selva' },
    { value: 'llano-1', viewValue: 'Llano' },
  ];

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

  activities = [ ]
  services=[  ]



  constructor(private sideBarSV: SidebarService, private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createDestinationForm();
  }

  addActivity(){
    this.activities.push(this.destinationForm.controls.activity.value);
    this.destinationForm.controls.activity.setValue('');
  }

  addService(){
    this.services.push(this.destinationForm.controls.service.value);
    this.destinationForm.controls.service.setValue('');
  }


  createDestinationForm() {
    this.destinationForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      lat: ['', Validators.required],
      lon: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      activity: ['',],
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
    this.createDestinationForm();
  }

  modifyInfo(){
    // getData();
    this.destinationForm = this.fb.group({
      name: ['playa el agua', Validators.required],
      category: ['costa', Validators.required],
      state: ['nueva esparta', Validators.required],
      city: ['margarita', Validators.required],
      lat: ['22565', Validators.required],
      lon: ['265', Validators.required],
      description: ['affkdknvdfdnkds', Validators.required],
      address: ['dfssdffs', Validators.required],
      activity: ['dfssdffs', Validators.required],
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