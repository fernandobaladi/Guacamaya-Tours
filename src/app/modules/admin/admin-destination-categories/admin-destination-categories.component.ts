import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DestinationsCategoryService } from 'src/app/services/destinations/destinations-category.service';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-admin-destination-categories',
  templateUrl: './admin-destination-categories.component.html',
  styleUrls: ['./admin-destination-categories.component.scss']
})
export class AdminDestinationCategoriesComponent implements OnInit {

  optionSort = '';
  modalStatus = new BehaviorSubject (false);
  categories;
  loading = false;
  public categoryForm: FormGroup;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private sideBarSV: SidebarService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private categoriesService: DestinationsCategoryService
    ) { }

  ngOnInit() {
    this.createCategoryForm();
    this.categoriesService.getAllCategories().subscribe((categoriesSnapshot) => {
      this.categories = [];
      categoriesSnapshot.forEach((e: any) => {
        this.categories.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
    });
  }
  uploaderRes(res) {
    this.categoryForm.controls.imageURL.setValue(res.imageURL);
    this.categoryForm.controls.imagePath.setValue(res.imagePath);
  }

  createCategoryForm() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', ],
      imageURL: ['', Validators.required],
      imagePath:[''],
      id:['']
    });
  }

  toggleSideBar(){
    this.sideBarSV.toggleStatus();
  }

  changeModalStatus(val) {
    this.modalStatus.next(val);
  }

  toggleModalStatus(){
    this.modalStatus.next(!this.modalStatus.value);
    this.createCategoryForm();
  }

openModal(category?) {
    if (category) {
      this.categoryForm.controls.name.setValue(category.data.name);
      this.categoryForm.controls.status.setValue(category.data.status);
      this.categoryForm.controls.imageURL.setValue(category.data.imageURL);
      this.categoryForm.controls.imagePath.setValue(category.data.imagePath);
      this.categoryForm.controls.id.setValue(category.id);
      this.downloadURL = category.data.image;
    } else {
      this.categoryForm.reset();
      this.downloadURL = null;
    }
    this.modalStatus.next(!this.modalStatus.value);
  }

  saveChanges() {
    this.loading = true;

    if (!this.categoryForm.controls.status.value) {
      this.categoryForm.controls.status.setValue(false);
    }
    let data = {
      name: this.categoryForm.controls.name.value,
      status: this.categoryForm.controls.status.value,
      imageURL: this.categoryForm.controls.imageURL.value,
      imagePath: this.categoryForm.controls.imagePath.value,
    };

    if (!this.categoryForm.controls.id.value) {

      this.categoriesService.create(data)
        .then(res => {
          alert('¡Se ha agregado exitosamente el estado!');
          this.categoryForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });

    } else {

      this.categoriesService.updateCategory(this.categoryForm.controls.id.value, data)
        .then(res => {
          alert('¡Se ha editado exitosamente el estado!');
          this.categoryForm.reset();
        }).catch(err => {
          this.loading = false;
          alert('Ha habido un error con la información introducida');
        });
    }
    this.modalStatus.next(false);
  }

}