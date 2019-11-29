import { Component, OnInit, HostListener } from '@angular/core';
import { order } from 'src/app/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
//import { State } from '../../../models/State';
//import { DestinationCategory } from 'src/app/models/DestinationCategory';
import { Router } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations/destinations.service';
import { DestinationsCategoryService } from 'src/app/services/destinations/destinations-category.service';
import { DestinationCategory } from 'src/app/models/destinationCategory';
import { State } from 'src/app/models/state';

export class localState extends State{
  img: string;
  selected: boolean;
}

export class category extends DestinationCategory {
  img: string;
  selected: boolean;
}

export class destination {
  img: String;
  name: String;
  state: String;
  city: String;
  info: String;
}

@Component({
  selector: 'app-vacation-builder',
  templateUrl: './vacation-builder.component.html',
  styleUrls: ['./vacation-builder.component.scss']
})
export class VacationBuilderComponent implements OnInit {

  optionSort = '';
  steps = {
    step_one: true,
    step_two: false,
    step_three: false,
  } 
  enableStep = false;
  stateSelect;
  screen: string;
  stateCounted = false;
  categorySelected;
  states = [];
  itemsPerSlide: number;
  singleSlideOffset = true;
  categories;
  destinations;
  

  constructor(private orderSV: OrderService, 
              private route: ActivatedRoute, 
              private router:Router,
              private destinationsService: DestinationsService,
              private categoriesService: DestinationsCategoryService) {
    this.getScreenSize();
  }

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

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {

    console.log(window.innerWidth);

    if (window.innerWidth <= 991 && window.innerWidth > 640) {
      this.screen = "medium";
      this.itemsPerSlide = 2;
    }
    else if (window.innerWidth <= 640) {
      this.screen = "small";
      this.itemsPerSlide = 1;
    }
    else {
      this.screen = "normal";
      this.itemsPerSlide = 4;
    }
  }

  saveInfo() {
    const auxBooking= {
      destinationCategory: this.categoriesSelected(),
      state: this.stateSelected()
    }
    this.orderSV.updateBooking(auxBooking);
    this.router.navigate(["vacationBuilder/step2"]);
  }

  toggleState(state) {
    this.stateSelectedToFalse();
    state.selected = !state.selected;
    this.enableStep = this.anyStateSelected();

  }

  goToStep(step, category?) {
    this.stepsToFalse();
    switch (step) {
      case 1:
        this.steps.step_one = true;
        break;
      case 2:
        this.categoriesSelectedToFalse();
        this.steps.step_two = true;
        category.selected = true;
        this.stateSelectedToFalse();
        this.categorySelected = this.categoriesSelected();
        break;
      case 3:
        this.steps.step_three = true;
        this.stateSelect = this.stateSelected();
        break;

      default:
        break;
    }
    this.destinations.forEach(e => {
      if (e.data.status) {
        if(e.data.state.status) {
          if(e.data.category.status) {
            if(e.data.city.status) {
              this.states.map( ele => {
                if (ele.name === e.data.state.name) {
                  this.stateCounted = true;
                }
              });
              if(!this.stateCounted){
                this.states.push({
                  categoryState: e.data.category.name,
                  name: e.data.state.name,
                  id: e.data.state.id,
                  imagePath: e.data.state.imagePath,
                  imageURL: e.data.state.imageURL
                });
              }
              this.stateCounted = false;
            }
          }
        }
      }
    });
    console.log(this.states);
    
  }

  stepsToFalse() {
    this.steps.step_one = false;
    this.steps.step_two = false;
    this.steps.step_three = false;
  }

  categoriesSelectedToFalse(): any {
    this.categories.map(e => e.selected = false)
  }

  stateSelectedToFalse(): any {
    this.states.map(e => e.selected = false);
  }

  anyStateSelected() {
    return this.states.some(e => { return e.selected });
  }

  stateSelected() {
    const stateSelect = this.states.map(e => {if(e.selected){
      return e;
    }});
    return stateSelect;
  }

  categoriesSelected(): any[]{
    const catSelect = this.categories.find(e => {if(e.selected){
      return e;
    }

  });
    return catSelect;
  }

}
