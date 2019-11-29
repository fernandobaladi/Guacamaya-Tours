import { booking } from './booking';
import { payment } from './payment';

export class order {
    name: String;
    lastName: String;
    IDType: String;
    ID: Number;
    phoneNumber: Number;
    email: String;
    address: String;
    bookings: booking [];
    locator: string;
    amount: number;
    payment: payment;
    status: number;  
    statusName: string;
    
    constructor() {
      this.name = null;
      this.lastName= null;
      this.IDType= null;
      this.ID= null;
      this.phoneNumber = null;
      this.email = null;
      this.address= null;
      this.bookings= [];
      this.locator = null;
      this.amount = null;
      this.payment = null;
      this.status = null;
      this.statusName = null; 
    }
}