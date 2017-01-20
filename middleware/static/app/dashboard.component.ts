import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: 'dash-board',
  templateUrl: 'app/dashboard.component.html',
  directives:[ROUTER_DIRECTIVES]
  })
  
export class DashBoardComponent {
  title = '';
}