import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

export interface Slide{
  img:string;
  isAct:boolean;
  isPrev:boolean;
  isNext:boolean;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slider: Slide[] = [ 
    {
      img:"http://www.crucerosporelcaribe.com.ve/promo2015-2016/descuento_unik.jpg",
      isAct:true,
      isPrev:false,
      isNext:false
    },
    {
      img:"https://companerodeviaje.com/wp-content/uploads/s3_noticias/POST%20PROMO%20PB.jpg",
      isAct:false,
      isPrev:false,
      isNext:true
  },
    {
      img:"http://www.margaritawings.com.ve/promo2015-2016/oferta-de-paquetes-en-margarita.jpg",
      isAct:false,
      isPrev:true,
      isNext:false
  }]

  constructor() { }

  ngOnInit() {
  }

  nextSlide(){
    let actual = this.slider.find( ele => ele.isAct);
    let next = this.slider.find( ele => ele.isNext);
    let prev = this.slider.find( ele => ele.isPrev);
    console.log(actual, next, prev);
    
    actual.isAct = false;
    actual.isPrev = true;
    next.isNext = false;
    next.isAct = true;
    prev.isPrev = false;
    prev.isNext = true;
  }

  prevSlide(){
    let actual = this.slider.find( ele => ele.isAct);
    let next = this.slider.find( ele => ele.isNext);
    let prev = this.slider.find( ele => ele.isPrev);
    actual.isAct = false;
    actual.isNext = true;
    next.isNext = false;
    next.isPrev = true;
    prev.isPrev = false;
    prev.isAct = true;
  }

}
