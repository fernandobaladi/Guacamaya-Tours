export class Room {

    name: string;
    capacity: number;
    view?: string;
    images: [];
    facilities?: string;

    // Las variables de imágenes puede que varíen
    // Por la forma en la que se añadan.
    // Si es mediante las etiquetas <img> de HTML, se usa HTMLImageElement
    // Si es por un URL se utiliza un String
    // Si es por una etiqueta <input> de HTML, se usará File


}
