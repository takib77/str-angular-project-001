import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Animal[] = [
    {
      id: 1,
      catId: 6,
      name: "Leveli Béka",
      image: "assets/img/beka.jpg",
      price: 10000,
      endangered: false
    },
    {
      id: 2,
      catId: 2,
      name: "Bivaly",
      image: "assets/img/bivaly.jpg",
      price: 150000,
      endangered: false
    },
    {
      id: 3,
      catId: 2,
      name: "Elefánt",
      image: "assets/img/elefant.jpg",
      price: 1000000,
      endangered: true
    },
    {
      id: 4,
      catId: 2,
      name: "Gorilla",
      image: "assets/img/gorilla.jpg",
      price: 1500000,
      endangered: false
    },
    {
      id: 5,
      catId: 4,
      name: "Kazuár",
      image: "assets/img/kazuár.jpg",
      price: 300000,
      endangered: false
    },
    {
      id: 6,
      catId: 2,
      name: "Tapír",
      image: "assets/img/tapir.jpg",
      price: 10000,
      endangered: false
    },
    {
      id: 7,
      catId: 1,
      name: "Tigris",
      image: "assets/img/tigris.jpg",
      price: 2000000,
      endangered: true
    },
    {
      id: 8,
      catId: 3,
      name: "Piranja",
      image: "assets/img/piranja.jpg",
      price: 560000,
      endangered: false
    },
    {
      id: 9,
      catId: 2,
      name: "Orrszarvú",
      image: "assets/img/orrszarvu.jpg",
      price: 890000,
      endangered: false
    },
    {
      id: 10,
      catId: 1,
      name: "Szurikáta",
      image: "assets/img/szurikata.jpg",
      price: 80000,
      endangered: false
    },
    {
      id: 11,
      catId: 1,
      name: "Rozsomák",
      image: "assets/img/rozsomak.jpg",
      price: 12000,
      endangered: true
    },
    {
      id: 12,
      catId: 1,
      name: "Víziló",
      image: "assets/img/vizilo.jpg",
      price: 10000,
      endangered: true
    },
    {
      id: 13,
      catId: 2,
      name: "Wombat",
      image: "assets/img/wombat.jpg",
      price: 189000,
      endangered: false
    },
    {
      id: 14,
      catId: 1,
      name: "Barnamedve",
      image: "assets/img/barnamedve.jpg",
      price: 100000,
      endangered: true
    },
    {
      id: 15,
      catId: 5,
      name: "Pápaszemes pillangó",
      image: "assets/img/lepke4.jpg",
      price: 80000,
      endangered: true
    },
    {
      id: 16,
      catId: 1,
      name: "Homoki katta",
      image: "assets/img/katta.jpg",
      price: 330000,
      endangered: false
    },
    {
      id: 17,
      catId: 2,
      name: "Kispanda",
      image: "assets/img/kispanda.jpg",
      price: 950000,
      endangered: true
    },
    {
      id: 18,
      catId: 1,
      name: "Leopárd",
      image: "assets/img/leopard.jpg",
      price: 15000000,
      endangered: true
    },
    {
      id: 19,
      catId: 5,
      name: "Tavaszi pillangó",
      image: "assets/img/lepke1.jpg",
      price: 5000,
      endangered: true
    },
    {
      id: 20,
      catId: 2,
      name: "Indiai antilop",
      image: "assets/img/indiai-antilop.jpg",
      price: 10000,
      endangered: true
    },
    {
      id: 21,
      catId: 1,
      name: "Indiai ororszlán",
      image: "assets/img/indiai-oroszlan.jpg",
      price: 10000000,
      endangered: true
    },
    {
      id: 22,
      catId: 1,
      name: "Kaffer szarvasvarjú",
      image: "assets/img/kaffer-szarvasvarju.jpg",
      price: 120000,
      endangered: true
    },
    {
      id: 23,
      catId: 6,
      name: "Lándzsa kigyó",
      image: "assets/img/landzsa-kigyo.jpg",
      price: 140000,
      endangered: true
    },
    {
      id: 24,
      catId: 5,
      name: "Barna réti pillangó",
      image: "assets/img/lepke2.jpg",
      price: 5000,
      endangered: true
    },
    {
      id: 25,
      catId: 5,
      name: "Színes virág pillangó",
      image: "assets/img/lepke3.jpg",
      price: 80000,
      endangered: true
    },
    {
      id: 26,
      catId: 2,
      name: "Gazella",
      image: "assets/img/mhorr-gazella.jpg",
      price: 300000,
      endangered: true
    },
    {
      id: 27,
      catId: 2,
      name: "Mishmi takin",
      image: "assets/img/mishmi-takin.jpg",
      price: 1000000,
      endangered: true
    },
    {
      id: 28,
      catId: 2,
      name: "Mókus majom",
      image: "assets/img/mokus-majom.jpg",
      price: 1000000,
      endangered: true
    },
    {
      id: 29,
      catId: 3,
      name: "Orángután",
      image: "assets/img/orangutan.jpg",
      price: 100000,
      endangered: true
    },
    {
      id: 30,
      catId: 3,
      name: "Óriás vidra",
      image: "assets/img/oriasvidra.jpg",
      price: 100000,
      endangered: true
    },
    {
      id: 31,
      catId: 3,
      name: "Patkány kenguru",
      image: "assets/img/patkany-kenguru.jpg",
      price: 100000,
      endangered: false
    },
    {
      id: 32,
      catId: 2,
      name: "Selyem majom",
      image: "assets/img/selyem-majom.jpg",
      price: 850000,
      endangered: false
    },
    {
      id: 33,
      catId: 1,
      name: "Sörényes hangyász",
      image: "assets/img/sorenyes-hangyasz.jpg",
      price: 150000,
      endangered: true
    },
    {
      id: 34,
      catId: 2,
      name: "Törpe mara",
      image: "assets/img/torpe-mara.jpg",
      price: 185000,
      endangered: true
    },
    {
      id: 35,
      catId: 3,
      name: "Tarajos rák",
      image: "assets/img/t-rak.jpg",
      price: 102000,
      endangered: true
    },
    {
      id: 36,
      catId: 1,
      name: "Varánusz",
      image: "assets/img/varanusz.jpg",
      price: 102000,
      endangered: true
    },
    {
      id: 37,
      catId: 2,
      name: "Vizi disznó",
      image: "assets/img/vizi-diszno.jpg",
      price: 102000,
      endangered: false
    },
    {
      id: 38,
      catId: 2,
      name: "Zebra",
      image: "assets/img/zebra.jpg",
      price: 785000,
      endangered: true
    },
    {
      id: 39,
      catId: 2,
      name: "Zsiráf",
      image: "assets/img/zsiraf.jpg",
      price: 4445000,
      endangered: false
    },
    {
      id: 40,
      catId: 3,
      name: "Arapamia",
      image: "assets/img/arapaima.jpg",
      price: 102000,
      endangered: true
    },
    {
      id: 41,
      catId: 6,
      name: "Csörgőkigyó",
      image: "assets/img/cs-kigyo.jpg",
      price: 222000,
      endangered: true
    },
    {
      id: 42,
      catId: 2,
      name: "Ecsetfejű disznó",
      image: "assets/img/ecsetfeju-diszo.jpg",
      price: 90000,
      endangered: true
    },
    {
      id: 43,
      catId: 1,
      name: "Feketepárduc",
      image: "assets/img/f-parduc.jpg",
      price: 555000,
      endangered: true
    },
    {
      id: 44,
      catId: 4,
      name: "Gém",
      image: "assets/img/gem.jpg",
      price: 280000,
      endangered: true
    },
    {
      id: 45,
      catId: 6,
      name: "Varánusz",
      image: "assets/img/varanusz.jpg",
      price: 102000,
      endangered: true
    },
    {
      id: 46,
      catId: 1,
      name: "Hangyász sün",
      image: "assets/img/hangyasz-sun.jpg",
      price: 52000,
      endangered: true
    },
    {
      id: 47,
      catId: 2,
      name: "Kenguru",
      image: "assets/img/kenguru.jpg",
      price: 675000,
      endangered: true
    },
    {
      id: 48,
      catId: 6,
      name: "Krokodil",
      image: "assets/img/krokodil.jpg",
      price: 442000,
      endangered: true
    },
    {
      id: 49,
      catId: 2,
      name: "Földi malac",
      image: "assets/img/foldi-malac.jpg",
      price: 157000,
      endangered: true
    },
    {
      id: 50,
      catId: 4,
      name: "Bagoly",
      image: "assets/img/bagoly.jpg",
      price: 2150000,
      endangered: true
    },
    {
      id: 51,
      catId: 1,
      name: "Vadkutya",
      image: "assets/img/vadkutya.jpg",
      price: 190000,
      endangered: false
    }
  ];


  constructor(
  ) { }

  allEndangeredAnimal(): Animal[] {
    return this.list
      .filter(animal => animal.endangered);
  }

  fiveEndangeredAnimal(): Animal[] {
    return this.list
      .filter(animal => animal.endangered)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }

  fiveFromCategory(): Animal[] {
    let random = Math.floor(Math.random() * 6) + 1;
    return this.list
      .filter(animal => animal.catId === random)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }

}
