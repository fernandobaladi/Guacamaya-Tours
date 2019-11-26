import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(states: any[]): any[]{

    return states.sort( function(a, b) {
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
