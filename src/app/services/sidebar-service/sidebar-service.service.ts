import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  status= new BehaviorSubject (false)
  statusClientMenu= new BehaviorSubject (false)

  constructor() { }

  changeStatus(val){
    this.status.next(val)
  }
  
  toggleStatus(){
    this.status.next(!this.status.value);
  }

  changeStatusClientMenu(val){
    this.statusClientMenu.next(val)
  }

  toggleStatusClientMenu(){
    this.statusClientMenu.next( !this.statusClientMenu.value );
  }
}
