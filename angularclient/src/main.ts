import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as angular from "angular";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// let app = angular.module('myApp', []);

// app.controller('myCtrl', function () {

// });

// angular.module("myApp").directive("keypressDetector", function () {
//   return {
//     restrict: "A",
//     link: function (scope, elem, attrs) {
//       document.onkeydown = function (e) {
//         if (e.keyCode === 13) {
//           //do something
//           console.log("keypress detected");
//         }
//       }
//     }
//   }
// })