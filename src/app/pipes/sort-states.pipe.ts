import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortStates'
})
export class SortStatesPipe implements PipeTransform {

  transform(states: any[], filter: string): any[]{
    switch(filter){
      case '1':
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
      case '2':
        return states.sort( function(a, b) {
          if (a.data.status > b.data.status) {
            return 1;
          }
          if (a.data.status < b.data.status) {
            return -1;
          }
              // Si a === b
          return 0;
        });
    }
    return states;
  }

}
