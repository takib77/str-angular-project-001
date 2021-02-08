import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  animalList$: Observable<Animal[]> = this.productService.readAllData();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
