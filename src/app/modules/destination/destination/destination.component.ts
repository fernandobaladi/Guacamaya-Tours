import { Component, OnInit } from '@angular/core';

export interface state {
  img: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  states: state[] = [
    {
      img: "../../../../assets/img/puntaBlanca.jpg",
      name: "Sunsol",
      selected: false,
    },
    {
      img: "../../../../assets/img/eurobuilding.jpg",
      name: "Eurobuilding",
      selected: false,
    },
    {
      img: "../../../../assets/img/puntaBlanca.jpg",
      name: "Sunsol",
      selected: false,
    },
    {
      img: "../../../../assets/img/eurobuilding.jpg",
      name: "Eurobuilding",
      selected: false,
    },
  ]

  constructor() { }

  ngOnInit() {
  }
  
  toggleState(state) {
    state.selected = !state.selected;
  }
}
