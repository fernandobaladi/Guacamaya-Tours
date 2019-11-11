import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface state {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-cities',
  templateUrl: './admin-cities.component.html',
  styleUrls: ['./admin-cities.component.scss']
})

export class AdminCitiesComponent implements OnInit {
  citySort = '';
  stateSelect = '';
  modalStatus = new BehaviorSubject (false);
  public cityForm: FormGroup;

  states: state[] = [
    { value: 'por-0', viewValue: 'Portuguesa' },
    { value: 'zulia-1', viewValue: 'Zulia' },
  ];

  constructor(private sideBarSV: SidebarService, private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
 
    this.createCityForm();
  }

  createCityForm() {
    this.cityForm = this.fb.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
      enabled: ['', ],
      image: ['', Validators.required],
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
    this.createCityForm();
  }

  modifyInfo(){
    // getData();
    this.cityForm = this.fb.group({
      name: ['hola', Validators.required],
      state: ['por-0', Validators.required],
      enabled: ['true', ],
      image: ['', Validators.required],
    })
    this.modalStatus.next(!this.modalStatus.value);
  }

  saveChanges(){
    // sendData();
    this.modalStatus.next(false);
  }

}

