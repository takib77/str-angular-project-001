import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/model/animal';
import { ProductService } from 'src/app/service/product.service';
import { AnimalCol, TableService } from 'src/app/service/table.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  animalList$: Observable<Animal[]> = this.productService.readAllData();
  animalcols: AnimalCol[] = this.tableService.tableCols;
  searchPhrase: string = '';

  constructor(
    private productService: ProductService,
    private tableService: TableService
  ) {}

  ngOnInit(): void {}

  onChangeSearchPhrase(event: Event): void {
    this.searchPhrase = (event.target as HTMLInputElement).value;
  }

  onUpdateAnimal(animal: Animal): void {
    this.productService
      .updateOneData(animal)
      .subscribe((updatedAnimal) => console.log(updatedAnimal));
  }

  onDeleteAnimal(animal: Animal): void {
    this.productService
      .deleteOneData(animal)
      .subscribe(() => console.log('Animal deleted'));
  }
}
