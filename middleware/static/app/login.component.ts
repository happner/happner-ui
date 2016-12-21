import {Component} from 'angular2/core';
import {AuthenticationService, User} from './authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    styleUrls: ['css/style.css'],
    template: `
<body class="flat-gray login-page">


            <div class="login-box">
    <div>
        <div class="login-form row" style="background-color:white">
            <div class="col-sm-12 text-center login-header">
                <i class="login-logo"></i>
            </div>
            <div class="col-sm-12">
                <div class="login-body">
                    <form>
                        <div class="control">
                            <label for="username">username</label>
                            <input [(ngModel)]="user.email" id="email" type="email" class="form-control" >
                        </div>
                        <div class="control">
                            <label for="password">password</label>
                            <input [(ngModel)]="user.password" id="password" type="password" class="form-control">
                        </div>
                        <div class="login-button text-center">
                            <input type="submit" class="btn btn-primary" value="Login" (click)="login()" >
                        </div>
                       <span>{{errorMsg}}</span>
                    </form>
                </div>
                <div class="login-footer">
                    <span class="text-right"><a href="#" class="color-white">Forgot password?</a></span>
                </div>
            </div>
        </div>
    </div>
</div></body>
    	`
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService) {}

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}

