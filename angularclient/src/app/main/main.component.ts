import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {

  noteInter: string = 'testing noteInter via main.component.ts'
  test: string;

  constructor() { }

  ngOnInit() { }

  generate() {
    console.log("id clicked");
  }
}
