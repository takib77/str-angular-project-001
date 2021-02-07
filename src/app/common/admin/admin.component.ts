import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() animalList: Animal[];

  constructor() { }

  ngOnInit(): void {
  }

}
