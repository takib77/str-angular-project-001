import { Component } from '@angular/core';
import { Animal } from './model/animal';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';
  animalList: Animal[] = this.productService.list;
}
