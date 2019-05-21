import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ChordListComponent } from './chord-list/chord-list.component';
import { ChordService } from "./service/chord.service";
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { ChordNodeComponent } from './chord-node/chord-node.component';


@NgModule({
  declarations: [
    AppComponent,
    ChordListComponent,
    NavComponent,
    MainComponent,
    ChordNodeComponent
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
