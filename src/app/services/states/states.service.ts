import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  collectionPath = 'states';
  constructor(
    private firestoreSV: FirestoreService
  ) {}

  public create(data) {
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAllStates() {
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getState(stateId: string) {
    return this.firestoreSV.getDoc(this.collectionPath, stateId);
  }

  public updateState(stateId: string, data) {
    return this.firestoreSV.update(this.collectionPath, stateId, data);
  }
}
