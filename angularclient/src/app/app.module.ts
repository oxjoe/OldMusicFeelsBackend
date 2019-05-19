import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { ChordListComponent } from './chord-list/chord-list.component';
import { ChordFormComponent } from './chord-form/chord-form.component';
import {ChordService} from "./service/chord.service";
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ChordListComponent,
    ChordFormComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ChordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
