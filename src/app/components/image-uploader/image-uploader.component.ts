import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  @Input() path: string;
  @Output() res = new EventEmitter();


  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) { }

  ngOnInit() {
  }
  task;
  startUpload(event) {
    const file = event.item(0);
    if (file.type.split('/')[0] !== 'image') {
      console.error('Tipo de documento no soportado :( ');
      return;
    }
    var pathFinal = `${this.path}/${new Date().getTime()}_${file.name}`;
    const customMetadata = { app: 'Prueba'};
    const fileRef = this.storage.ref(pathFinal);
    this.task = this.storage.upload(pathFinal, file, { customMetadata });
    this.task.then( res => {
      res.ref.getDownloadURL().then( URL => {
        this.res.emit({imageURL: URL, imagePath: res.ref.fullPath});
      });
    });

}
}
