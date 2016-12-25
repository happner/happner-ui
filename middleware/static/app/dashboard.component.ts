import { Component } from 'angular2/core';
import {ViewEncapsulation} from "angular2/src/core/metadata/view";

@Component({
  selector: 'dash-board',
  templateUrl: 'app/dashboard.component.html',
  encapsulation: ViewEncapsulation.None
})
  
export class DashBoardComponent {
  title = 'Dashboard works!';
}