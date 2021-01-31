import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  animal = this.productService.getAnimalCard(1);

  animalList: Animal[] = this.productService.list;

  constructor(
    private productService: ProductService
  ) { }
  ngOnInit(): void {
  }

}
