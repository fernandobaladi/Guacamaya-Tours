import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  public create(collection, data){
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(collection)
        .add(data)
        .then(res => { resolve(true); } , err => reject(err));
    });
  }

  getDoc(collection, documentId: string) {
    return this.firestore.collection(collection).doc(documentId).snapshotChanges();
  }

  getAll(collection) {
    return this.firestore.collection(collection).snapshotChanges();
  }


}
