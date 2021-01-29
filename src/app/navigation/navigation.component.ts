import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from './service/config.sevice';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  appName: string = this.config.appName;
  menuItems: IMenuItem[] = this.config.menuItems;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
