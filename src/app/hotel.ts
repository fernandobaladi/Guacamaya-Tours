
export class Hotel {

    name: string;
    id: string;
    stars: number;
    latitude: number;
    longitude: number;
    direction: string;
    state: string;
    city: string;
    images: [];
    fulldayAvailable: boolean;
    fulldayPrice?: number;

    // Las variables de imágenes puede que varíen
    // Por la forma en la que se añadan.
    // Si es mediante las etiquetas <img> de HTML, se usa HTMLImageElement
    // Si es por un URL se utiliza un String
    // Si es por una etiqueta <input> de HTML, se usará File

}
