import { Injectable } from '@angular/core';
import { FirestoreService } from '../../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class HabsService {

  collectionPath = 'habs';
  constructor(
    private firestoreSV: FirestoreService
  ) { }

  public createHab(data){
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAll(){
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getHab(habId: string){
    return this.firestoreSV.getDoc(this.collectionPath, habId);
  }

  public updateHab(habId: string, data) {
    return this.firestoreSV.update(this.collectionPath, habId, data);
  }
}
