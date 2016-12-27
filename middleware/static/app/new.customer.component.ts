/**
 * Created by rmupfumira on 2016/12/27.
 */

import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";


@Component({
    selector: 'new-customer',
    templateUrl: 'app/new.customer.component.html',
    directives: [ROUTER_DIRECTIVES]
   })

export class NewCustomerComponent {
    title = 'add a customer';
}
