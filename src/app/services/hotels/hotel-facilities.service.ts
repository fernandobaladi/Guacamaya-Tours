import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class HotelFacilitiesService {

  collectionPath = 'hotel-facilities';
  constructor(
    private firestoreSV: FirestoreService
  ) { }

  public create(data){
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAll(){
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getBooking(facilityId: string){
    return this.firestoreSV.getDoc(this.collectionPath, facilityId);
  }
}
