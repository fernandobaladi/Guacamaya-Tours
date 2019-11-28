import { booking } from './booking';
import { payment } from './payment';

export interface order {
    name: String;
    lastName: String;
    IDType: String;
    ID: Number;
    phone: Number;
    email: String;
    address: String;
    booking: booking [];
    locator: string;
    amount: number;
    payment: payment;  
  }