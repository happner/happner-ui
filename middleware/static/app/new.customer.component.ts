/**
 * Created by rmupfumira on 2016/12/27.
 */

import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import { JsonEditorModule } from 'ng2-json-editor/ng2-json-editor';
import {SchemaService} from "./schema.service";


@Component({
    selector: 'new-customer',
    templateUrl: 'app/new.customer.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[SchemaService]
   })

export class NewCustomerComponent {
    title = 'add a customer';
    record: Object;
    schema: Object;
    config: Object;

    constructor(private schemaService:SchemaService){

    }

    ngOnInit(): void {
       /* this.record = this.schemaService.getRecord();
        this.schema = this.schemaService.getSchema();*/
    }

    doStuffWithNewRecord($event){
        console.log($event);
    }

}
