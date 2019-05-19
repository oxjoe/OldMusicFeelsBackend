import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ChordListComponent} from "./chord-list/chord-list.component";
import {ChordFormComponent} from "./chord-form/chord-form.component";

const routes: Routes = [
  { path: 'chords', component: ChordListComponent},
  { path: 'addchord', component: ChordFormComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
