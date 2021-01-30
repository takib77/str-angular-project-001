export class Animal {
    id: number = 0;
    catId: number = 0;
    name: string = '';
    image: string = '';
    price: number = 0;
    endangered: boolean = false;

    constructor(properties?: Animal) {
        if (properties) {
            this.id = properties.id || 0;
            this.catId = properties.catId || 0;
            this.name = properties.name || '';
            this.image = properties.image || '';
            this.price = properties.price || 0;
            this.endangered = properties.endangered || false;
        }
    }
}
