import { plusOne } from './plusOne';
import { DestinationCategory } from './destinationCategory';
import { State } from './state';
import { Hotel } from './hotel';
import { room } from './room';

export class booking {
    destinationCategory: DestinationCategory;
    state: State;
    hotel: Hotel;
    room: room;
    roomQuantity: number;
    plusOneQuantity: number;
    checkIn: number;
    checkOut: number;
    plusOne: plusOne[];

    constructor() {
        this.destinationCategory = null;
        this.state= null;
        this.hotel= null;
        this.room= null;
        this.roomQuantity = null;
        this.plusOneQuantity = null;
        this.checkIn= null;
        this.checkOut= null;
        this.plusOne = [];
    }
}