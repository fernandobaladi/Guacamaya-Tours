import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  collectionPath = 'destinations';
  constructor(
    private firestoreSV: FirestoreService
  ) { }

  public create(data) {
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAll() {
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getDestination(destinationId: string) {
    return this.firestoreSV.getDoc(this.collectionPath, destinationId);
  }

  public updateDestination(destinationId: string, data) {
    return this.firestoreSV.update(this.collectionPath, destinationId, data);
  }
}
