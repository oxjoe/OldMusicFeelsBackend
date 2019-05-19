import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  firstClick() {
    console.log("Generate a new Chord");
  }
}
