import {Component} from 'angular2/core';
import {AuthenticationService, User} from './authentication.service'
import {TopNavComponent} from './topnav.component'
import {DashBoardComponent} from './dashboard.component'
import {SideBarComponent} from "./sidebar.component";

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl:'app/home.component.html',
    directives:[DashBoardComponent]

})

export class HomeComponent {
    public user = new User('','');

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
        this.user = this._service.getUser();
    }

    logout() {
        this._service.logout();
    }
}