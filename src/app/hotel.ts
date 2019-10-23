import { Room } from './room';

export class Hotel {

    name: string;
    id: string;
    stars: number;
    latitude: number;
    longitude: number;
    direction: string;
    state: string;
    city: string;
    images: string[];
    fulldayAvailable: boolean;
    fulldayPrice?: number;
    rooms: Room[];
}
