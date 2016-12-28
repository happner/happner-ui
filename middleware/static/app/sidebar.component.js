System.register(['angular2/core', "angular2/router", "./authentication.service"], function(exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1;
    var SideBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            SideBarComponent = (function () {
                function SideBarComponent(_service) {
                    this._service = _service;
                    this.title = 'Side bar works!';
                    this.user = null;
                }
                SideBarComponent.prototype.ngOnInit = function () {
                    this.user = this._service.getUser();
                };
                SideBarComponent = __decorate([
                    core_1.Component({
                        selector: 'side-bar',
                        templateUrl: 'app/sidebar.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [authentication_service_1.AuthenticationService]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], SideBarComponent);
                return SideBarComponent;
            }());
            exports_1("SideBarComponent", SideBarComponent);
        }
    }
});
//# sourceMappingURL=sidebar.component.js.map