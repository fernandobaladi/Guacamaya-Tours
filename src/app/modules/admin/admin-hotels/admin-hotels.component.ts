import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatesService } from 'src/app/services/states/states.service';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { HotelFacilitiesService } from 'src/app/services/hotels/hotel-facilities.service';
import { RoomsFacilitiesService } from 'src/app/services/hotels/rooms/rooms-facilities.service';
import { HotelsService } from 'src/app/services/hotels/hotels.service';
import { RoomsService } from 'src/app/services/hotels/rooms/rooms.service';


export interface state {
  value: string;
  viewValue: string;
}

export interface city {
  value: string;
  viewValue: string;
}

export interface service {
  value: string;
  viewValue: string;
  active: boolean;
}

export interface facility {
  value: string;
  viewValue: string;
  active: boolean;
}
export interface image {
  img: string;
  selected?: boolean;
}

@Component({
  selector: 'app-admin-hotels',
  templateUrl: './admin-hotels.component.html',
  styleUrls: ['./admin-hotels.component.scss']
})
export class AdminHotelsComponent implements OnInit {

  optionSort = '';
  modalStatus = new BehaviorSubject(false);
  modalSecondaryStatus = new BehaviorSubject(false);
  states;
  cities;
  hotels;
  rooms;
  facilitiesHotel;
  facilitiesHabs;
  loading = false;
  public hotelForm: FormGroup;
  public habForm: FormGroup;
  stateSelectedByUser;
  citySelectedByUser;
  public stateForm: FormGroup;
  public cityForm: FormGroup;
  public facilitiesHotelForm: FormGroup;
  public facilitiesHabsForm: FormGroup;

  // states: state[] = [
  //   { value: 'por-0', viewValue: 'Portuguesa' },
  //   { value: 'car-1', viewValue: 'Carabobo' },
  //   { value: 'zulia-1', viewValue: 'Zulia' },
  //   { value: 'lara-1', viewValue: 'Lara' },
  // ];

  // cities: city[] = [
  //   { value: 'ccs-0', viewValue: 'Caracas' },
  //   { value: 'val-1', viewValue: 'Valencia' },
  //   { value: 'zulia-1', viewValue: 'Zulia' },
  //   { value: 'lara-1', viewValue: 'Lara' },
  // ];

  // services: service[] = [
  //   { value: 'airC-0', viewValue: 'Aire acondicionado', active: false },
  //   { value: 'pis-1', viewValue: 'Piscina', active: false },
  //   { value: 'spa-2', viewValue: 'Spa', active: false },
  //   { value: 'parque-3', viewValue: 'Parque', active: false },
  // ];

  // facilities: facility[] = [
  //   { value: 'airC-0', viewValue: 'Aire acondicionado', active: false },
  //   { value: 'jac-1', viewValue: 'Jacuzzi', active: false },
  //   { value: 'co-2', viewValue: 'Cocina', active: false },
  //   { value: 'bal-3', viewValue: 'Balcón', active: false },
  // ];

  // services=[  ]
  imagesAdditionals: image [];
  habImagesAdditionals = [];
  fullDayAvailable = false;



  constructor(private sideBarSV: SidebarService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private statesService: StatesService,
              private citiesService: CitiesService,
              private facilitiesHotelService: HotelFacilitiesService,
              private facilitiesHabsService: RoomsFacilitiesService,
              private hotelService: HotelsService,
              private roomsService: RoomsService) { }

