import { Injectable } from '@angular/core';
import { FirestoreService } from '../../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsFacilitiesService {

  collectionPath = 'habs-facilities';
  constructor(
    private firestoreSV: FirestoreService
  ) { }

  public createFacility(data){
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAllFacilities(){
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getFacility(facilityId: string){
    return this.firestoreSV.getDoc(this.collectionPath, facilityId);
  }

  public updateFacility(facilityId: string, data) {
    return this.firestoreSV.update(this.collectionPath, facilityId, data);
  }
}
