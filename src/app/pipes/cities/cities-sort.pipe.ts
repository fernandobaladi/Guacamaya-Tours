import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citiesSort'
})
export class CitiesSortPipe implements PipeTransform {

  transform(cities: any[], filter: string): any[] {
    switch (filter) {
      case '1':
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

      case '2':
          return cities.sort( function(a, b) {
            if (a.data.state.name > b.data.state.name) {
              return 1;
            }
            if (a.data.state.name < b.data.state.name) {
              return -1;
            }
              // Si a === b
            return 0;
          });

      case '3':
        return cities.sort( function(a, b) {
          if (a.data.status < b.data.status) {
            return 1;
          }
          if (a.data.status > b.data.status) {
            return -1;
          }
            // Si a === b
          return 0;
        });
        }
      return cities;
      }
  }
