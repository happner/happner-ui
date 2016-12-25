import { Component } from 'angular2/core';
import {ViewEncapsulation} from "angular2/src/core/metadata/view";

@Component({
  selector: 'side-bar',
  templateUrl: 'app/sidebar.component.html',
  encapsulation: ViewEncapsulation.None,

  /*styleUrls:['css/sidebar.css']*/
  })
  

export class SideBarComponent {
  title = 'Side bar works!';
}