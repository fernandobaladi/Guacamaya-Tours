import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  funcionBoton(){

    var x = document.getElementById("menuGeneral");
    var y = document.getElementById("menuComodidades");
    var z = document.getElementById("menuHabitaciones");
    var w = document.getElementById("menuPromociones");
    

    if (x.style.display === "block" || y.style.display === "block" || z.style.display === "block" || w.style.display === "block") {

        if (y.style.display === "block") {
          y.style.display = "none";
          
        }
        
        if (z.style.display === "block") {
          z.style.display = "none";
        }
    
        if (w.style.display === "block") {
          w.style.display = "none";
        }
        if (x.style.display === "block") {
          x.style.display = "none";
        } 
    } else {
      x.style.display = "block";
    }
  }


  funcionAyuda(visible: string, ocultar1: string, ocultar2: string, ocultar3: string) {
    
      if (document.getElementById(ocultar1).style.display === "block" ) {
        document.getElementById(ocultar1).style.display = "none";
      }

      if (document.getElementById(ocultar2).style.display === "block" ) {
        document.getElementById(ocultar2).style.display = "none";
      }

      if (document.getElementById(ocultar3).style.display === "block" ) {
        document.getElementById(ocultar3).style.display = "none";
      }

      document.getElementById(visible).style.display = "block";


    
  }


  clickGeneral() {
    this.funcionAyuda("menuGeneral", "menuComodidades", "menuHabitaciones", "menuPromociones");
  }

  clickComodidades() {
    this.funcionAyuda("menuComodidades", "menuGeneral", "menuHabitaciones", "menuPromociones");
  }

  clickHabitaciones() {
    this.funcionAyuda("menuHabitaciones", "menuGeneral", "menuComodidades", "menuPromociones");
  }

  clickPromociones() {
    this.funcionAyuda("menuPromociones", "menuGeneral", "menuComodidades", "menuHabitaciones");
  }


  clickStar1() {
      // document.getElementById("star1").src = "../../../assets/img/star-amarilla.png";
      // var imagen = document.getElementById("star1");
      // imagen.style.src = "";
      // //aqui intente cambiar la imagen de la estrella a la imagen de la estrella amarilla, pero 
      // //por alguna razon no me reconoce el .src
  }

  clickStar2() {
    
  }

  clickStar3() {
    
  }

  clickStar4() {
    
  }

  clickStar5() {
    
  }





}
