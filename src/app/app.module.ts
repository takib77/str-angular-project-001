import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { AnimalCardComponent } from './common/animal-card/animal-card.component';
import { AnimalListComponent } from './common/animal-list/animal-list.component';
import { EndangeredPipe } from './pipe/endangered.pipe';
import { AdminComponent } from './common/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    AnimalCardComponent,
    AnimalListComponent,
    EndangeredPipe,
    AdminComponent,
    DataEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
