import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBooking'
})
export class SearchBookingPipe implements PipeTransform {

  transform(bookings: any[], search: string): any[] {
    if (!bookings || !search){
      return bookings;
    }
    return bookings.filter(booking => booking.data.name.toLowerCase().includes(search.toLocaleLowerCase()));
  }

}
