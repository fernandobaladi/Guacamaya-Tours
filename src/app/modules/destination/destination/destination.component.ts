import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

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
  }

  states: state[] = [
    {
      img: "https://steemitimages.com/DQmbJA4t1388EhBPCZgRv5svVFp7zHxABt6qQXMSvMMFCkx/image.png",
      name: "Mérida",
      selected: false,
    },
    {
      img: "https://www.el-carabobeno.com/wp-content/uploads/2017/10/trujillo-1.jpg",
      name: "Trujillo",
      selected: false,
    },
    {
      img: "http://mmedia.eluniversal.com/17914/san-cristobal-15703.jpg",
      name: "Táchira",
      selected: false,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flor_de_venezuela_barquisimeto_lara.jpg",
      name: "Lara",
      selected: false,
    },
  ]

  itemsPerSlide: number;
  singleSlideOffset = true;

  categories: category[] = [
    {
      img: "http://correiodevenezuela.com/espanol/wp-content/uploads/2016/02/losroques794.jpg",
      name: "Costa",
      selected: false,
    },
    {
      img: "https://viajesblog.net/wp-content/uploads/2018/05/salto-del-angel.jpg",
      name: "Montaña",
      selected: false,
    },
    {
      img: "https://i1.wp.com/diariolavoz.net/wp-content/uploads/2013/07/ubicacion-medanos-de-coro.jpg",
      name: "Selva",
      selected: false,
    },
    {
      img: "https://www.eltelegrafo.com.ec/media/k2/items/cache/0dd63e66c3035bda0f70aa3c277a0c98_XL.jpg",
      name: "Llano",
      selected: false,
    },
  ]

  destinations: destination[] = [
    {
      img: "http://correiodevenezuela.com/espanol/wp-content/uploads/2016/02/losroques794.jpg",
      name: "Costa",
      state: "Mérida",
      city: "Mérida",
      info: "Es un lugar impresionante, a veces envuelto en neblina y a veces con un sol radiante que tuesta la piel",
    },
    {
      img: "http://correiodevenezuela.com/espanol/wp-content/uploads/2016/02/losroques794.jpg",
      name: "Costa",
      state: "Mérida",
      city: "Mérida",
      info: "Es un lugar impresionante, a veces envuelto en neblina y a veces con un sol radiante que tuesta la piel",
    },
    {
      img: "http://correiodevenezuela.com/espanol/wp-content/uploads/2016/02/losroques794.jpg",
      name: "Costa",
      state: "Mérida",
      city: "Mérida",
      info: "Es un lugar impresionante, a veces envuelto en neblina y a veces con un sol radiante que tuesta la piel",
    },
  ]

  constructor() {
    this.getScreenSize();
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {

    console.log(window.innerWidth);

    if (window.innerWidth <= 991 && window.innerWidth > 640) {
      this.itemsPerSlide = 2;
    }
    else if (window.innerWidth <= 640) {
      this.itemsPerSlide = 1;
    }
    else {
      this.itemsPerSlide = 4;
    }
  }


  toggleState(state) {
    state.selected = !state.selected;
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
        console.log(this.categories);

        break;
      case 3:
        this.steps.step_three = true;
        break;

      default:
        break;
    }
  }

  stepsToFalse() {
    this.steps.step_one = false;
    this.steps.step_two = false;
    this.steps.step_three = false;
  }

  categoriesSelectedToFalse() {
    this.categories.map(e => e.selected = false)
  }
}
