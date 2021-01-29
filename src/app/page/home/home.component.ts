import { Component, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { AnimalCard } from 'src/app/model/animalCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() animals: Animal[] =[];  
  animalCard: AnimalCard = new AnimalCard();
  constructor() { }

  ngOnInit(): void {
  }
}
