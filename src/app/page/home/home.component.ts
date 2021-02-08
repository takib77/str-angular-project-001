import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animalsInDanger$: Observable<Animal[]> = this.productService.readAllData().pipe(
    map(items => items.filter(animal => animal.endangered)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5))
  );

  random = Math.floor(Math.random() * 6) + 1;
  animalsInCategory$: Observable<Animal[]> = this.productService.readAllData().pipe(
    map(items => items.filter(animal => animal.catId === this.random)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5))
  );

  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

}
