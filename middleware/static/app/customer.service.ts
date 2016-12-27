import { Injectable } from 'angular2/core';
import {CUSTOMERS} from "./mock-customers";
import {Customer} from "./customer.component";

@Injectable()
export class CustomerService {
    getCustomers(): Promise<Customer[]> {
        return Promise.resolve(CUSTOMERS);
    }
}