import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'ZOOland';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'EndangeredAnimals', link: '/cat01' },
    { text: 'OurAnimals', link: '/cat02' },
    { text: 'Admin', link: '/cat03' },
  ];

  constructor() { }
}