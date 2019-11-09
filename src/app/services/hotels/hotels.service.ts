import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  collectionPath = 'hotels';
  constructor(
    private firestoreSV: FirestoreService
  ) { }

  public create(data){
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAll(){
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getBooking(hotelId: string){
    return this.firestoreSV.getDoc(this.collectionPath, hotelId);
  }
}
