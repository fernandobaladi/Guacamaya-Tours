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

  public create(data){
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAll(){
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getBooking(bookingId: string){
    return this.firestoreSV.getDoc(this.collectionPath, bookingId);
  }

}
