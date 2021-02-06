import { Animal } from "../model/animal";

export class AnimalCard {
    id: number = 0;
    catId: number = 0;
    name: string = '';
    image: string = '';
    price: number = 0;
    endangered: boolean = false;

    constructor(properties?: Animal) {
        if (properties) {
            this.id = properties.id;
            this.catId = properties.catId;
            this.name = properties.name;
            this.image = properties.image;
            this.price = properties.price;
            this.endangered = properties.endangered;
        }
    }
}
