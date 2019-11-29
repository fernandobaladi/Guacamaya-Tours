import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destinationFilterByState'
})
export class DestinationFilterByStatePipe implements PipeTransform {

  transform(destinations: any[], states?: any[]): any[]{

    let i = 0;
    let destination;
    let destinationFinal = [];
    states.forEach(element => {
    destinations.forEach(element2 => {
        if (states[i]) {
          if((element2.data.state.name) === (states[i].name)){
            destination = element2;
            destinationFinal.push(destination);
          }
        }
      });
      i = i + 1;
      console.log(element);
    });
    destinations = destinationFinal;
    return destinations;


  }

}
