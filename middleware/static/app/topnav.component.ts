import { Component } from 'angular2/core';
import {ViewEncapsulation} from "angular2/src/core/metadata/view";

@Component({
  selector: 'top-nav',
  templateUrl: 'app/topnav.component.html',
  encapsulation: ViewEncapsulation.None
})
  
export class TopNavComponent {
  title = 'Top nav works!';
}