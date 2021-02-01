import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animalsInDanger: Animal[] = this.productService.fiveEndangeredAnimal();
  animalsInCategory: Animal[] = this.productService.fiveFromCategory();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
