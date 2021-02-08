import { Injectable } from '@angular/core';

export interface AnimalCol {
  key: string;
  text: string;
  editable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  tableCols: AnimalCol[] = [
    { key: 'id', text: '#', editable: false },
    { key: 'catId', text: 'Category', editable: false },
    { key: 'name', text: 'Animal Name', editable: true },
    { key: 'price', text: 'Price in HUF', editable: true },
    { key: 'endangered', text: 'Endangered', editable: true }
  ];

  constructor() { }
}
