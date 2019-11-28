import { plusOne } from './plusOne';
import { destinationCategory } from './destinationCategory';
import { state } from './state';
import { hotel } from './hotel';
import { room } from './room';

export interface booking {
    destinationCategory: destinationCategory;
    state: state;
    hotel: hotel;
    room: room;
    checkIn: number;
    checkOut: number;
    plusOne: plusOne[];
}