  ngOnInit() {
    this.createHotelForm();
    this.createHabForm();
    console.log("epa");
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

    this.facilitiesHabsService.getAllFacilities().subscribe((facilitiesHabsSnapshot) => {
      this.facilitiesHabs = [];
      facilitiesHabsSnapshot.forEach((e: any) => {
        this.facilitiesHabs.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });

    this.facilitiesHotelService.getAll().subscribe((facilitiesHotelSnapshot) => {
      this.facilitiesHotel = [];
      facilitiesHotelSnapshot.forEach((e: any) => {
        this.facilitiesHotel.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });

    this.hotelService.getAll().subscribe((hotelSnapshot) => {
      this.hotels = [];
      hotelSnapshot.forEach((e: any) => {
        this.hotels.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });

    this.roomsService.getAllRooms().subscribe((roomsSnapshot) => {
      this.rooms = [];
      roomsSnapshot.forEach((e: any) => {
        this.rooms.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });

    this.hotelForm.controls.fullDay.valueChanges.subscribe(e => {
      this.fullDayAvailable = e;
    });


  }

  addImage() {
    //aca hay q arreglar esto xq hay que montar la imagen a firestore, se guarda alla y
    // se devuelve el link q el te da que es lo que muestra la imagen que es lo que se va a mandar al array como tal,
    // es decir eso iria justo aca antes del .push y el push tambien habria q cambiarle lo q esta dentro del ()
    // this.imagesAdditionals.push(this.hotelForm.controls.imageAdditional.value);
    // this.hotelForm.controls.imageAdditional.setValue('');
  }

  deleteImage(pos) {
    this.imagesAdditionals.splice(pos,1)
  }

  // toggleSelectedImage(pos){
  //   this.imagesAdditionals[pos].selected = !this.imagesAdditionals[pos].selected;
  // }
  
  
  createHotelForm() {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      stars: ['', Validators.required],
      status: [''],
      state: {
        name: [''],
        status: [''],
        id: ['']
        // image:['']
      },
      city: {
        name: [''],
        status: [''],
        id: [''],
        state: {
          name: [''],
          status: [''],
          id: ['']
          // image:['']
        }
      },
      lat: ['', Validators.required],
      lon: ['', Validators.required],
      address: ['', Validators.required],
      fullDay: [''],
      fullDayPrice: [{ value: '', disabled: true }],
      id: [''],
      mainImageURL: [''],
      mainImagePath: ['']
      // service: ['',Validators.required],
      // imagePricipal: ['', Validators.required],
      // imageAdditional: ['',],
    });
    // this.imagesAdditionals = [];
    // this.facilitiesHotel.map(e => { e.active = false });
  }


  fullDayChange() {
    if (!this.hotelForm.controls.fullDay.value) {
      this.hotelForm.controls.fullDayPrice.disable();
    } else {
      this.hotelForm.controls.fullDayPrice.enable();
    }
  }

  uploaderRes(res) {
    this.hotelForm.controls.imageURL.setValue(res.imageURL);
    this.hotelForm.controls.imagePath.setValue(res.imagePath);
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

  createFacilitiesHotel(){
    this.facilitiesHotelForm = this.fb.group({
      data: [''],
      id: ['']
    });
  }
  createFacilitiesRoom(){
    this.facilitiesHabsForm = this.fb.group({
      data: [''],
      id: ['']
    });
  }

  toggleService(service) {
    service.active = !service.active;
  }

  toggleSideBar() {
    this.sideBarSV.toggleStatus();
  }


  changeModalStatus(val) {
    this.modalStatus.next(val)
  }

  toggleModalStatus() {
    this.modalStatus.next(!this.modalStatus.value);
    this.createHotelForm();
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

  // modifyInfo() {
  //   // getData();
  //   this.hotelForm = this.fb.group({
  //     name: ['Sunsol', Validators.required],
  //     stars: ['5', Validators.required],
  //     enabled: ['true',],
  //     state: ['nueva esparta', Validators.required],
  //     city: ['margarita', Validators.required],
  //     lat: ['22565', Validators.required],
  //     lon: ['265', Validators.required],
  //     address: ['dfssdffs', Validators.required],
  //     fullDay: ['true',],
  //     fullDayPrice: ['25000', Validators.required],
  //     // service: ['dfssdffs', Validators.required],
  //     imagePricipal: ['', Validators.required],

  //   })
  //   this.modalStatus.next(!this.modalStatus.value);
  // }

  openModal(hotel?) {
    if (hotel) {
      this.hotelForm.controls.id.setValue(hotel.id);
      this.hotelForm.controls.name.setValue(hotel.data.name);
      this.hotelForm.controls.stars.setValue(hotel.data.stars);
      this.hotelForm.controls.status.setValue(hotel.data.status);
      this.hotelForm.controls.lat.setValue(hotel.data.lat);
      this.hotelForm.controls.lon.setValue(hotel.data.lon);
      this.hotelForm.controls.address.setValue(hotel.data.address);
      this.hotelForm.controls.fullDay.setValue(hotel.data.fullDay);
      this.hotelForm.controls.fullDayPrice.setValue(hotel.data.fullDayPrice);
      this.hotelForm.controls.state.setValue(hotel.data.state.id);
      this.hotelForm.controls.city.setValue(hotel.data.city.id);
      this.hotelForm.controls.mainImagePath.setValue(hotel.data.mainImagePath);
      this.hotelForm.controls.mainImageURL.setValue(hotel.data.mainImageURL);
    } else {
      this.hotelForm.reset();
      this.hotelForm.controls.state.setValue('');
      this.hotelForm.controls.city.setValue('');
      this.hotelForm.controls.stars.setValue('');
    }
    this.modalStatus.next(!this.modalStatus.value);
  }
  saveChanges() {
    // sendData();
    this.loading = true;
    if (!this.hotelForm.controls.status.value) {
      this.hotelForm.controls.status.setValue(false);
    }
    if(!this.hotelForm.controls.fullDay.value){
      this.hotelForm.controls.fullDay.setValue(false);
      this.hotelForm.controls.fullDayPrice.setValue(0);
    }
    this.createCityForm();
    this.createStateForm();
    this.findCitySelected(this.hotelForm.controls.city.value);
    this.findStateSelected(this.hotelForm.controls.state.value);
    let data = {
      name: this.hotelForm.controls.name.value,
      status: this.hotelForm.controls.status.value,
      stars: this.hotelForm.controls.stars.value,
      lat: parseInt(this.hotelForm.controls.lat.value, 10),
      lon: parseInt(this.hotelForm.controls.lon.value, 10),
      address: this.hotelForm.controls.address.value,
      fullDay: this.hotelForm.controls.fullDay.value,
      fullDayPrice: this.hotelForm.controls.fullDayPrice.value,
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
      mainImageURL: this.hotelForm.controls.mainImagePath.value,
      mainImagePath: this.hotelForm.controls.mainImageURL.value
    };
    
    if (!this.hotelForm.controls.id.value) {

      this.hotelService.create(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente el hotel!');
          this.hotelForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });

    } else {

      this.hotelService.updateHotel(this.hotelForm.controls.id.value, data)
        .then(res => {
          alert('¡Se ha editado exitosamente el hotel!');
          this.hotelForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });
    }
    this.modalStatus.next(false);
  }


  //Funciones relacionadas con las habitaciones

  createHabForm() {
    this.habForm = this.fb.group({
      habName: ['', Validators.required],
      habCapacity: ['', Validators.required],
      habEnabled: ['', Validators.required],
      habView: ['',],
      habPrice: ['', Validators.required],
      habQuantity: ['', Validators.required],
      imagePricipal: ['', Validators.required],
      imageAdditional: [''],
    });
    this.habImagesAdditionals = [];
    //this.facilitiesHabs.map(e => { e.active = false });
  }

  toggleModalSecondaryStatus() {
    this.modalSecondaryStatus.next(!this.modalSecondaryStatus.value);
    this.createHabForm();
  }

  openModal2(habs?) {
    if (habs) {

    } else {

    }
    this.modalSecondaryStatus.next(!this.modalSecondaryStatus.value);
  }
  // modifyInfoHab() {
  //   // getData();
  //   this.habForm = this.fb.group({
  //     habName: ['sgg', Validators.required],
  //     habCapacity: ['sgs', Validators.required],
  //     habEnabled: ['true', Validators.required],
  //     habView: ['vzvx',],
  //     habPrice: ['15312', Validators.required],
  //     habQuantity: ['fz', Validators.required],
  //     imagePricipal: ['fz', Validators.required],
  //     imageAdditional: ['zff',],

  //   })
  //   this.modalSecondaryStatus.next(!this.modalSecondaryStatus.value);
  // }

  saveHabChanges() {
    // sendData();
    // console.log(this.services);

    this.modalSecondaryStatus.next(false);
  }

  addHabImage() {
    //aca hay q arreglar esto xq hay que montar la imagen a firestore, se guarda alla y
    // se devuelve el link q el te da que es lo que muestra la imagen que es lo que se va a mandar al array como tal,
    // es decir eso iria justo aca antes del .push y el push tambien habria q cambiarle lo q esta dentro del ()
    this.habImagesAdditionals.push(this.habForm.controls.imageAdditional.value);
    this.habForm.controls.imageAdditional.setValue('');
  }

  deleteHabImage(pos){
    this.habImagesAdditionals.splice(pos,1)
  }

  toggleFacility(facility) {
    facility.active = !facility.active;
  }


}