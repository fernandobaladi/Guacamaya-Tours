import { Injectable } from '@angular/core';
import { order } from 'src/app/models/order';
import { booking } from 'src/app/models/booking';
import { element } from 'protractor';
import { room } from 'src/app/models/room';
import { FirestoreService } from '../firestore/firestore.service';


@Injectable({
  providedIn: 'root'
})

export class OrderService {

  actualbooking: booking = new booking();

  order: order = new order();
  amountRoom = 0;
  collectionPath = 'bookings';

  constructor(
    private firestoreSV: FirestoreService
  ) {

    // localStorage.setItem( 'order' , )

    // JSON.parse('')
    // 'sytin'
   }

   updateBooking( booking ){
    this.actualbooking= {...this.actualbooking, ...booking }
    console.log(this.actualbooking);
    
   }

   getActualState(): any{
     return this.actualbooking.state;
   }

    saveActualBooking(){
    console.log(this.order); 
        this.order.bookings.push(this.actualbooking);
        this.actualbooking = new booking();
    }

    finalAmount(){
      this.order.bookings.forEach(element => {
        this.amountRoom = this.amountRoom + (element.roomQuantity * element.room.price);
        if(element.hotel.fullday){
          this.amountRoom = this.amountRoom + (element.hotel.fulldayPrice * element.plusOneQuantity);
        }
      });
      this.order.amount = this.amountRoom;
    }
   updateOrder( order ){
    this.order = {...this.order, ...order}
    console.log(this.order);
   }

   public create(data) {
    return this.firestoreSV.create(this.collectionPath, data);
  }

  
}
