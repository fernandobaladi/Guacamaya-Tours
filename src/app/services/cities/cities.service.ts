import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  collectionPath = 'cities';
  constructor(
    private firestoreSV: FirestoreService
  ) {}

  public createCity(data) {
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAllCities() {
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getCity(cityId: string) {
    return this.firestoreSV.getDoc(this.collectionPath, cityId);
  }

  public updateCity(cityId: string, data) {
    return this.firestoreSV.update(this.collectionPath, cityId, data);
  }
}
