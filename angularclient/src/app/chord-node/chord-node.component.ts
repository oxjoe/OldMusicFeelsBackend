import { MainComponent } from './../main/main.component';
import { Chord } from './../model/chord';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chord-node',
  templateUrl: './chord-node.component.html',
  styleUrls: ['./chord-node.component.scss']
})
export class ChordNodeComponent implements OnInit {
  @Input()
  chordNameKeypress: string;

  constructor() {
  }

  ngOnInit() {
  }

}
