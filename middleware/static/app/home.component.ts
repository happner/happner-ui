import {Component} from 'angular2/core';
import {AuthenticationService} from './authentication.service'
import {TopNavComponent} from './topnav.component'
import {DashBoardComponent} from './dashboard.component'
import {SideBarComponent} from "./sidebar.component";
import {ViewEncapsulation} from "angular2/src/core/metadata/view";

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl:'app/home.component.html',
    directives:[TopNavComponent,DashBoardComponent,SideBarComponent],
    encapsulation: ViewEncapsulation.None,

})

export class HomeComponent {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}