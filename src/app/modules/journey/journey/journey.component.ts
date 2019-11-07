import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  locator = '';
  alphabeticArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() { }

  ngOnInit() {
  }

  validator() {
    if (this.locator.length > 6){
      alert('ERROR VUELVE A INGRESAR EL LOCALIZADOR');
    } else {
      for (let i = 2; i < 6 ; i++  ) {
        if ((this.locator.charAt(i) >= '0') && (this.locator.charAt(i) <= '9')) {
        } else {
          alert('ERROR VUELVE A INGRESAR EL LOCALIZADOR');
          return;
        }
      }
      let counter = 0;
      for (let k = 0; k < 2; k++) {
        for ( let j = 0; j < 26; j++ ) {
          if (this.locator.charAt(k) === this.alphabeticArray.charAt(j)) {
            counter++;
          }
          if ( (counter === 0) && ( j === 25 ) ) {
              alert('ERROR VUELVE A INGRESAR EL LOCALIZADOR');
              return;
          }
        }
      }
    }
  }
}
