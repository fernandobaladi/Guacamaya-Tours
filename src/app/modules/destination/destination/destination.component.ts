import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { DestinationsCategoryService } from 'src/app/services/destinations/destinations-category.service';
import { DestinationsService } from 'src/app/services/destinations/destinations.service';
import { StatesService } from 'src/app/services/states/states.service';

export interface state {
  img: string;
  name: string;
  selected: boolean;
}

export interface category {
  img: string;
  name: string;
  selected: boolean;
}

export interface destination {
  img: string;
  name: string;
  state: string;
  city: string;
  info: string;
}

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})

export class DestinationComponent implements OnInit {

  optionSort = '';
  steps = {
    step_one: true,
    step_two: false,
    step_three: false,
  };
  enableStep = false;
  stateCounted = false;
  screen: string;
  states = [];
  stateSelect;
  itemsPerSlide: number;
  singleSlideOffset = true;
  categorySelected;
  categories = [];
  destinations = [];
  constructor(private categoriesService: DestinationsCategoryService,
              private destinationsService: DestinationsService,
              private statesService: StatesService) {
    this.getScreenSize();
  }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe((categoriesSnapshot) => {
      this.categories = [];
      categoriesSnapshot.forEach((e: any) => {
        this.categories.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });
    // this.statesService.getAllStates().subscribe((statesSnapshot) => {
    //   this.states = [];
    //   statesSnapshot.forEach((e: any) => {
    //     this.states.push({
    //       id: e.payload.doc.id,
    //       data: e.payload.doc.data()
    //     });
    //   });
    // });


    this.destinationsService.getAll().subscribe((destinationsSnapshot) =>{
      this.destinations = [];
      destinationsSnapshot.forEach((e: any) => {
        this.destinations.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });

  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {


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

 

  toggleState(state) {
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
        this.statesSelectedToFalse();
        this.categorySelected = this.categoriesSelected();
        break;
      case 3:
        this.steps.step_three = true;
        this.stateSelect = this.statesSelected();
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
  }

  stepsToFalse() {
    this.steps.step_one = false;
    this.steps.step_two = false;
    this.steps.step_three = false;
  }

  categoriesSelectedToFalse(): any {
    this.categories.map(e => e.selected = false);
  }
  statesSelectedToFalse(): any {
    this.states.map(e => e.selected = false);
  }

  categoriesSelected(): any[] {
    const catSelect = this.categories.find(e => {if(e.selected){
      return e;
    }

  });
    return catSelect;
  }
  statesSelected() {
    const stateSelect = this.states.map(e => {if(e.selected){
      return e;
    }});
    return stateSelect;
  }

  anyStateSelected() {
    return this.states.some(e => {return e.selected;
    });
  }
}
