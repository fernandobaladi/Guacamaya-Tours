import { booking } from './booking';
import { payment } from './payment';

export class order {
    name: String;
    lastName: String;
    IDType: String;
    ID: Number;
    phone: Number;
    email: String;
    address: String;
    bookings: booking [];
    locator: string;
    amount: number;
    payment: payment;  
    
    constructor() {
      this.name = null;
      this.lastName= null;
      this.IDType= null;
      this.ID= null;
      this.phone = null;
      this.email = null;
      this.address= null;
      this.bookings= [];
      this.locator = null;
      this.amount = null;
      this.payment = null;
    }
}