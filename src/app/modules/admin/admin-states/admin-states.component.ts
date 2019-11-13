import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StatesService } from 'src/app/services/states/states.service';

@Component({
  selector: 'app-admin-states',
  templateUrl: './admin-states.component.html',
  styleUrls: ['./admin-states.component.scss']
})
export class AdminStatesComponent implements OnInit {

  optionSort = '';
  modalStatus = new BehaviorSubject(false);
  loading = false;
  states;
  state;
  stateId;
  search: string;
  public stateForm: FormGroup;

  constructor(private sideBarSV: SidebarService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private statesService: StatesService
  ) { }

  ngOnInit() {
    this.createStateForm();
    this.statesService.getAllStates().subscribe((statesSnapshot) => {
      this.states = [];
      statesSnapshot.forEach((e: any) => {
        this.states.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
      console.log(this.states);
    });
  }

  createStateForm() {
    this.stateForm = this.fb.group({
      name: ['', Validators.required],
      status: [''],
      id: ['']
    });
  }


  toggleSideBar() {
    this.sideBarSV.toggleStatus();
  }


  changeModalStatus(val) {
    this.modalStatus.next(val);
  }

  toggleModalStatus() {
    this.modalStatus.next(!this.modalStatus.value);
  }
  openModal(state?) {
    if (state) {
      this.stateForm.controls.name.setValue(state.data.name);
      this.stateForm.controls.status.setValue(state.data.status);
      this.stateForm.controls.id.setValue(state.id);
    } else {
      this.stateForm.reset();
    }
    this.modalStatus.next(!this.modalStatus.value);
  }
  saveChanges() {
    this.loading = true;

    if(!this.stateForm.controls.status.value){
      this.stateForm.controls.status.setValue(false);
    }
    let data = {
      name: this.stateForm.controls.name.value,
      status: this.stateForm.controls.status.value
    };

    if (!this.stateForm.controls.id.value) {

      this.statesService.create(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente el estado!');
          this.stateForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });

    } else {

      this.statesService.updateState(this.stateForm.controls.id.value, data)
        .then(res => {
          alert('¡Se ha editado exitosamente el estado!');
          this.stateForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });
    }
    this.modalStatus.next(false);
  }

}
