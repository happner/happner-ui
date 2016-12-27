/**
 * Created by rmupfumira on 2016/12/27.
 */

import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Customer} from "./customer.component";
import {CustomerService} from "./customer.service";


@Component({
    selector: 'search-customer',
    templateUrl: 'app/search.customer.component.html',
    providers: [CustomerService],
    directives: [ROUTER_DIRECTIVES]
})

export class SearchCustomerComponent {
    public query = '';

    customers: Customer[];

    public filteredList: Customer[] = [];

    constructor(private customerService: CustomerService) { }

    getCustomers(): void {
        this.customerService.getCustomers().then(customers => this.customers = customers);
    }

    ngOnInit(): void {
        this.getCustomers();
    }

    filter() {
        if (this.query !== ""){
            this.filteredList = this.customers.filter(function(el){
                return el.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }else{
            this.filteredList = [];
        }
    }

    select(item){
        this.query = item;
        this.filteredList = [];
    }
}
