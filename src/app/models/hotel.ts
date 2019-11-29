import { room } from './room';
import { State } from './state';
import { city } from './city';

export class Hotel {

    name: String;
    stars: number;
    status?: Boolean;
    state: string;
    city: string;
    lat: number;
    lon: number;
    adress: String;
    fullday: Boolean;
    fulldayPrice?: number;
    id: string;
    rooms?: room[];

}
