import { room } from './room';
import { state } from './state';
import { city } from './city';

export class hotel {

    name: String;
    stars: number;
    status: Boolean;
    state: state;
    city: city
    lat: number;
    lon: number;
    adress: String;
    fullday: Boolean;
    fulldayPrice?: number;
    id: string;
    rooms: room[];

}
