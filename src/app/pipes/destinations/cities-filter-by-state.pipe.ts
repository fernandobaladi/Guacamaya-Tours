import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citiesFilterByState'
})
export class CitiesFilterByStatePipe implements PipeTransform {

  transform(cities: any[], state?: any): any {
    if (state) {
      return cities.filter(city => (city.data.state.id) === state);
    } else {
      return cities;
    }
  }

}
