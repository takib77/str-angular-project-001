export class Animal {
    [propname: string]: any;
    id: number = 0;
    catId: any = 0;
    name: string = '';
    image: string = '';
    price: number = 0;
    endangered: any = false;

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
