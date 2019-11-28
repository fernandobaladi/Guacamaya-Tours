import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalSort'
})
export class GeneralSortPipe implements PipeTransform {

  transform(array: any[], filter: string): any[]{
    switch(filter){
      case '1':
          return array.sort( function(a, b) {
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
        return array.sort( function(a, b) {
          if (a.data.status < b.data.status) {
            return 1;
          }
          if (a.data.status > b.data.status) {
            return -1;
          }
              // Si a === b
          return 0;
        });
        case '3':
          return array.sort( function(a, b) {
            if (a.data.state.name > b.data.state.name) {
              return 1;
            }
            if (a.data.state.name < b.data.state.name) {
              return -1;
            }
                // Si a === b
            return 0;
          });
          case '4':
            return array.sort( function(a, b) {
              if (a.data.city.name > b.data.city.name) {
                return 1;
              }
              if (a.data.city.name < b.data.city.name) {
                return -1;
              }
                  // Si a === b
              return 0;
            });
            case '5':
              return array.sort( function(a, b) {
                if (a.data.category.name > b.data.category.name) {
                  return 1;
                }
                if (a.data.category.name < b.data.category.name) {
                  return -1;
                }
                    // Si a === b
                return 0;
              });
            case '6':
              return array.sort( function(a, b) {
                if (a.data.stars > b.data.stars) {
                  return 1;
                }
                if (a.data.stars < b.data.stars) {
                  return -1;
                }
                    // Si a === b
                return 0;
              });
              case '7':
          return array.sort( function(a, b) {
            if (a.data.date > b.data.date) {
              return 1;
            }
            if (a.data.date < b.data.date) {
              return -1;
            }
              // Si a === b
            return 0;
          });
      case '8':
          return array.sort( function(a, b) {
            if (a.data.status > b.data.status) {
              return 1;
            }
            if (a.data.status < b.data.status) {
              return -1;
            }
              // Si a === b
            return 0;
          });
    
      case '9':
          return array.sort( function(a, b) {
            if (a.data.amount > b.data.amount) {
              return -1;
            }
            if (a.data.amount < b.data.amount) {
              return 1;
            }
              // Si a === b
            return 0;
          });
    }
    return array;
  }

}
