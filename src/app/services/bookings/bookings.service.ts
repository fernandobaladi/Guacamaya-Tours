import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  collectionPath = 'bookings';
  constructor(
    private firestoreSV: FirestoreService
  ) {}

  public createBooking(data) {
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAllBookings() {
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getBooking(bookingId: string) {
    return this.firestoreSV.getDoc(this.collectionPath, bookingId);
  }
  public updateBooking(bookingId: string, data) {
    return this.firestoreSV.update(this.collectionPath, bookingId, data);
  }

}
