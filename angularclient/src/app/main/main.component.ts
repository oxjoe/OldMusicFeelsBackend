import { Chord } from './../model/chord';
import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  chord: Chord[];
  noteInter: string = 'testing noteInter via main.component.ts'
  chordNameKeypress: string;

  constructor() { }

  ngOnInit() { }

  addChordNode(chord: Chord) {
    console.log(chord);
  }

}