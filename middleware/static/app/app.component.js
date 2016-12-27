System.register(['angular2/core', './login.component', './home.component', 'angular2/router', "./new.customer.component", "./sidebar.component", "./dashboard.component", "./topnav.component", "./search.customer.component", "./customer.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_component_1, home_component_1, router_1, new_customer_component_1, sidebar_component_1, dashboard_component_1, topnav_component_1, search_customer_component_1, customer_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (new_customer_component_1_1) {
                new_customer_component_1 = new_customer_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (topnav_component_1_1) {
                topnav_component_1 = topnav_component_1_1;
            },
            function (search_customer_component_1_1) {
                search_customer_component_1 = search_customer_component_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES, new_customer_component_1.NewCustomerComponent, topnav_component_1.TopNavComponent, dashboard_component_1.DashBoardComponent, sidebar_component_1.SideBarComponent, search_customer_component_1.SearchCustomerComponent],
                        providers: [customer_service_1.CustomerService],
                        template: "<div  class=\"app-container\" >\n    <div class=\"row content-container\">\n    <!--    Top nav-->\n        <top-nav></top-nav>\n        <!-- Side bar -->\n        <div>\n            <side-bar></side-bar>\n        </div>\n        <!-- Main Content -->\n        <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <footer class=\"app-footer\">\n        <div class=\"wrapper\">\n            <span class=\"pull-right\">2.1 <a href=\"#\"><i class=\"fa fa-long-arrow-up\"></i></a></span> \u00A9 2016 Copyright.\n        </div>\n    </footer>\n</div>\n    \n           \n        "
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: 'login', name: 'Login', component: new_customer_component_1.NewCustomerComponent },
                        { path: '/customer/new', name: 'NewCustomer', component: new_customer_component_1.NewCustomerComponent },
                        { path: '/customer/search', name: 'SearchCustomer', component: search_customer_component_1.SearchCustomerComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map