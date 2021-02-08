import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  sourceURL: string = 'http://localhost:3000/list';

  constructor(
    private http: HttpClient,
  ) { }

  readAllData(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.sourceURL);
  }

}
