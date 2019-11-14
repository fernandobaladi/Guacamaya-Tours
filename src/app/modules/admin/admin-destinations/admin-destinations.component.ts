import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatesService } from 'src/app/services/states/states.service';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { DestinationsCategoryService } from 'src/app/services/destinations/destinations-category.service';
import { DestinationsService } from 'src/app/services/destinations/destinations.service';

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
  destinations;

  categories;

  states;

  cities;

  activities = [ ] ;
  services = [ ];
  loading = false;



  constructor(private sideBarSV: SidebarService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private statesService: StatesService,
              private citiesService: CitiesService,
              private categoriesService: DestinationsCategoryService,
              private destinationsService: DestinationsService
    ) { }

  ngOnInit() {
    this.destinationsService.getAll().subscribe((destinationsSnapshot) =>{
      this.destinations = [];
      destinationsSnapshot.forEach((e: any) => {
        this.destinations.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });
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
    this.categoriesService.getAllCategories().subscribe((categoriesSnapshot) => {
      this.categories = [];
      categoriesSnapshot.forEach((e: any) => {
        this.categories.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });
    this.createDestinationForm();
  }

  addActivity() {
    this.activities.push(this.destinationForm.controls.activity.value);
    this.destinationForm.controls.activity.setValue('');
  }

  addService() {
    this.services.push(this.destinationForm.controls.service.value);
    this.destinationForm.controls.service.setValue('');
  }


  createDestinationForm() {
    this.destinationForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', ],
      state: ['', ],
      city: ['', ],
      lat: [, Validators.required],
      lon: [, Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      activity: ['', ],
      service: ['', ],
      image: ['', ],
      status: ['', ],
      id: ['']
    });
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

  openModal(destination?){
    if (destination) {
      this.destinationForm.controls.name.setValue(destination.data.name);
      this.destinationForm.controls.status.setValue(destination.data.status);
      // this.destinationForm.controls.state.setValue(destination.data.state);
      // this.destinationForm.controls.category.setValue(destination.data.category);
      // this.destinationForm.controls.city.setValue(destination.data.city);
      this.destinationForm.controls.lat.setValue(destination.data.lat);
      this.destinationForm.controls.lon.setValue(destination.data.lon);
      this.destinationForm.controls.description.setValue(destination.data.description);
      this.destinationForm.controls.address.setValue(destination.data.address);
      // this.destinationForm.controls.activity.setValue(destination.data.activity);
      // this.destinationForm.controls.image.setValue(destination.data.image);
      this.destinationForm.controls.id.setValue(destination.id);
    } else {
      this.destinationForm.reset();
    }
    this.modalStatus.next(!this.modalStatus.value);
  }

  saveChanges() {
    this.loading = true;

    if (!this.destinationForm.controls.status.value) {
      this.destinationForm.controls.status.setValue(false);
    }

    let data = {
      name: this.destinationForm.controls.name.value,
      status: this.destinationForm.controls.status.value,
      lat: parseInt(this.destinationForm.controls.lat.value, 10),
      lon: parseInt(this.destinationForm.controls.lon.value, 10),
      description: this.destinationForm.controls.description.value,
      address: this.destinationForm.controls.address.value,
      // state: this.destinationForm.controls.state.value
    };

    if (!this.destinationForm.controls.id.value) {

      this.destinationsService.create(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente el estado!');
          this.destinationForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });

    } else {

      this.destinationsService.updateDestination(this.destinationForm.controls.id.value, data)
        .then(res => {
          alert('¡Se ha editado exitosamente el estado!');
          this.destinationForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });
    }
    this.modalStatus.next(false);
  }

}