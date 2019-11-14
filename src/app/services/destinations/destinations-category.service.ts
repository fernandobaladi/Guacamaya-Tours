import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';


@Injectable({
  providedIn: 'root'
})
export class DestinationsCategoryService {

  collectionPath = 'destinations-categories';
  constructor(
    private firestoreSV: FirestoreService
  ) { }

  public create(data) {
    return this.firestoreSV.create(this.collectionPath, data);
  }

  public getAllCategories() {
    return this.firestoreSV.getAll(this.collectionPath);
  }

  public getCategory(destinationCategoryId: string) {
    return this.firestoreSV.getDoc(this.collectionPath, destinationCategoryId);
  }

  public updateCategory(categoryId: string, data) {
    return this.firestoreSV.update(this.collectionPath, categoryId, data);
  }

}
