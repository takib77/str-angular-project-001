import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  @Input() animalList: Animal[] = this.productService.list;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
