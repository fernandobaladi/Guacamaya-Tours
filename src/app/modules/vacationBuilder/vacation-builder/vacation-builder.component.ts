import { Component, OnInit, HostListener } from '@angular/core';
import { order } from 'src/app/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
import { State } from '../../../models/State';
import { DestinationCategory } from 'src/app/models/DestinationCategory';
import { Router } from '@angular/router';

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

  screen: string;

  states: localState[] = [
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
      name: "Pico Bolívar",
      state: "Mérida",
      city: "Mérida",
      info: "Es un lugar impresionante, a veces envuelto en neblina y a veces con un sol radiante que tuesta la piel",
    },
    {
      img: "http://correiodevenezuela.com/espanol/wp-content/uploads/2016/02/losroques794.jpg",
      name: "Pico Bolívar",
      state: "Mérida",
      city: "Mérida",
      info: "Es un lugar impresionante, a veces envuelto en neblina y a veces con un sol radiante que tuesta la piel",
    },
    {
      img: "http://correiodevenezuela.com/espanol/wp-content/uploads/2016/02/losroques794.jpg",
      name: "Pico Bolívar",
      state: "Mérida",
      city: "Mérida",
      info: "Es un lugar impresionante, a veces envuelto en neblina y a veces con un sol radiante que tuesta la piel",
    },
  ]

  constructor(private orderSV: OrderService, private route: ActivatedRoute, private router:Router ) {
    this.getScreenSize();
  }

  ngOnInit() {
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
      destinationCategory: this.categorySelected(),
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

  stateSelectedToFalse() {
    this.states.map(e => e.selected = false)
  }

  anyStateSelected() {
    return this.states.some(e => { return e.selected });
  }

  stateSelected() {
    return this.states.find(e => { return e.selected });
  }

  categorySelected() {
    return this.categories.find(e => e.selected );
  }

}
