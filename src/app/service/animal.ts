
export class Animal {
    id : number = 0;
    name: string ='';
    image: string ='';
    price: number =0;
    endangered: boolean =true;   


constructor(properties? : Animal) {
        if (properties) {
            this.id = properties.id || 0;
            this.name = properties.name;
            this.image = properties.image;
            this.price = properties.price;
            this.endangered = properties.endangered;
        }
    }
}