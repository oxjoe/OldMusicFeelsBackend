import {Component, OnInit} from '@angular/core';
import {Chord} from "../model/chord";
import {ChordService} from "../service/chord.service";

@Component({
  selector: 'app-chord-list',
  templateUrl: './chord-list.component.html',
  styleUrls: ['./chord-list.component.sass']
})
export class ChordListComponent implements OnInit {

  chords: Chord[];

  constructor(private chordService: ChordService) {
  }

  ngOnInit() {
    this.chordService.findAll().subscribe(data => {
      this.chords = data;
    });
  }

}
