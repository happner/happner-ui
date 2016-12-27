import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: 'side-bar',
  templateUrl: 'app/sidebar.component.html',
  directives:[ROUTER_DIRECTIVES]
  })
  

export class SideBarComponent {
  title = 'Side bar works!';
}