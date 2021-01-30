import { Injectable } from '@angular/core';
import { AnimalCard } from '../common/animal-card';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list: Animal[] = [{
    id: 0,
    name: "Barna Medve",
    image: "src/assets/img/barnamedve.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 1,
    name: "Leveli Beka",
    image: "src/assets/img/beka.jpg",
    price: 10000,
    endangered: false
  }, {
    id: 2,
    name: "Bivaly",
    image: "src/assets/img/bivaly.jpg",
    price: 150000,
    endangered: false
  }, {
    id: 3,
    name: "Elefánt",
    image: "src/assets/img/elefant.jpg",
    price: 10000,
    endangered: true
  }, {
    id: 4,
    name: "Gorilla",
    image: "src/assets/img/gorilla.jpg",
    price: 100000,
    endangered: false
  }, {
    id: 5,
    name: "Kazuár",
    image: "src/assets/img/kazuár.jpg",
    price: 100000,
    endangered: false
  }, {
    id: 6,
    name: "Tapír",
    image: "src/assets/img/tapir.jpg",
    price: 10000,
    endangered: false
  }, {
    id: 7,
    name: "Tigris",
    image: "src/assets/img/tigris.jpg",
    price: 2000000,
    endangered: true
  }, {
    id: 8,
    name: "Piranja",
    image: "src/assets/img/piranja.jpg",
    price: 560000,
    endangered: false
  }, {
    id: 9,
    name: "Orrszarvú",
    image: "src/assets/img/orrszarvu.jpg",
    price: 890000,
    endangered: false
  }, {
    id: 10,
    name: "Szurikáta",
    image: "src/assets/img/szurikata.jpg",
    price: 10000,
    endangered: false
  }, {
    id: 11,
    name: "Rozsomák",
    image: "src/assets/img/rozsomak.jpg",
    price: 12000,
    endangered: true
  }, {
    id: 0,
    name: "Vadkutya",
    image: "src/assets/img/vadkutya.jpg",
    price: 19000,
    endangered: false
  }, {
    id: 12,
    name: "Víziló",
    image: "src/assets/img/vizilo.jpg",
    price: 10000,
    endangered: true
  }, {
    id: 13,
    name: "Wombat",
    image: "src/assets/img/wombat.jpg",
    price: 189000,
    endangered: false
  },
  ]

  constructor() { }

  topFiveDangeredAnimal: Animal[] = this.list.filter(animal => animal.endangered)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  topFiveAnimalInCategory(id: number): Animal[] {

    return this.list.filter(animal => animal.id == id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }

  getAnimalCard(id: number): AnimalCard {
    const myAnimal = this.list.find(item => item.id == id);
    const myAnimalCard = new AnimalCard();
    myAnimalCard.id = myAnimal.id;
    myAnimalCard.name = myAnimal.name;
    myAnimalCard.image = myAnimal.image;
    myAnimalCard.price = myAnimal.price;
    myAnimalCard.endangered = myAnimal.endangered;

    return myAnimalCard;
  }

}
