import { Component } from 'angular2/core';
import {ViewEncapsulation} from "angular2/src/core/metadata/view";
import {AuthenticationService} from "./authentication.service";

@Component({
  selector: 'top-nav',
  templateUrl: 'app/topnav.component.html',
  providers:[AuthenticationService]
})
  
export class TopNavComponent {
  title = 'Top nav works!';

  public user = null;

  constructor(private _service:AuthenticationService){}

  ngOnInit(){
    this.user = this._service.getUser();
  }
}