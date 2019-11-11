import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-habs-facilities',
  templateUrl: './admin-habs-facilities.component.html',
  styleUrls: ['./admin-habs-facilities.component.scss']
})
export class AdminHabsFacilitiesComponent implements OnInit {

  
  facilitySort = '';
  modalStatus = new BehaviorSubject (false);
  public facilityForm: FormGroup;

  constructor(private sideBarSV: SidebarService, private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createFacilityForm();
  }

  createFacilityForm() {
    this.facilityForm = this.fb.group({
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
    this.createFacilityForm();
  }

  modifyInfo(){
    // getData();
    this.facilityForm = this.fb.group({
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
