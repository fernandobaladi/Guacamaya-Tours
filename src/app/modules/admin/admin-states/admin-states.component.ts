import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-states',
  templateUrl: './admin-states.component.html',
  styleUrls: ['./admin-states.component.scss']
})
export class AdminStatesComponent implements OnInit {
  stateSort = '';
  modalStatus = new BehaviorSubject (false);
  public stateForm: FormGroup;

  constructor(private sideBarSV: SidebarService, private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.createStateForm();
  }

  createStateForm() {
    this.stateForm = this.fb.group({
      name: ['', Validators.required],
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
  }

  saveChanges(){
    // sendData();
    this.modalStatus.next(false);
  }

}
