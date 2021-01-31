import { Injectable } from '@angular/core';
import { AnimalCard } from '../common/animal-card';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list: Animal[] = [{
    id: 1,
    catId: 1,
    name: "Leveli Beka",
    image: "assets/img/beka.jpg",
    price: 10000,
    endangered: false
  }, {
    id: 2,
    catId: 2,
    name: "Bivaly",
    image: "assets/img/bivaly.jpg",
    price: 150000,
    endangered: false
  }, {
    id: 3,
    catId: 3,
    name: "Elefánt",
    image: "assets/img/elefant.jpg",
    price: 10000,
    endangered: true
  }, {
    id: 4,
    catId: 3,
    name: "Gorilla",
    image: "assets/img/gorilla.jpg",
    price: 100000,
    endangered: false
  }, {
    id: 5,
    catId: 3,
    name: "Kazuár",
    image: "assets/img/kazuár.jpg",
    price: 100000,
    endangered: false
  }, {
    id: 6,
    catId: 2,
    name: "Tapír",
    image: "assets/img/tapir.jpg",
    price: 10000,
    endangered: false
  }, {
    id: 7,
    catId: 2,
    name: "Tigris",
    image: "assets/img/tigris.jpg",
    price: 2000000,
    endangered: true
  }, {
    id: 8,
    catId: 2,
    name: "Piranja",
    image: "assets/img/piranja.jpg",
    price: 560000,
    endangered: false
  }, {
    id: 9,
    catId: 2,
    name: "Orrszarvú",
    image: "assets/img/orrszarvu.jpg",
    price: 890000,
    endangered: false
  }, {
    id: 10,
    catId: 1,
    name: "Szurikáta",
    image: "assets/img/szurikata.jpg",
    price: 10000,
    endangered: false
  }, {
    id: 11,
    catId: 1,
    name: "Rozsomák",
    image: "assets/img/rozsomak.jpg",
    price: 12000,
    endangered: true
  }, {
    id: 0,
    catId: 1,
    name: "Vadkutya",
    image: "assets/img/vadkutya.jpg",
    price: 19000,
    endangered: false
  }, {
    id: 12,
    catId: 1,
    name: "Víziló",
    image: "assets/img/vizilo.jpg",
    price: 10000,
    endangered: true
  }, {
    id: 13,
    catId: 3,
    name: "Wombat",
    image: "assets/img/wombat.jpg",
    price: 189000,
    endangered: false
  }, {
    id: 14,
    catId: 3,
    name: "Barna Medve",
    image: "assets/img/barnamedve.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 15,
    catId: 4,
    name: "Pápaszemes pillangó",
    image: "assets/img/lepke4.jpg",
    price: 80000,
    endangered: true
  }, {
    id: 16,
    catId: 5,
    name: "Homoki katta",
    image: "assets/img/katta.jpg",
    price: 120000,
    endangered: false
  }, {
    id: 17,
    catId: 2,
    name: "Kispanda",
    image: "assets/img/kispanda.jpg",
    price: 150000,
    endangered: true
  }, {
    id: 18,
    catId: 5,
    name: "Leopárd",
    image: "assets/img/leopard.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 19,
    catId: 6,
    name: "Tavaszi pillangó",
    image: "assets/img/lepke1.jpg",
    price: 5000,
    endangered: true
  }, {
    id: 20,
    catId: 3,
    name: "Indiai antilop",
    image: "assets/img/indiai-antilop.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 21,
    catId: 7,
    name: "Indiai ororszlán",
    image: "assets/img/indiai-oroszlan.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 22,
    catId: 9,
    name: "Kaffer szarvasvarjú",
    image: "assets/img/kaffer-szarvasvarju.jpg",
    price: 120000,
    endangered: true
  }, {
    id: 23,
    catId: 8,
    name: "Lándzsa kigyó",
    image: "assets/img/landzsa-kigyo.jpg",
    price: 140000,
    endangered: true
  }, {
    id: 24,
    catId: 3,
    name: "Barna réti pillangó",
    image: "assets/img/lepke2.jpg",
    price: 5000,
    endangered: true
  }, {
    id: 25,
    catId: 10,
    name: "Színes virág pillangó",
    image: "assets/img/lepke3.jpg",
    price: 80000,
    endangered: true
  }, {
    id: 26,
    catId: 9,
    name: "Gazella",
    image: "assets/img/mhorr-gazella.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 27,
    catId: 6,
    name: "Mishmi takin",
    image: "assets/img/mishmi-takin.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 28,
    catId: 5,
    name: "Mókus majom",
    image: "assets/img/mokus-majom.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 29,
    catId: 3,
    name: "Orángután",
    image: "assets/img/orangutan.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 30,
    catId: 3,
    name: "Óriás vidra",
    image: "assets/img/oriasvidra.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 31,
    catId: 3,
    name: "Patkány kenguru",
    image: "assets/img/patkany-kenguru.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 32,
    catId: 3,
    name: "Selyem majom",
    image: "assets/img/selyem-majom.jpg",
    price: 100000,
    endangered: true
  }, {
    id: 33,
    catId: 3,
    name: "Sörényes hangyász",
    image: "assets/img/sorenyes-hangyasz.jpg",
    price: 150000,
    endangered: true
  }, {
    id: 34,
    catId: 7,
    name: "Törpe mara",
    image: "assets/img/torpe-mara.jpg",
    price: 102000,
    endangered: true
  }, {
    id: 35,
    catId: 7,
    name: "Tarajos rák",
    image: "assets/img/t-rak.jpg",
    price: 102000,
    endangered: true
  
  }, {
    id: 36,
    catId: 7,
    name: "Varánusz",
    image: "assets/img/varanusz.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 37,
    catId: 7,
    name: "Vizi disznó",
    image: "assets/img/vizi-diszno.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 38,
    catId: 7,
    name: "Zebra",
    image: "assets/img/zebra.jpg",
    price: 108000,
    endangered: true
  },  {
    id: 39,
    catId: 7,
    name: "Tigris",
    image: "assets/img/tigris.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 40,
    catId: 7,
    name: "Zsiráf",
    image: "assets/img/zsiraf.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 41,
    catId: 7,
    name: "Arapamia",
    image: "assets/img/arapaima.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 42,
    catId: 7,
    name: "Csörgőkigyó",
    image: "assets/img/cs-kigyo.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 43,
    catId: 7,
    name: "Ecsetfejű disznó",
    image: "assets/img/ecsetfeju-diszo.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 44,
    catId: 7,
    name: "Feketepárduc",
    image: "assets/img/f-parduc.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 45,
    catId: 7,
    name: "Gém",
    image: "assets/img/gem.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 46,
    catId: 7,
    name: "Varánusz",
    image: "assets/img/varanusz.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 47,
    catId: 7,
    name: "Hangyász sün",
    image: "assets/img/hangyasz-sun.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 48,
    catId: 7,
    name: "Kenguru",
    image: "assets/img/kenguru.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 49,
    catId: 7,
    name: "Krokodil",
    image: "assets/img/krokodil.jpg",
    price: 102000,
    endangered: true
  },  {
    id: 50,
    catId: 7,
    name: "",
    image: "assets/img/varanusz.jpg",
    price: 102000,
    endangered: true
  }
  ];

  constructor() { }

  getAnimalCard(catId: number): AnimalCard {
    const myAnimal = this.list.find(item => item.catId == catId);
    const myAnimalCard = new AnimalCard();
    myAnimalCard.id = myAnimal.id;
    myAnimalCard.catId = myAnimal.catId;
    myAnimalCard.name = myAnimal.name;
    myAnimalCard.image = myAnimal.image;
    myAnimalCard.price = myAnimal.price;
    myAnimalCard.endangered = myAnimal.endangered;

    return myAnimalCard;
  }

}
