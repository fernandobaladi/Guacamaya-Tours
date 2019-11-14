import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';


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

@Component({
  selector: 'app-admin-hotels',
  templateUrl: './admin-hotels.component.html',
  styleUrls: ['./admin-hotels.component.scss']
})
export class AdminHotelsComponent implements OnInit {

  hotelSort = '';
  modalStatus = new BehaviorSubject(false);
  modalSecondaryStatus = new BehaviorSubject(false);
  public hotelForm: FormGroup;
  public habForm: FormGroup;


  states: state[] = [
    { value: 'por-0', viewValue: 'Portuguesa' },
    { value: 'car-1', viewValue: 'Carabobo' },
    { value: 'zulia-1', viewValue: 'Zulia' },
    { value: 'lara-1', viewValue: 'Lara' },
  ];

  cities: city[] = [
    { value: 'ccs-0', viewValue: 'Caracas' },
    { value: 'val-1', viewValue: 'Valencia' },
    { value: 'zulia-1', viewValue: 'Zulia' },
    { value: 'lara-1', viewValue: 'Lara' },
  ];

  services: service[] = [
    { value: 'airC-0', viewValue: 'Aire acondicionado', active: false },
    { value: 'pis-1', viewValue: 'Piscina', active: false },
    { value: 'spa-2', viewValue: 'Spa', active: false },
    { value: 'parque-3', viewValue: 'Parque', active: false },
  ];

  facilities: facility[] = [
    { value: 'airC-0', viewValue: 'Aire acondicionado', active: false },
    { value: 'jac-1', viewValue: 'Jacuzzi', active: false },
    { value: 'co-2', viewValue: 'Cocina', active: false },
    { value: 'bal-3', viewValue: 'Balcón', active: false },
  ];

  // services=[  ]
  imagesAdditionals = [];
  habImagesAdditionals = [];
  fullDayAvailable = false;



  constructor(private sideBarSV: SidebarService, private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createHotelForm();
    this.createHabForm();

    this.hotelForm.controls.fullDay.valueChanges.subscribe(e => {
      console.log(e);

      this.fullDayAvailable = e;
      console.log("esto es", this.fullDayAvailable);
    })


  }

  addImage() {
    //aca hay q arreglar esto xq hay que montar la imagen a firestore, se guarda alla y
    // se devuelve el link q el te da que es lo que muestra la imagen que es lo que se va a mandar al array como tal,
    // es decir eso iria justo aca antes del .push y el push tambien habria q cambiarle lo q esta dentro del ()
    this.imagesAdditionals.push(this.hotelForm.controls.imageAdditional.value);
    this.hotelForm.controls.imageAdditional.setValue('');
  }
  
  
  createHotelForm() {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      stars: ['', Validators.required],
      enabled: ['',],
      state: ['', Validators.required],
      city: ['', Validators.required],
      lat: ['', Validators.required],
      lon: ['', Validators.required],
      address: ['', Validators.required],
      fullDay: ['',],
      fullDayPrice: [{ value: '', disabled: true }],
      // service: ['',Validators.required],
      imagePricipal: ['', Validators.required],
      imageAdditional: ['',],
    })
    this.imagesAdditionals = [];
    this.services.map( e => {e.active = false});
  }
  
  
  fullDayChange() {
    if (!this.hotelForm.controls.fullDay.value) {
      this.hotelForm.controls.fullDayPrice.disable();
    } else {
      this.hotelForm.controls.fullDayPrice.enable();
    }
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
  
  modifyInfo() {
    // getData();
    this.hotelForm = this.fb.group({
      name: ['Sunsol', Validators.required],
      stars: ['5', Validators.required],
      enabled: ['true',],
      state: ['nueva esparta', Validators.required],
      city: ['margarita', Validators.required],
      lat: ['22565', Validators.required],
      lon: ['265', Validators.required],
      address: ['dfssdffs', Validators.required],
      fullDay: ['true',],
      fullDayPrice: ['25000', Validators.required],
      // service: ['dfssdffs', Validators.required],
      imagePricipal: ['', Validators.required],
      
    })
    this.modalStatus.next(!this.modalStatus.value);
  }
  
  saveChanges() {
    // sendData();
    console.log(this.services);

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
      imageAdditional: ['',],
    })
    this.habImagesAdditionals = [];
    this.facilities.map( e => {e.active = false});
  }
  
  toggleModalSecondaryStatus() {
    this.modalSecondaryStatus.next(!this.modalSecondaryStatus.value);
    this.createHabForm();
  }
  
  modifyInfoHab() {
    // getData();
    this.habForm = this.fb.group({
      habName: ['sgg', Validators.required],
      habCapacity: ['sgs', Validators.required],
      habEnabled: ['true', Validators.required],
      habView: ['vzvx',],
      habPrice: ['15312', Validators.required],
      habQuantity: ['fz', Validators.required],
      imagePricipal: ['fz', Validators.required],
      imageAdditional: ['zff',],
      
    })
    this.modalSecondaryStatus.next(!this.modalSecondaryStatus.value);
  }
  
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

  toggleFacility(facility) {
    facility.active = !facility.active;
  }
  
  
}