import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  animalList$: Observable<Animal[]> = this.productService.readAllData();
  searchPhrase: string = '';

  constructor(
    private productService: ProductService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  onChangeSearchPhrase(event: Event): void {
    this.searchPhrase = (event.target as HTMLInputElement).value;
  }

}
