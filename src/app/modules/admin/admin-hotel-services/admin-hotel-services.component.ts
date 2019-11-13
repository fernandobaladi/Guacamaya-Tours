import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-hotel-services',
  templateUrl: './admin-hotel-services.component.html',
  styleUrls: ['./admin-hotel-services.component.scss']
})
export class AdminHotelServicesComponent implements OnInit {

  hotelServiceSort = '';
  modalStatus = new BehaviorSubject (false);
  public hotelServiceForm: FormGroup;

  constructor(private sideBarSV: SidebarService, private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createHotelServiceForm();
  }

  createHotelServiceForm() {
    this.hotelServiceForm = this.fb.group({
      name: ['', Validators.required],
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
    this.createHotelServiceForm();
  }

  modifyInfo(){
    // getData();
    this.hotelServiceForm = this.fb.group({
      name: ['hola', Validators.required],
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