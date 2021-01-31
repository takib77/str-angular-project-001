import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  topFiveEndangeredAnimal: Animal[] = this.productService.list
  .filter( animal => animal.endangered)
}
