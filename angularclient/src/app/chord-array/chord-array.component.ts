import { Component, OnInit } from '@angular/core';
import { Chord } from "../model/chord";


@Component({
  selector: 'app-chord-array',
  templateUrl: './chord-array.component.html',
  styleUrls: ['./chord-array.component.scss']
})
export class ChordArrayComponent implements OnInit {

  chordArray: Chord[];

  constructor() { }
  // ! chord-array would contain the receive emitter then i would ngFor through the array in here. And pass each elemnt to chord-node
  ngOnInit() {
  }

}
