import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StatesService } from 'src/app/services/states/states.service';
import { CitiesService } from 'src/app/services/cities/cities.service';

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
  loading = false;
  states;
  cities;
  public stateForm: FormGroup;

  constructor(private sideBarSV: SidebarService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private statesService: StatesService,
              private citiesService: CitiesService
    ) { }
  ngOnInit() {

    this.createCityForm();
    this.statesService.getAllStates().subscribe((statesSnapshot) => {
      this.states = [];
      statesSnapshot.forEach((e: any) => {
        this.states.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });

    this.citiesService.getAllCities().subscribe((citiesSnapshot) => {
      this.cities = [];
      citiesSnapshot.forEach((e: any) => {
        this.cities.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });
  }

  createCityForm() {
    this.cityForm = this.fb.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
      status: ['', ],
      id: [''],
      image: [''],
    });
  }
  createStateForm() {
    this.stateForm = this.fb.group({
      data: [''],
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
    this.createCityForm();
  }

  openModal(city?) {
    if (city) {
      this.cityForm.controls.name.setValue(city.data.name);
      this.cityForm.controls.status.setValue(city.data.status);
      this.cityForm.controls.state.setValue(city.data.state);
      this.cityForm.controls.id.setValue(city.id);
    } else {
      this.cityForm.reset();
    }
    this.modalStatus.next(!this.modalStatus.value);
  }

  async saveChanges() {
    this.loading = true;

    if (!this.cityForm.controls.status.value) {
      this.cityForm.controls.status.setValue(false);
    }
    this.createStateForm();
    console.log(this.cityForm.controls.state.value);
    let sId;
    let stateSelected = this.statesService.getState(this.cityForm.controls.state.value).subscribe((stateSnapshot) => {
      sId = this.cityForm.controls.state.value;
      this.stateForm.setValue({
        id: this.cityForm.controls.state.value,
        data: stateSnapshot.payload.data()
      });
    });
    let info = this.stateForm.controls.data;
    console.log(info);

    const data = {
      name: this.cityForm.controls.name.value,
      status: this.cityForm.controls.status.value,
      state: stateSelected};

    if (!this.cityForm.controls.id.value) {

      this.citiesService.createCity(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente el estado!');
          this.cityForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });

    } else {

      this.citiesService.updateCity(this.cityForm.controls.id.value, data)
        .then(res => {
          alert('¡Se ha editado exitosamente el estado!');
          this.cityForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });
    }
    this.modalStatus.next(false);
  }

}

