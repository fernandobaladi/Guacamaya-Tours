import { Injectable } from '@angular/core';
import { order } from 'src/app/models/order';
import { booking } from 'src/app/models/booking';


@Injectable({
  providedIn: 'root'
})

export class OrderService {

  actualbooking: booking = new booking();

  order: order = new order();
  

  constructor() {

    // localStorage.setItem( 'order' , )

    // JSON.parse('')
    // 'sytin'
   }

   updateBooking( booking ){
    this.actualbooking= {...this.actualbooking, ...booking }
    console.log(this.actualbooking);
    
   }

   saveActualBooking(){
    console.log(this.order); 
     this.order.bookings.push(this.actualbooking);
     this.actualbooking = new booking();
   }

   updateOrder( order ){
    this.order = {...this.order, ...order}
    console.log(this.order); 
    
   }

  
}
