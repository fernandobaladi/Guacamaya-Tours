import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBookings'
})
export class SortBookingsPipe implements PipeTransform {

  transform(bookings: any[], filter: string): any[] {
    switch (filter) {
      case '1':
          return bookings.sort( function(a, b) {
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
          return bookings.sort( function(a, b) {
            if (a.data.date > b.data.date) {
              return 1;
            }
            if (a.data.date < b.data.date) {
              return -1;
            }
              // Si a === b
            return 0;
          });
      
      case '3':
          return bookings.sort( function(a, b) {
            if (a.data.status > b.data.status) {
              return 1;
            }
            if (a.data.status < b.data.status) {
              return -1;
            }
              // Si a === b
            return 0;
          });
    
      case '4':
          return bookings.sort( function(a, b) {
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
    return bookings;
  }
}
