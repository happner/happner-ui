import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AuthenticationService} from "./authentication.service";

@Component({
  selector: 'side-bar',
  templateUrl: 'app/sidebar.component.html',
  directives:[ROUTER_DIRECTIVES],
  providers:[AuthenticationService]
  })
  

export class SideBarComponent {
  title = '';
  public user = null;

  constructor(private _service:AuthenticationService){}

  ngOnInit(){
    this.user = this._service.getUser();
  }

}