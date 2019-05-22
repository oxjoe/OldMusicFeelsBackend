import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-chord-node',
  templateUrl: './add-chord-node.component.html',
  styleUrls: ['./add-chord-node.component.scss']
})
export class AddChordNodeComponent implements OnInit {
  @Output() addChordNode: EventEmitter<any> = new EventEmitter();

  keypress: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.addChordNode.emit(this.keypress)
  }

}
