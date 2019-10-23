import { Component, OnInit } from '@angular/core';

export interface trendingHotel {
  img: string;
  name: string;
  rate: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trending: trendingHotel[] = [
    {
      img: "../../../../assets/img/puntaBlanca.jpg",
      name: "Sunsol",
      rate: 5

    },
    {
      img: "../../../../assets/img/eurobuilding.jpg",
      name: "Eurobuilding",
      rate: 4
    },
    {
      img: "../../../../assets/img/puntaBlanca.jpg",
      name: "Sunsol",
      rate: 2
    },
    {
      img: "../../../../assets/img/eurobuilding.jpg",
      name: "Eurobuilding",
      rate: 3
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  getHotelRating(stars:number){
    let starsArray = Array(5).fill(0).map((x,i)=>i<=stars-1?1:0);

    return starsArray;
  }

}
