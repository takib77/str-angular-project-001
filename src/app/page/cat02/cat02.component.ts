import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  animalList: Animal[] = this.productService.list;
  searchPhrase: string = '';

  constructor(
    private productService: ProductService
  ) { }
  ngOnInit(): void {
  }

  onChangeSearchPhrase(event: Event): void {
    this.searchPhrase = (event.target as HTMLInputElement).value;
  }

}
