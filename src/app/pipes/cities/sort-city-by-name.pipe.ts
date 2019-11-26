import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCityByName'
})
export class SortCityByNamePipe implements PipeTransform {

  transform(cities: any[]): any[]{

    return cities.sort( function(a, b) {
    if (a.data.name > b.data.name) {
      return 1;
    }
    if (a.data.name < b.data.name) {
      return -1;
    }
      // Si a === b
    return 0;
  });
  }

}
