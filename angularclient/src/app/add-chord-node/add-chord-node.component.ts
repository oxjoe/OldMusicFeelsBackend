import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// * https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
@Component({
  selector: 'app-add-chord-node',
  templateUrl: './add-chord-node.component.html',
  styleUrls: ['./add-chord-node.component.scss']
})
export class AddChordNodeComponent implements OnInit {
  @Output() addChordEvent: EventEmitter<string> = new EventEmitter();

  keypress: string;

  constructor() { }

  ngOnInit(
  ) {
  }


  onSubmit() {
    console.log('About to emit the keypress which is:', this.keypress);
    // So onSubmit I create a chord node and display it
    this.addChordEvent.emit(this.keypress)
  }

}
