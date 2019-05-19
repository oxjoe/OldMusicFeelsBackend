import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChordService} from "../service/chord.service";
import {Chord} from "../model/chord";

@Component({
  selector: 'app-chord-form',
  templateUrl: './chord-form.component.html',
  styleUrls: ['./chord-form.component.sass']
})
export class ChordFormComponent implements OnInit {

  chord: Chord;

  constructor(private route: ActivatedRoute, private router: Router, private chordService: ChordService) {
    this.chord = new Chord();
  }

  onSubmit() {
    this.chordService.save(this.chord).subscribe(result => this.gotoChordList());
  }

  gotoChordList() {
    this.router.navigate(['/data'])
  }
  ngOnInit() {
  }

}
