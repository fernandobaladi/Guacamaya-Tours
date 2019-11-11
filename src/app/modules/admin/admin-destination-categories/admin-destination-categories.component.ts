import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-destination-categories',
  templateUrl: './admin-destination-categories.component.html',
  styleUrls: ['./admin-destination-categories.component.scss']
})
export class AdminDestinationCategoriesComponent implements OnInit {

  categorySort = '';
  modalStatus = new BehaviorSubject (false);
  public categoryForm: FormGroup;

  constructor(private sideBarSV: SidebarService, private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createCategoryForm();
  }

  createCategoryForm() {
    this.categoryForm = this.fb.group({
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
    this.createCategoryForm();
  }

  modifyInfo(){
    // getData();
    this.categoryForm = this.fb.group({
      name: ['hola', Validators.required],
      enabled: ['true', ],
      image: ['', Validators.required]
    })
    this.modalStatus.next(!this.modalStatus.value);
  }

  saveChanges(){
    // sendData();
    this.modalStatus.next(false);
  }

}