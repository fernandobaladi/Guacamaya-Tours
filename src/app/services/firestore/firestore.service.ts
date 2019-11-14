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

  public getDoc(collection, documentId: string) {
    // return new Promise<any>((resolve, reject) => {
      return this.firestore
      .collection(collection)
      .doc(documentId)
      .snapshotChanges();
      
    // });
  }
  public getAll(collection) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  public delete(collection, documentId: string) {
    return this.firestore.collection(collection).doc(documentId).delete();
  }

  public update(collection, documentId: string, data) {
    return this.firestore.collection(collection).doc(documentId).update(data);
  }
}
