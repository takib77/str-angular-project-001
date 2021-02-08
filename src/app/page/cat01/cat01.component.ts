import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  animalsInDanger$: Observable<Animal[]> = this.productService.readAllData().pipe(
    map(items => items.filter(animal => animal.endangered))
  );

  constructor(
    private productService: ProductService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

}
