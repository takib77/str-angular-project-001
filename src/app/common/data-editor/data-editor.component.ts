import { HttpClient } from '@angular/common/http';
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

  animalList: Animal[] = this.productService.list;
  sourceURL: string = 'http://localhost:3000/list';

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  readAllData(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.sourceURL);
  }

}
