import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  @Input() animalList: Animal[];
  @Input() searchPhraseString: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
