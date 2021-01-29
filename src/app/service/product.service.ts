import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  list: Animal[] = [{
    id : 0,
    name: "Barna Medve",
    image: "",
    price: 100000,
    endangered: true
  }, {
    id : 1,
    name: "Leveli Beka",
    image: "",
    price: 10000,
    endangered: false
  }, {
    id : 2,
    name: "Bivaly",
    image: "",
    price: 150000,
    endangered: false
  }, {
    id : 3,
    name: "Elefánt",
    image: "",
    price: 10000,
    endangered: true
  }, {
    id : 4,
    name: "Gorilla",
    image: "",
    price: 100000,
    endangered: false
  }, {
    id : 5,
    name: "Kazuár",
    image: "",
    price: 100000,
    endangered: false
  }, {
    id : 6,
    name: "Tapír",
    image: "",
    price: 10000,
    endangered: false
  }, {
    id : 7,
    name: "Tigris",
    image: "",
    price: 2000000,
    endangered: true
  }, {
    id : 8,
    name: "Oroszlán",
    image: "",
    price: 560000,
    endangered: false
  }, {
    id : 9,
    name: "Orrszarvú",
    image: "",
    price: 890000,
    endangered: false
  }, {
    id : 10,
    name: "Szurikáta",
    image: "",
    price: 10000,
    endangered: false
  }, {
    id : 11,
    name: "Rozsomák",
    image: "",
    price: 12000,
    endangered: true
  }, {
    id : 0,
    name: "Vadkutya",
    image: "",
    price: 19000,
    endangered: false
  }, {
    id : 12,
    name: "Víziló",
    image: "",
    price: 10000,
    endangered: true
  }, {
    id : 13,
    name: "Wombat",
    image: "",
    price: 189000,
    endangered: false
  }, 
]  
}
