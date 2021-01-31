import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
  }
   topFiveEndangeredAnimal: Animal[] = this.productService.list
    .filter( animal => animal.endangered)
    .sort( () => 0.5 - Math.random())
    .slice(0, 5);

    topFiveFromCategory: Animal[] = this.productService.list
    .filter( animal => animal.catId)
    .sort( () => 0.5 - Math.random())
    .slice(0, 5);

}
