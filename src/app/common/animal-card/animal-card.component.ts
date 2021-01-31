import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent implements OnInit {

  @Input() animal: Animal = new Animal();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  endangeredAnimals = this.productService.list
  .forEach( animal => {
    if(animal.endangered===true) {
      animal.endangered="Endangered";
    } else if (animal.endangered===false) {
      animal.endangered="Not endangered";
    }
  })

}
