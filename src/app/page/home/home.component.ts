import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animal = this.productService.getAnimalCard(1);

  animalList: Animal[] = this.productService.list;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
