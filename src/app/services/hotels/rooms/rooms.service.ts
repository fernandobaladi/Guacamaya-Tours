import { Injectable } from '@angular/core';
import { FirestoreService } from '../../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  collectionPath = 'rooms';
  constructor(
    private firestoreSV: FirestoreService
  ) { }

  public createRoom(data){
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAllRooms(){
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getBooking(roomID: string){
    return this.firestoreSV.getDoc(this.collectionPath, roomID);
  }
}
