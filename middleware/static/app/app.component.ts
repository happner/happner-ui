import {Component} from 'angular2/core';
import {LoginComponent} from './login.component';
import {PrivateComponent, HomeComponent} from './home.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NewCustomerComponent} from "./new.customer.component";
import {SideBarComponent} from "./sidebar.component";
import {DashBoardComponent} from "./dashboard.component";
import {TopNavComponent} from "./topnav.component";
import {SearchCustomerComponent} from "./search.customer.component";
import {CustomerService} from "./customer.service";


@Component({
    selector: 'my-app',
    directives: [LoginComponent, ROUTER_DIRECTIVES,NewCustomerComponent,TopNavComponent,DashBoardComponent,SideBarComponent,SearchCustomerComponent],
    providers: [CustomerService],
    template: `<div  class="app-container" >
    <div class="row content-container">
    <!--    Top nav-->
        <top-nav></top-nav>
        <!-- Side bar -->
        <div>
            <side-bar></side-bar>
        </div>
        <!-- Main Content -->
        <div class="container-fluid">
            <router-outlet></router-outlet>
        </div>
    </div>
    <footer class="app-footer">
        <div class="wrapper">
            <span class="pull-right">2.1 <a href="#"><i class="fa fa-long-arrow-up"></i></a></span> © 2016 Copyright.
        </div>
    </footer>
</div>
    
           
        `
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault:true },
    { path: 'login', name: 'Login', component: NewCustomerComponent },
    { path: '/customer/new', name: 'NewCustomer', component: NewCustomerComponent },
    { path: '/customer/search', name: 'SearchCustomer', component: SearchCustomerComponent },
])
export class AppComponent {


}

