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
  optionSort = '';
  modalStatus = new BehaviorSubject (false);
  public cityForm: FormGroup;
  loading = false;
  states;
  cities;
  public stateForm: FormGroup;
  stateSelectedByUser;


  constructor(private sideBarSV: SidebarService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private statesService: StatesService,
              private citiesService: CitiesService
    ) {}
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
      state: {
        name:['', Validators.required],
        status: ['', Validators.required],
        id:['']
      },
      status: ['', ],
      id: [''],
      imageURL: ['', Validators.required],
      imagePath: ['']
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
  uploaderRes(res) {
    this.cityForm.controls.imageURL.setValue(res.imageURL);
    this.cityForm.controls.imagePath.setValue(res.imagePath);
  }

  changeModalStatus(val) {
    this.modalStatus.next(val);
  }

  toggleModalStatus() {
    this.modalStatus.next(!this.modalStatus.value);
    this.createCityForm();
    this.apareceBorde = false;
    this.colorBorde = false;
  }

  findStateSelected(id) {
    this.states.forEach(element => {
      if (id === element.id) {
        this.stateSelectedByUser = element;
      }
    });
  }
  openModal(city?) {
    if (city) {
      this.cityForm.controls.name.setValue(city.data.name);
      this.cityForm.controls.status.setValue(city.data.status);
      this.cityForm.controls.state.setValue(city.data.state.id);
      this.cityForm.controls.imagePath.setValue(city.data.imagePath);
      this.cityForm.controls.imageURL.setValue(city.data.imageURL);
      this.cityForm.controls.id.setValue(city.id);
    } else {
      this.cityForm.reset();
      this.cityForm.controls.state.setValue('');

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

        if (!this.cityForm.controls.status.value) {
          this.cityForm.controls.status.setValue(false);
        }
        this.createStateForm();
        console.log(this.cityForm.controls.state.value);
        this.findStateSelected(this.cityForm.controls.state.value);
        let info = this.stateSelectedByUser;
        console.log(info);

        const data = {
          name: this.cityForm.controls.name.value,
          status: this.cityForm.controls.status.value,
          imagePath: this.cityForm.controls.imagePath.value,
          imageURL: this.cityForm.controls.imageURL.value,
          state: {
            name: this.stateSelectedByUser.data.name,
            status: this.stateSelectedByUser.data.status,
            id: this.stateSelectedByUser.id
          }};

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

}

