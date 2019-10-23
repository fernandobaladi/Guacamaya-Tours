import { Component, OnInit } from '@angular/core';
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
      img:"http://wowslider.com/sliders/demo-51/data1/images/car.jpg",
      isAct:true,
      isPrev:false,
      isNext:false
  },
    {
      img:"http://wowslider.com/sliders/demo-23/data1/images/landscape1344620.jpg",
      isAct:false,
      isPrev:false,
      isNext:true
  },
    {
      img:"https://www.jssor.com/demos/img/gallery/980x380/001.jpg",
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
