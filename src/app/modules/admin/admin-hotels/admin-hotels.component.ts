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
import { HabsService } from 'src/app/services/hotels/rooms/habs.service';
import { element } from 'protractor';


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
  habs;
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
  facilitiesHotelAux = [];
  facilitiesHabsAux = [];
  habsInfo = [];
  roomName;
  roomId;
  imagesAdditionals = [];
  imagesAdditionalsHabs = [];
  fullDayAvailable = false;
  indexHelper: number;
  loading2 = false;
  hotelSelectedHabId;

  constructor(private sideBarSV: SidebarService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private statesService: StatesService,
              private citiesService: CitiesService,
              private facilitiesHotelService: HotelFacilitiesService,
              private facilitiesHabsService: RoomsFacilitiesService,
              private hotelService: HotelsService,
              private roomsService: RoomsService,
              private habsService: HabsService) { }

  ngOnInit() {
    this.createHotelForm();
    this.createHabForm();
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

    this.habsService.getAll().subscribe((habsSnapshot) => {
      this.habs = [];
      habsSnapshot.forEach((e: any) => {
        this.habs.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
        console.log(this.habs);
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
    // aca hay q arreglar esto xq hay que montar la imagen a firestore, se guarda alla y
    // se devuelve el link q el te da que es lo que muestra la imagen que es lo que se va a mandar al array como tal,
    // es decir eso iria justo aca antes del .push y el push tambien habria q cambiarle lo q esta dentro del ()
    this.imagesAdditionals.push({
      imageAdditionalURL: this.hotelForm.controls.imageAdditionalURL.value,
      imageAdditionalPath: this.hotelForm.controls.imageAdditionalPath.value
    });
    this.hotelForm.controls.imageAdditionalURL.setValue('');
    this.hotelForm.controls.imageAdditionalPath.setValue('');
    console.log(this.imagesAdditionals);
  }
  deleteImage(pos) {
    this.imagesAdditionals.splice(pos, 1);
    console.log(this.imagesAdditionals);

  }

  createHotelForm() {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      stars: ['', Validators.required],
      status: [''],
      state: {
        name: [''],
        status: [''],
        id: ['']
      },
      city: {
        name: [''],
        status: [''],
        id: [''],
        state: {
          name: [''],
          status: [''],
          id: ['']
        }
      },
      lat: ['', Validators.required],
      lon: ['', Validators.required],
      address: ['', Validators.required],
      fullDay: [''],
      fullDayPrice: [{ value: '', disabled: true }],
      id: [''],
      mainImageURL: [''],
      mainImagePath: [''],
      facilitiesHotel: [''],
      imageAdditionalPath: [''],
      imageAdditionalURL: [''],
      habsInfo: ['']
    });
  }


  fullDayChange() {
    if (!this.hotelForm.controls.fullDay.value) {
      this.hotelForm.controls.fullDayPrice.disable();
    } else {
      this.hotelForm.controls.fullDayPrice.enable();
    }
  }

  uploaderRes(res) {
    this.hotelForm.controls.mainImageURL.setValue(res.imageURL);
    this.hotelForm.controls.mainImagePath.setValue(res.imagePath);
  }

  createStateForm() {
    this.stateForm = this.fb.group({
      data: [''],
      id: ['']
    });
  }

  createCityForm() {
    this.cityForm = this.fb.group({
      data: [''],
      id: ['']
    });
  }

  createFacilitiesHotel() {
    this.facilitiesHotelForm = this.fb.group({
      data: [''],
      id: ['']
    });
  }
  createFacilitiesRoom() {
    this.facilitiesHabsForm = this.fb.group({
      data: [''],
      id: ['']
    });
  }

  toggleService(service) {
    service.active = !service.active;
    if (service.active) {
      this.facilitiesHotelAux.push({
        facilityName: service.data.name,
        facilityImageURL: service.data.imageURL
      });

    } else {
      var counter: number;
      counter = 0;
      this.facilitiesHotelAux.map(e => {
        if (e.facilityName === service.data.name) {
          this.indexHelper = counter;
        }
        counter = counter + 1;
      });
      this.facilitiesHotelAux.splice(this.indexHelper, 1);
    }
    console.log(this.facilitiesHotelAux);

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
  findLastHab(name){
    this.habs.forEach(async element => {
      if (name === element.name) {
        this.roomId = await element.id;
        console.log(this.roomId);
      }
      console.log(element);
      this.roomId = element.id;
      console.log(this.roomId);

    });
  }
  openModal(hotel?) {
    this.imagesAdditionals = [];
    this.facilitiesHotelAux = [];
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
      this.imagesAdditionals = hotel.data.imagesAdditionals;
      this.facilitiesHotelAux = hotel.data.facilitiesHotel;
      this.hotelSelectedHabId = hotel.data.habsInfo.habId;
    } else {
      this.hotelForm.reset();
      this.hotelForm.controls.state.setValue('');
      this.hotelForm.controls.city.setValue('');
      this.hotelForm.controls.stars.setValue('');
      this.hotelSelectedHabId = null;
    }
    this.modalStatus.next(!this.modalStatus.value);
  }
  async saveChanges() {
    // sendData();
    this.findLastHab(this.roomName);
    this.habsInfo = [{ habId: await this.roomId, habName: await this.roomName}];
    this.loading = true;
    if (!this.hotelForm.controls.status.value) {
      this.hotelForm.controls.status.setValue(false);
    }
    if (!this.hotelForm.controls.fullDay.value) {
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
      mainImagePath: this.hotelForm.controls.mainImageURL.value,
      imagesAdditionals: this.imagesAdditionals,
      facilitiesHotel: this.facilitiesHotelAux,
      hasbInfo: this.habsInfo

    };
    console.log(data);
    if (!this.hotelForm.controls.id.value) {

      this.hotelService.create(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente el hotel!');
          this.hotelForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
          console.log(err);
          
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


  toggleModalSecondaryStatus() {
    this.modalSecondaryStatus.next(!this.modalSecondaryStatus.value);
    this.createHabForm();
  }


  createHabForm() {
    this.habForm = this.fb.group({
      habName: [''],
      habCapacity: [''],
      habStatus: [''],
      habView: [''],
      habPrice: [''],
      imagePrincipalURL: [''],
      imagePrincipalPath: [''],
      imageAdditionalPath: [''],
      imageAdditionalURL: [''],
      facilitiesHabs: [''],
      id: ['']
    });
    // this.habImagesAdditionals = [];
    // this.facilitiesHabs.map(e => { e.active = false });
  }
  openModal2(hab?) {
    this.imagesAdditionalsHabs = [];
    this.facilitiesHabsAux = [];
    if (hab) {
      this.habForm.controls.id.setValue(hab.id);
      this.habForm.controls.habName.setValue(hab.data.habName);
      this.habForm.controls.habCapacity.setValue(hab.data.habCapacity);
      this.habForm.controls.habStatus.setValue(hab.data.habStatus);
      this.habForm.controls.habView.setValue(hab.data.habView);
      this.habForm.controls.habPrice.setValue(hab.data.habPrice);
      this.habForm.controls.imagePrincipalPath.setValue(hab.data.imagePrincipalPath);
      this.habForm.controls.imagePrincipalURL.setValue(hab.data.imagePrincipalURL);
      this.imagesAdditionalsHabs = hab.data.imagesAdditionals;
      this.facilitiesHabsAux = hab.data.facilitiesHabs;
    } else {
      this.habForm.reset();
    }
    this.modalSecondaryStatus.next(!this.modalSecondaryStatus.value);
  }

  uploaderRes2(res) {
    this.hotelForm.controls.imageAdditionalURL.setValue(res.imageURL);
    this.hotelForm.controls.imageAdditionalPath.setValue(res.imagePath);
  }
  uploaderRes3(res) {
    this.habForm.controls.imagePrincipalURL.setValue(res.imageURL);
    this.habForm.controls.imagePrincipalPath.setValue(res.imagePath);
  }
  uploaderRes4(res) {
    this.habForm.controls.imageAdditionalURL.setValue(res.imageURL);
    this.habForm.controls.imageAdditionalPath.setValue(res.imagePath);
  }
  saveHabChanges() {
    this.loading2 = true;
    if (!this.hotelForm.controls.status.value) {
      this.hotelForm.controls.status.setValue(false);
    }

    let data = {
      habName: this.habForm.controls.habName.value,
      habCapacity: this.habForm.controls.habCapacity.value,
      habStatus: this.habForm.controls.habStatus.value,
      habView: this.habForm.controls.habView.value,
      habPrice: this.habForm.controls.habPrice.value,
      imagePrincipalPath: this.habForm.controls.imagePrincipalPath.value,
      imagePrincipalURL: this.habForm.controls.imagePrincipalURL.value,
      imagesAdditionals: this.imagesAdditionalsHabs,
      facilitiesHabs: this.facilitiesHabsAux
    };
    if (!this.habForm.controls.id.value) {

      this.habsService.createHab(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente la habitación!');
        }).catch(err => {
          this.loading2 = false;
          alert('Ha habido un error con la información introducida');
        });
    } else {

      this.habsService.updateHab(this.habForm.controls.id.value, data)
        .then(res => {
          alert('¡Se ha editado exitosamente la habitación!');
        }).catch(err => {
          this.loading2 = false;
          alert('Ha habido un error con la información introducida');
        });
    }
    this.roomName = this.habForm.controls.habName.value;
    this.habForm.reset();
    this.modalSecondaryStatus.next(false);
  }

  addHabImage() {
    // aca hay q arreglar esto xq hay que montar la imagen a firestore, se guarda alla y
    // se devuelve el link q el te da que es lo que muestra la imagen que es lo que se va a mandar al array como tal,
    // es decir eso iria justo aca antes del .push y el push tambien habria q cambiarle lo q esta dentro del ()
    this.imagesAdditionalsHabs.push({
      imageAdditionalURL: this.habForm.controls.imageAdditionalURL.value,
      imageAdditionalPath: this.habForm.controls.imageAdditionalPath.value
    });
    console.log(this.imagesAdditionalsHabs);
    this.habForm.controls.imageAdditionalURL.setValue('');
    this.habForm.controls.imageAdditionalPath.setValue('');
  }

  deleteHabImage(pos) {
    this.imagesAdditionalsHabs.splice(pos, 1);
  }

  toggleFacility(facility) {
    facility.active = !facility.active;
    if (facility.active) {
      this.facilitiesHabsAux.push({
        facilityName: facility.data.name,
        facilityImageURL: facility.data.imageURL
      });
    } else {
      var counter: number;
      counter = 0;
      this.facilitiesHabsAux.map(e => {
        if (e.facilityName === facility.data.name) {
          this.indexHelper = counter;
        }
        counter = counter + 1;
      });
      this.facilitiesHabsAux.splice(this.indexHelper, 1);
    }
    console.log(this.facilitiesHabsAux);
  }
}
