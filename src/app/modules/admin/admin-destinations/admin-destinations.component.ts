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

  optionSort = '';
  modalStatus = new BehaviorSubject (false);
  public destinationForm: FormGroup;
  destinations;
  categories;
  states;
  cities;
  activities = [ ] ;
  facilities = [ ];
  loading = false;
  downloadURL: string;
  public stateForm: FormGroup;
  public cityForm: FormGroup;
  public categoryForm: FormGroup;
  stateSelectedByUser;
  citySelectedByUser;
  categorySelectedByUser;

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
    this.createDestinationForm();

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
  }

  addActivity() {
    this.activities.push(this.destinationForm.controls.activity.value);
    this.destinationForm.controls.activity.setValue('');
  }

  addFacilities() {
    this.facilities.push(this.destinationForm.controls.facility.value);
    this.destinationForm.controls.facility.setValue('');
  }


  createDestinationForm() {
    this.destinationForm = this.fb.group({
      name: ['', Validators.required],
      category: {
        name: [''],
        status: [''],
        id: ['']
      },
      state: {
        name: [''],
        status: [''],
        id: [''],
         // image:['']
      },
      city: {
        name: [''],
        status: [''],
        id :[''],
        state: {
          name: [''],
          status: [''],
          id: [''],
         // image:['']
        }
      },
      lat: [, Validators.required],
      lon: [, Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      activity: [''],
      facility: [''],
      imageURL: ['', Validators.required],
      imagePath: [''],
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
    this.createDestinationForm();
  }

  createStateForm() {
    this.stateForm = this.fb.group({
      data: [''],
      id: ['']
    });
  }

  createCityForm(){
    this.cityForm = this.fb.group({
      data: [''],
      id: ['']
    });
  }

  createCategoryForm() {
    this.categoryForm = this.fb.group({
      data:[''],
      id: ['']
    });
  }

  findStateSelected(id) {
    this.states.forEach(element => {
      if (id === element.id) {
        this.stateSelectedByUser = element;
      }
    });
  }
  findCitySelected(id) {
    this.cities.forEach(element => {
      if (id === element.id) {
        this.citySelectedByUser = element;
      }
    });
  }

  findCategorySelected(id) {
    this.categories.forEach(element => {
      if (id === element.id) {
        this.categorySelectedByUser = element;
      }
    });
  }

  uploaderRes(res) {
    this.destinationForm.controls.imageURL.setValue(res.imageURL);
    this.destinationForm.controls.imagePath.setValue(res.imagePath);
  }

  openModal(destination?) {
    this.activities = [];
    if (destination) {
      this.destinationForm.controls.name.setValue(destination.data.name);
      this.destinationForm.controls.status.setValue(destination.data.status);
      this.destinationForm.controls.lat.setValue(destination.data.lat);
      this.destinationForm.controls.lon.setValue(destination.data.lon);
      this.destinationForm.controls.description.setValue(destination.data.description);
      this.destinationForm.controls.address.setValue(destination.data.address);
      this.destinationForm.controls.state.setValue(destination.data.state.id);
      this.destinationForm.controls.category.setValue(destination.data.category.id);
      this.destinationForm.controls.city.setValue(destination.data.city.id);
      this.destinationForm.controls.imageURL.setValue(destination.data.imageURL);
      this.destinationForm.controls.imagePath.setValue(destination.data.imagePath);
      this.activities = destination.data.activities;
      this.facilities = destination.data.facilities;
      this.destinationForm.controls.id.setValue(destination.id);
      
    } else {
      this.destinationForm.reset();
      this.destinationForm.controls.state.setValue('');
      this.destinationForm.controls.category.setValue('');
      this.destinationForm.controls.city.setValue('');
    }
    this.modalStatus.next(!this.modalStatus.value);
  }

  saveChanges() {
    this.loading = true;

    if (!this.destinationForm.controls.status.value) {
      this.destinationForm.controls.status.setValue(false);
    }
    this.createCategoryForm();
    this.createCityForm();
    this.createStateForm();
    this.findCategorySelected(this.destinationForm.controls.category.value);
    this.findCitySelected(this.destinationForm.controls.city.value);
    this.findStateSelected(this.destinationForm.controls.state.value);
    let data = {
      name: this.destinationForm.controls.name.value,
      status: this.destinationForm.controls.status.value,
      lat: parseInt(this.destinationForm.controls.lat.value, 10),
      lon: parseInt(this.destinationForm.controls.lon.value, 10),
      description: this.destinationForm.controls.description.value,
      address: this.destinationForm.controls.address.value,
      state: {
        name: this.stateSelectedByUser.data.name,
        status: this.stateSelectedByUser.data.status,
        id: this.stateSelectedByUser.id
      },
      city: {
        name: this.citySelectedByUser.data.name,
        status: this.citySelectedByUser.data.status,
        id: this.citySelectedByUser.id,
        state: {
          name: this.citySelectedByUser.data.state.name,
          status: this.citySelectedByUser.data.state.status,
          id: this.citySelectedByUser.data.state.id
        }
      },
      category: {
        name: this.categorySelectedByUser.data.name,
        status: this.categorySelectedByUser.data.status,
        id: this.categorySelectedByUser.id
      },
      activities: this.activities,
      facilities: this.facilities,
      imageURL: this.destinationForm.controls.imageURL.value,
      imagePath: this.destinationForm.controls.imagePath.value
    };
    console.log(data);
    if (!this.destinationForm.controls.id.value) {

      this.destinationsService.create(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente el destino!');
          this.destinationForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });

    } else {

      this.destinationsService.updateDestination(this.destinationForm.controls.id.value, data)
        .then(res => {
          alert('¡Se ha editado exitosamente el destino!');
          this.destinationForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });
    }
    this.modalStatus.next(false);
  }

}