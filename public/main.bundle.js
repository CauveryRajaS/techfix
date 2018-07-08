webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button a {\r\n    text-decoration:none;\r\n    color:white;\r\n}\r\n\r\ndiv a {\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\n\r\n.bgGrids {\r\n    top:0;\r\n    left:0;\r\n    position: absolute;\r\n    z-index:-1;\r\n    background-color: blue;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    grid-gap: 0.5em;\r\n    grid-auto-rows:minmax(104px,auto);\r\n}\r\n\r\n.cube {\r\n    background: #F9F7F7;\r\n    z-index:-1;\r\n}\r\n\r\n.cubeX {\r\n    background: white;\r\n    z-index:-1;\r\n    -webkit-animation:spinX 2s linear infinite;\r\n            animation:spinX 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spinX {\r\n    0% {\r\n        -webkit-transform: rotateX(0deg);\r\n                transform: rotateX(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotateX(360deg);\r\n                transform: rotateX(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spinX {\r\n    0% {\r\n        -webkit-transform: rotateX(0deg);\r\n                transform: rotateX(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotateX(360deg);\r\n                transform: rotateX(360deg);\r\n    }\r\n}\r\n\r\n\r\n.cubeY {\r\n    background: white;\r\n    z-index:-1;\r\n    -webkit-animation:spinY 2s linear infinite;\r\n            animation:spinY 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spinY {\r\n    0% {\r\n        -webkit-transform: rotate3d(0deg);\r\n                transform: rotate3d(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate3d(360deg);\r\n                transform: rotate3d(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spinY {\r\n    0% {\r\n        -webkit-transform: rotate3d(0deg);\r\n                transform: rotate3d(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate3d(360deg);\r\n                transform: rotate3d(360deg);\r\n    }\r\n}\r\n/*\r\n.spinner {\r\n    width:100px;\r\n    height:100px;\r\n    background:#eee;\r\n    border-radius:50%;\r\n    position: relative;\r\n    margin: 50px;\r\n    display: inline-block;\r\n}\r\n\r\n.spinner_1:after,.spinner_1:before {\r\n    display: block;\r\n    content:'';\r\n    width:100px;\r\n    height:100px;\r\n    border-radius:50%;\r\n}\r\n\r\n.spinner_1:after {\r\n    border-radius:50%;\r\n    top:-4px;\r\n    left:-4px;\r\n    position: absolute;\r\n    border:4px solid transparent;\r\n    border-top-color:red;\r\n    border-bottom-color:red;\r\n    animation:spinny 2s linear infinite;\r\n}\r\n\r\n.spinner_2 {\r\n    position: absolute;\r\n    border:4px solid transparent;\r\n    border-top-color:red;\r\n    border-bottom-color:red;\r\n    animation:spinny 2s linear infinite;\r\n}\r\n\r\n@keyframes spinny {\r\n    0% {\r\n        transform:rotate(0deg) scale(1);\r\n    }\r\n    50% {\r\n        transform:rotate(45deg) scale(1.4);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg) scale(1);\r\n    }\r\n}\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar>Navigating...</app-navbar>\n<!--\n<div class=\"bgGrids\">\n        <div [class]=cubeStyle></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cubeX\"></div><div class=\"cube\"></div><div class=\"cubeX\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cubeY\"></div><div class=\"cube\"></div><div class=\"cubeY\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cubeY\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cubeY\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cubeX\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cube\"></div>\n        <div class=\"cubeX\"></div><div class=\"cube\"></div><div class=\"cube\"></div><div class=\"cubeX\"></div>\n      </div>\n    -->  \n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.cubeStyle = 'cube';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_result_result_component__ = __webpack_require__("../../../../../src/app/components/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_report_report_component__ = __webpack_require__("../../../../../src/app/components/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













/*import { LogicComponent } from './components/logic/logic.component';
import { LgmenuComponent } from './components/lgmenu/lgmenu.component';
import { ApmenuComponent } from './components/apmenu/apmenu.component';
import { AptitudeComponent } from './components/aptitude/aptitude.component';
import { TapmenuComponent } from './components/tapmenu/tapmenu.component';
import { TaptitudeComponent } from './components/taptitude/taptitude.component';
import { EvaluateComponent } from './components/evaluate/evaluate.component';
import { CpmenuComponent } from './components/cpmenu/cpmenu.component';
import { CompanyComponent } from './components/company/company.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TestComponent } from './components/test/test.component';
import { EssayComponent } from './components/essay/essay.component';*/





/*import {ImageService} from './services/image.service';
import { TestGuard } from './guards/test.guard';
import { EvaluateGuard } from './guards/evaluate.guard';*/
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_13__components_result_result_component__["a" /* ResultComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_14__components_report_report_component__["a" /* ReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] }
    /*
      {path:'logic', component:LogicComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
      {path:'lgmenu', component:LgmenuComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
      {path:'apmenu', component:ApmenuComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
      {path:'aptitude', component:AptitudeComponent, canActivate:[AuthGuard,EvaluateGuard] },
      {path:'tapmenu', component:TapmenuComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
      {path:'taptitude', component:TaptitudeComponent, canActivate:[AuthGuard,EvaluateGuard] },
      {path:'evaluate', component:EvaluateComponent, canActivate:[AuthGuard] },
      {path:'cpmenu', component:CpmenuComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
      {path:'company', component:CompanyComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
      {path:'resume', component:ResumeComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
      {path:'test', component:TestComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard]},
      {path:'essay', component:EssayComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard]}*/
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_result_result_component__["a" /* ResultComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_report_report_component__["a" /* ReportComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button a {\r\n    text-decoration:none;\r\n    color:white;\r\n}\r\n\r\ndiv a {\r\n    text-decoration: none;\r\n    color:black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\n  Welcome !!!\n</h2>\n\n<div *ngIf=\"tickets\">\n  <div *ngFor=\"let ticket of tickets;let i=index;\">\n      <div class=\"panel {{ticket.priority}}\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n              <a data-toggle=\"collapse\" href=\"#{{i}}\">{{ticket.problem}}<i class=\"fa fa-angle-double-down\"></i></a>\n              <i class=\"fa fa-trash\" (click)=\"deleteTicket(ticket.problem)\" style=\"float:right;margin-right:5px;color:red\"></i>\n            </h4>\n          </div>\n          <div id=\"{{i}}\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">{{ticket.description}}</div>\n            <div class=\"panel-footer\">\n              <div class=\"row\">\n                  <div class=\"col-xs-12 col-md-3\"><i class=\"fa fa-user\" style=\"margin:5px;font-size:20px;color:#1792BA\"></i>{{ticket.name}}</div>\n                  <div class=\"col-xs-12 col-md-3\"><i class=\"fa fa-envelope\" style=\"margin:5px;font-size:20px;color:#1792BA\"></i>{{ticket.email}}</div>\n                  <div class=\"col-xs-12 col-md-3\"><i class=\"fa fa-mobile\" style=\"margin:5px;font-size:20px;color:#1792BA\"></i>{{ticket.contact}}</div>\n                  <div class=\"col-xs-12 col-md-3\"><i class=\"fa fa-calendar\" style=\"margin:5px;font-size:20px;color:#1792BA\"></i>{{ticket.date}}</div>\n              </div> \n            </div>\n          </div>\n        </div>\n  </div>\n</div>\n\n\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <h4 class=\"panel-title\">\n            <a data-toggle=\"collapse\" href=\"#collapse2\">Create new ticket</a>\n          </h4>\n        </div>\n        <div id=\"collapse2\" class=\"panel-collapse collapse\">\n          <div class=\"panel-body\">\n              <form (submit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                    <label>Problem<sup>*</sup></label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"problem\" name=\"problem\">\n                  </div>\n                    \n                  <div class=\"form-group\">\n                    <label>Description<sup>*</sup></label><!--\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\">-->\n                    <textarea class=\"form-control\" [(ngModel)]=\"description\" name=\"description\">\n                    </textarea>\n                  </div>\n    \n                  <div class=\"form-group\">Choose you priority<sup>*</sup><br>\n                    <label>\n                    <input type=\"radio\" name=\"level\" (click)=\"low()\">Low</label>\n                    <label>\n                    <input type=\"radio\" name=\"level\" (click)=\"high()\">High</label>\n                  </div>\n                  <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\">\n              </form>\n          </div>\n        </div>\n      </div>\n\n\n\n<div *ngIf=\"spin\" id=\"container\">\n  <div class=\"loadingbar\"></div>\n</div>\n\n<!--\n<div class=\"col-lg-12 col-xs-12\" style=\"margin-right:20px;text-align:center\"\n    *ngIf=test [routerLinkActive]=\"['active']\" \n    [routerLinkActiveOptions]=\"{exact:true}\"><a>Test Status</a><br><br>\n    <button  class=\"btn btn-success\" *ngIf=show1 (click)=\"testOn()\">Activate</button>\n    <button  class=\"btn btn-success\" *ngIf=show3 (click)=\"testOff()\">Stop</button>\n    <button class=\"btn btn-danger\" *ngIf=show2 (click)=\"delete()\">Delete</button>\n</div>\n\n\n<div class=\"well col-lg-5 col-xs-12\" style=\"margin-right:20px;text-align:center\"\n    *ngIf=\"authService.isStudent()\" [routerLinkActive]=\"['active']\" \n    [routerLinkActiveOptions]=\"{exact:true}\">Custom test<br><br>\n    <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" placeholder=\"Enter your mentor id\">\n    <button  class=\"btn btn-success\" (click)=\"search()\">Search</button><br><br>\n    <button  class=\"btn btn-success\" (click)=\"attempt()\" *ngIf=active>Attempt test</button><br><br>\n    <div *ngIf=inactive>No test available</div>\n    <div *ngIf=noAttempt>No more attempts are allowed</div>\n</div>\n\n<div class=\"well col-lg-5 col-xs-12\" style=\"margin-right:20px;text-align:center\"\n     *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n     [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/lgmenu\">Logic</a></div>\n\n<div class=\"well col-lg-5 col-xs-12\" style=\"margin-right:20px;text-align:center\" \n     *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n     [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/apmenu\">General Aptitude</a></div>\n\n<div class=\"well col-lg-5 col-xs-12\" style=\"margin-right:20px;text-align:center\"\n      *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n      [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/tapmenu\">Technical Aptitude</a></div>\n    \n<div class=\"well col-lg-5 col-xs-12\" style=\"margin-right:20px;text-align:center\" \n      *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" \n      [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/essay\">Essay writing</a></div>\n</div>\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title\">Your feedback</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div [ngStyle]=\"{'display':showin}\">\n          <h3>Your feedback is valuable to us and will be posted in the home page</h3>\n          <form (submit)=\"save(new.value)\">\n              <label>Feedback<sup>*</sup></label>\n              <input type=\"text\" #new class=\"form-control\"/>\n              <h5 style=\"color:red\" *ngIf=\"msg\">Your feedback is required<sup>*</sup></h5><br>\n              <!--\n              <input class=\"btn btn-success\" type=\"submit\" style=\"float:right;margin-right:20px;\" value=\"Save\"/>\n              <span class=\"modal-footer\">\n              <input class=\"btn btn-success\" type=\"submit\" value=\"Save\"/>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n  <div class=\"backdrop\" [ngStyle]=\"{'display':display2}\"></div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display2}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h2 class=\"modal-title\">Passage writing</h2>\n        </div>\n        <div class=\"modal-body\">\n          <div [ngStyle]=\"{'display':showin2}\">\n            <h3>{{essayTitle}}</h3>\n            <form (submit)=\"save2(text.value)\">\n                <label>Passage<sup>*</sup></label>\n                <textarea #text class=\"form-control\" rows=\"10\" name=\"quest\">\n                  </textarea>\n                <h5 style=\"color:red\" *ngIf=\"msg2\">Your passage is required with minimum 50 characters<sup>*</sup></h5><br>\n                <!--\n                <input class=\"btn btn-success\" type=\"submit\" style=\"float:right;margin-right:20px;\" value=\"Save\"/>\n                <span class=\"modal-footer\">\n                <input class=\"btn btn-success\" type=\"submit\" value=\"Save\"/>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n-->"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, router, flashmessage) {
        this.authService = authService;
        this.router = router;
        this.flashmessage = flashmessage;
        this.now = new Date();
        this.currdate = this.now.toString().substring(0, 21);
        this.spin = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flashmessage.show('Choose your section to solve', {
            cssClass: 'alert-info',
            timeout: 3000
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.spin = false;
            _this.user = profile.user;
            console.log(_this.user);
            _this.authService.getTicket("users/ticket/" + _this.user.email).subscribe(function (tkt) {
                _this.tickets = tkt;
                console.log(_this.tickets);
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.low = function () {
        this.priority = 'panel-default';
    };
    DashboardComponent.prototype.high = function () {
        this.priority = 'panel-danger';
    };
    DashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        var ticket = {
            email: this.user.email,
            name: this.user.name,
            problem: this.problem,
            description: this.description,
            contact: this.user.contact,
            priority: this.priority,
            date: this.currdate
        };
        console.log(ticket);
        this.authService.postTicket(ticket).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.flashmessage.show('Your ticket has been posted successfully', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
            }
        });
        this.authService.getTicket("users/ticket/" + this.user.email).subscribe(function (tkt) {
            _this.tickets = tkt;
            console.log(_this.tickets);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.deleteTicket = function (pro) {
        var _this = this;
        this.authService.deleteTicket("users/ticket/" + this.user.email + "/" + pro).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.flashmessage.show('Your ticket has been deleted successfully', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
            }
        });
        this.authService.getTicket("users/ticket/" + this.user.email).subscribe(function (tkt) {
            _this.tickets = tkt;
            console.log(_this.tickets);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr;\r\n      grid-template-columns: 1fr;\r\n  grid-gap: 10vh;\r\n  font-family: Century Gothic, sans-serif;\r\n}\r\n/*\r\n.home {\r\n  width:99vw;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-auto-rows: 97vh;\r\n  background: url(../../../assets/img1_2.jpg) no-repeat center center fixed;\r\n  background:grey;\r\n  -webkit-background-size: cover;\r\n  -moz-background-size: cover;\r\n  -o-background-size: cover;\r\n  background-size: cover;\r\n  align-items: end;\r\n}\r\n*/\r\n\r\n.home {\r\n  width:99vw;\r\n  height:100vh;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr;\r\n      grid-template-columns: 1fr;\r\n  -ms-grid-rows: 0.3fr 2fr 0.7fr;\r\n      grid-template-rows: 0.3fr 2fr 0.7fr;\r\n  background:#1792BA;\r\n  -webkit-grid-template-rows: 0.3fr 2fr 0.7fr;\r\n  -webkit-background:#1792BA;\r\n  background-size: cover;\r\n}\r\n\r\n.banner {\r\n  padding-top:11vh;\r\n  font-size:27px;\r\n  color:white;\r\n  margin-left:3vh;\r\n  margin-bottom:4vh;\r\n}\r\n\r\n.bannerHeader {\r\n  padding-top:0px;\r\n  color:#F9AF26;\r\n  font-size:50px;\r\n}\r\n\r\n.quotes {\r\n  padding-left:6vw;\r\n}\r\n\r\n.bannerGreet {\r\n  background: white;\r\n}\r\n\r\n.homebtn {\r\n  color:white;\r\n  text-decoration:none;\r\n  border:1px solid white;\r\n  padding:2vh;\r\n  font-size:25px;\r\n  margin:20px;\r\n  margin-left:0;\r\n  margin-top: 50px;\r\n}\r\n\r\n.homebtn:hover {\r\n  color:#F9AF26;\r\n  text-decoration:none;\r\n  border:1px solid #F9AF26;\r\n  background: white;\r\n}\r\n\r\n.banner1 {\r\n  width:170px;\r\n  margin-left:0;\r\n}\r\n\r\n.banner2 {\r\n  margin-left:4vh;\r\n  margin-top:2vh;\r\n  margin-bottom:5vh;\r\n}\r\n\r\n.greeting {/*\r\n  top:80%;\r\n  left:0;\r\n  right:0;\r\n  position:absolute;\r\n  background: rgba(244, 241, 241, 0.50);*/\r\n  background: white;\r\n  height:5vh;/*\r\n  padding-bottom: 10px;*/\r\n  text-align: center;\r\n}\r\n\r\n.greetingHeader {\r\n  font-size:20px;\r\n  padding-bottom:8px;\r\n  padding-top:8px;\r\n}\r\n\r\n.jargon {\r\n  font-size: 17px;/*\r\n  padding:10px;*/\r\n}\r\n\r\n.icons {\r\n  margin-bottom: 10px;\r\n  color:#1792BA;\r\n  font-size: 45px;/*\r\n  padding-right: 5px;*/\r\n  padding:0;\r\n}\r\n\r\n#showcase1 {/*\r\n  position:absolute;\r\n  top:90%;\r\n  left:0;*/\r\n}\r\n\r\n#showcase {/*\r\n  padding-top:60px;*/\r\n  text-align: center;\r\n  background: white;/*\r\n  position:absolute;\r\n  top:110%;\r\n  left:0;\r\n  right:0;\r\n  position:relative;*/\r\n}\r\n \r\n  .try {\r\n    display:inline-block;\r\n  }\r\n  \r\n  .offer1 {/*\r\n    border-radius: 5px;\r\n    margin:60px;\r\n    height:250px;\r\n    padding: 20px;*/\r\n    margin-left:150px;\r\n  }\r\n\r\n  .offer {\r\n    margin:30px 60px;\r\n  }\r\n\r\n\r\n /* \r\n  .card {\r\n      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n      transition: 0.3s;\r\n  }\r\n  \r\n  .card:hover {\r\n      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  }*/\r\n  /*\r\n  .container {\r\n      position: relative;\r\n  }\r\n  */\r\n\r\n  .image {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    opacity: 1;\r\n    display: block;\r\n    width: 400px;\r\n    height: 250px;\r\n    transition: .5s ease;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n  }\r\n\r\n  .image:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  }\r\n  \r\n  .middle {\r\n    transition: .5s ease;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\r\n  \r\n  .container:hover .image {\r\n    opacity: 0.3;\r\n  }\r\n  \r\n  .container:hover .middle {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .container:hover .title {\r\n    opacity: 0;\r\n  }\r\n\r\n  .text {\r\n    background-color:#1792BA;\r\n    color: white;\r\n    font-size:0px;\r\n    padding: 5px 10px;\r\n    border-radius: 3%;\r\n  }\r\n  \r\n  .title {\r\n    opacity:1;\r\n    position: absolute;\r\n    top:50%;\r\n    left:50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    color:white;\r\n  }\r\n  \r\n  #host1 {/*\r\n    position:absolute;\r\n    top:220%;*/\r\n  }\r\n\r\n  #host {\r\n    text-align: center;\r\n    background: white;/*\r\n    position:absolute;\r\n    top:230%;\r\n    margin-top:60px;*/\r\n  }\r\n  \r\n  .hideImg {\r\n    border:10px inset white;\r\n    border-radius: 50%;\r\n    background:rgba(0, 0, 0, 0.1);\r\n    width:200px;\r\n    height:200px;\r\n    margin:40px;\r\n    margin-left:20%;\r\n    padding: 20px;\r\n  }\r\n  \r\n  .motto {\r\n    margin:40px;/*\r\n    margin-top:130px;*/\r\n    height:100px;\r\n    padding: 20px;\r\n    padding-top:100px;\r\n    font-size: 40px;\r\n  }\r\n\r\n  .section {\r\n  }\r\n  \r\n  #home {\r\n      height:100%;\r\n  }\r\n  \r\n  #contact {/*\r\n      position: absolute;\r\n      top:355%;\r\n      left:0;*/\r\n      width:100%;\r\n      margin-top:-40vh;\r\n  }\r\n  \r\n  #img2 {/*\r\n    position: absolute;\r\n    top:310%;\r\n    left:0;*/\r\n    margin-top:-5vh;\r\n    width:100%;\r\n  }\r\n  \r\n  .row1 {\r\n    margin:4% 8%;\r\n  }\r\n  \r\n  .cols2 {\r\n    text-align:center;\r\n    margin:4%;\r\n  }\r\n  \r\n  .row2 {\r\n    text-align:center;\r\n  }\r\n  \r\n  #contact2 {/*\r\n      position: absolute;\r\n      top:395%;\r\n      left:0;\r\n      margin-top:-20vh;*/\r\n      width:102%;\r\n      background: rgba(23, 146, 186, 0.5);\r\n  }\r\n    \r\n\r\n/*\r\n  .wrapper {\r\n      margin: 0 auto;\r\n      padding: 28px 0 0 0;\r\n  }\r\n */ \r\n  \r\n  /*\r\n  .titleBar {\r\n      text-align:center;\r\n      height:40px;\r\n      top:0;\r\n      left:0;\r\n      right:0;\r\n      background: white;\r\n    }*/\r\n/* Dark transparent\r\n      background: rgba(0, 0, 0, 0.5);*/\r\n      \r\n\r\n   \r\n      .navbar {\r\n        background: rgba(244, 241, 241, 0.50);\r\n        border: none;\r\n        width: 100%;\r\n        color:black;\r\n        position:fixed;\r\n        top:0;\r\n        left:0;\r\n        text-align: center;\r\n        z-index:1;\r\n        font-family: Century Gothic, sans-serif;\r\n      }\r\n      \r\n      .navbar-header {\r\n        font-size:25px;\r\n        width:100%;\r\n        text-align: center;\r\n        color:black;\r\n      }\r\n      \r\n      .navbar-header > a {\r\n        color:black;\r\n        float: none;\r\n        display: inline-block;\r\n      }\r\n      \r\n      .navbar-nav {  \r\n        width: 100%;\r\n        text-align: center;\r\n      }\r\n      \r\n      .navbar-nav > li > a {\r\n        font-size: 19px;  \r\n        text-align: center;\r\n        color:black;\r\n        display: inline-block;\r\n      }\r\n      \r\n      .navbar-nav > li :hover {\r\n        text-align: center;\r\n        color:white;\r\n      }\r\n    \r\n      .navbar-nav {  \r\n        width: 100%;\r\n        text-align: center;\r\n      }\r\n      \r\n      .navbar-nav > li {  \r\n        float: none;\r\n        display: inline-block;\r\n      }\r\n    \r\n    .navbar-default .navbar-nav>.active>a,\r\n    .navbar-default .navbar-nav>.active>a:hover,\r\n    .navbar-default .navbar-nav>.active>a:focus {\r\n        color:white;\r\n        background:none;\r\n        border-bottom: 1.5px solid white;\r\n        display: inline-block;\r\n    }\r\n    \r\n    .active { \r\n      color:white;\r\n      background:none;\r\n    }\r\n  \r\n  .cover-img {\r\n      position:absolute;\r\n      top:0;\r\n      left:0;\r\n      right:0;\r\n      bottom:0;\r\n      background-size: cover;\r\n  }\r\n/*\r\n  .pic {\r\n    padding-top:30px;\r\n    padding-bottom:50px;\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n    margin:40px;\r\n    margin-left:30%;\r\n    width:350px;\r\n    height:500px;\r\n    background: #EAE7E7;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n    transform: rotate(-20deg);\r\n  }\r\n\r\n  .hostImg {\r\n    width:300px;\r\n    height:400px;\r\n  }\r\n*/\r\n\r\n.pic {\r\n  width:400px;\r\n  height:400px;\r\n  margin:40px;\r\n  margin-left:30%;\r\n  background-image:url(" + __webpack_require__("../../../../../src/assets/picFrame1.jpg") + ");\r\n  opacity:0.7;\r\n  -webkit-animation: cog3 5s linear 0s infinite;\r\n          animation: cog3 5s linear 0s infinite;\r\n  /*\r\n  width:350px;\r\n  height:350px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);*/\r\n}\r\n\r\n.hostImg {\r\n  margin-top:-500px;\r\n  margin-left:195px;\r\n  width:271px;\r\n  height:271px;\r\n  border-radius:50%;\r\n  opacity:0.7;\r\n}\r\n\r\n  .greetingMobile,.appTitle {\r\n    display: none;\r\n  }\r\n  \r\n  \r\n    @media only screen and (max-width: 500px) { \r\n          \r\n      .home {/*\r\n        background: url(../../../assets/home.jpg) no-repeat center center fixed;*/\r\n      }\r\n\r\n      .homebtn {\r\n        display:none;\r\n      }\r\n\r\n      .banner {\r\n        margin-left:0;\r\n        padding-top:0;\r\n        font-size:20px;\r\n        color:white;\r\n      }\r\n\r\n      .quotes {\r\n        padding-left:3vw;\r\n        font-family: Century Gothic, sans-serif;\r\n      }\r\n      \r\n      .bannerHeader {\r\n        padding-top:10px;\r\n        color:#F9AF26;\r\n        font-size:30px;\r\n      }\r\n      \r\n      .banner1 {\r\n        margin-left:0;\r\n        width:100px;\r\n      }\r\n\r\n      .banner2 {\r\n        margin:0 0px;\r\n        width:200px;\r\n        margin-left:0;\r\n      }\r\n\r\n      .image {\r\n        width:300px;\r\n        height:200px;\r\n      }\r\n\r\n      .offer1 {\r\n        margin-left:3vw;\r\n      }\r\n\r\n      \r\n      .offer {\r\n        margin:20px 0px;\r\n      }\r\n\r\n\r\n      .hideImg {\r\n        border:10px inset white;\r\n        border-radius: 50%;\r\n        background:rgba(0, 0, 0, 0.1);\r\n        width:150px;\r\n        height:150px;/*\r\n        margin-top:20px;\r\n        margin-bottom:20px;*/\r\n        margin-left:20%;/*\r\n        padding: 20px;*/\r\n      }\r\n      \r\n      .motto {/*\r\n        margin-bottom:20px;*/\r\n        margin-left:3%;\r\n        margin-top:0px;\r\n        height:100px;\r\n        font-size:20px;\r\n        padding-top:0px;/*\r\n        padding: 20px;*/\r\n      }\r\n    \r\n      .greetingMobile {\r\n        display: block;/*\r\n        background: rgba(244, 241, 241, 0.50);\r\n        height:20%;*/\r\n        text-align: center;\r\n        padding:15px;\r\n      }\r\n/*\r\n      .greeting,.navbar-collapse,.navbar-toggle {\r\n        display: none;\r\n      }*/\r\n\r\n      .greeting {\r\n        display: none;\r\n      }\r\n/*\r\n      .appTitle {\r\n        display: block;\r\n        position: fixed;\r\n        top:0;\r\n        left:0;\r\n        background: rgba(1, 44, 58, 0.50);\r\n        font-size:25px;\r\n        padding:7px;\r\n        width:100%;\r\n        text-align:center;\r\n      }\r\n*/\r\n      .jargon:hover {\r\n        background:white;\r\n        color:rgb(77, 44, 242);\r\n      }\r\n\r\n      .pic {\r\n        display:none;\r\n        /*\r\n        margin:40px;\r\n        margin-left:20%;\r\n        background:none;\r\n        border-radius: 50%;\r\n        box-shadow:0 8px 16px 0 rgba(0,0,0,0.1);\r\n        width:200px;\r\n        height:200px;\r\n        opacity:1;\r\n        border:10px solid grey;*/\r\n      }\r\n    \r\n      .hostImg {\r\n        margin-top:0px;\r\n        margin-left:-5vw;\r\n        border:15px solid lightgrey;\r\n        border-radius: 50%;\r\n        box-shadow:0 8px 16px 0 rgba(0,0,0,0.1);\r\n        width:200px;\r\n        height:200px;\r\n      }\r\n    \r\n    }\r\n\r\n/*\r\n    @media only screen and (min-width: 1200px) {\r\n      \r\n      .wrapper {\r\n        position:absolute;\r\n        top:0;\r\n        left:0;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-gap: 10vh;\r\n      }\r\n\r\n      .home {\r\n        width:100vw;\r\n        height:100vh;\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 0.3fr 2fr 0.7fr;\r\n        background:#1792BA;\r\n        -webkit-grid-template-rows: 0.3fr 2fr 0.7fr;\r\n        -webkit-background:#1792BA;\r\n        -webkit-background-size: cover;\r\n        -moz-background-size: cover;\r\n        -o-background-size: cover;\r\n        background-size: cover;\r\n      }\r\n    }\r\n\r\n    */\r\n    /*\r\n\r\n    @media only screen and (max-width: 600px) { \r\n    }\r\n\r\n    @media only screen and (min-width: 600px) {\r\n      \r\n    }\r\n    \r\n    @media only screen and (max-width: 768px) {\r\n      \r\n    }\r\n    \r\n    @media only screen and (min-width: 992px) {\r\n      \r\n    }\r\n    \r\n    @media only screen and (min-width: 1200px) {\r\n      \r\n    }*/\r\n\r\n/*\r\ndiv.card {\r\n    box-shadow: 0 4px 8px 0 rgba(241, 104, 104, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    text-align: center;\r\n    font-style: italic;\r\n    margin-right:60px;\r\n    background: #EEC77F;\r\n}\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"custom\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\" style=\"font-size:30px;font-family: Century Gothic, sans-serif;\">Techfix Solutions</a><!--\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>-->\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\" style=\"font-family: Century Gothic, sans-serif;\">\n          <li class=\"active\"><a [ngStyle]=\"marginLeft\" href=\"#home\" class=\"scroll\">Home</a></li>\n          <li><a href=\"#showcase1\" class=\"scroll\">Services</a></li>\n          <li><a href=\"#host1\" class=\"scroll\">About</a></li>\n          <li><a href=\"#contact\" class=\"scroll\">Contact</a></li><!--\n          <li class=\"pull-right\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n          <li class=\"pull-right\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>-->\n            <li class=\"pull-right\" *ngIf=\"authService.loggedIn()\"><a href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\n            <li class=\"pull-right\" *ngIf=\"authService.loggedIn() && authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/result\">Users</a></li>\n            <li class=\"pull-right\" *ngIf=\"authService.loggedIn() && authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/report\">Tickets</a></li>\n\n            <li class=\"pull-right\" *ngIf=\"authService.loggedIn() && !authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n            <!--\n            <li class=\"pull-right\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/profile\">Profile</a></li>\n            -->\n            <li class=\"pull-right\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/register\">Sign Up</a></li>\n            <li class=\"pull-right\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/login\">Login</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  </div>\n\n  <div class=\"wrapper\">\n\n  <div class=\"home section\" id=\"home\">\n  <div></div>\n  <div class=\"banner\">\n      <div class=\"col-xs-12 col-md-4 col-lg-4 quotes\">\n        <h1 class=\"bannerHeader\">Destined to fix</h1>\n        We solve all issues related to mobile phones, desktop and laptop computers.<br><br>\n        <a class=\"homebtn\" routerLink=\"/register\">Sign Up</a>\n      </div>\n      <div class=\"col-md-1 col-lg-1\"></div>\n      <div class=\"col-md-7 col-lg-7\">\n        <img style=\"padding-top:10px;\" class=\"banner1\" src=\"../../../assets/banner2.png\" alt=\"img1\">\n        <img style=\"padding-top:5px;\" class=\"banner2\" src=\"../../../assets/banner1.png\" alt=\"img2\">\n      </div>\n  </div>\n  <div class=\"bannerGreet\">\n      <div class=\"greeting row section\">\n        <div class=\"greetingHeader\">HAVE YOU REACHED US FOR</div>\n        <div class=\"jargon col-md-3 col-xs-12 col-lg-3\">\n          <i class=\"icons fa fa-apple\"></i>\n          <i class=\"icons fa fa-linux\"></i>\n          <i class=\"icons fa fa-windows\"></i><br>\n          OS Installation & Application support\n        </div>\n        <div class=\"jargon col-md-3 col-xs-12 col-lg-3\">\n          <i class=\"icons fa fa-lock\"></i><br>\n          End point Security\n        </div>\n        <div class=\"jargon col-md-3 col-xs-12 col-lg-3\">\n          <i class=\"icons fa fa-cog\"></i>\n          <i class=\"icons fa fa-check\"></i><br>\n          Recovery & Maintenance\n        </div>\n        <div class=\"jargon col-md-3 col-xs-12 col-lg-3\">\n          <i class=\"icons fa fa-desktop\"></i>\n          <i class=\"icons fa fa-mouse\"></i>\n          <i class=\"icons fa fa-edit\"></i><br>\n          Accessories Purchase\n        </div>\n      </div>\n\n      <div class=\"greetingMobile row\">\n          <div class=\"jargon col-xs-6\">\n              <a routerLink=\"/register\" style=\"text-decoration:none\"><span class=\"glyphicon glyphicon-user icons\"></span><br>Sign Up</a>\n          </div>\n          <div class=\"jargon col-xs-6\">\n              <a routerLink=\"/login\" style=\"text-decoration:none\"><span class=\"glyphicon glyphicon-log-in icons\"></span><br>Login</a>\n          </div>\n      </div>\n\n      <div class=\"appTitle\">\n          Techfix Solutions\n      </div>\n    \n    \n    <!--<img class=\"cover-image\" src=\"../../../assets/img1_2.jpg\" alt=\"cover image\">\n  </div>\n  \n  <section id=\"home\">\n    <div id=\"image\" style=\"padding:0\">h\n    </div>\n  </section>-->\n  </div>\n  </div>\n\n    \n      <!--<section class=\"section\" id=\"purpose\">-->\n  <div class=\"row section\" id=\"showcase1\">\n      <section class=\"section\">\n      </section>\n  </div>\n<!--  class=\"animated infinite bounce\" >-->\n      <div class=\"row section\">\n      <section class=\"section\" id=\"showcase\">\n        <div class=\"row try\">\n          <div class=\"col-xs-10 col-md-12\">\n              <!--<img id=\"\" src=\"../../../assets/offer2.svg\" alt=\"img\" style=\"box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)\">-->\n              <img id=\"\" src=\"../../../assets/offer3.jpg\" alt=\"img\">\n          </div>\n        </div>\n        <div class=\"offer1\">\n          <div class=\"offer col-xs-10 col-md-4 card container\">\n            <img src=\"../../../assets/software.jpg\" class=\"image\">\n            <h4 class=\"title\">Software Installations & Troubleshooting</h4>\n            <div class=\"middle\">\n                <div class=\"text\">\n                  <h4>Software Installations & Troubleshooting</h4>\n                  <h5>Any required softwares can be installed and troubles can be solved anytime required.</h5>\n                </div>\n            </div>\n          </div>\n      \n          <div class=\"offer col-xs-10 col-md-4 card container\">\n            <img src=\"../../../assets/endpoint.jpg\" class=\"image\">\n            <h4 class=\"title\">Endpoint security</h4>\n            <div class=\"middle\">\n                <div class=\"text\">\n                  <h4>End point security</h4>\n                  <h5>Device security can be monitored when online.</h5>\n                </div>\n            </div>\n          </div>\n      <!--\n          <div class=\"offer col-xs-10 col-md-3 card container\">\n            <img src=\"\" class=\"image\">\n            <h4 class=\"title image\">Desktop & Laptop Sales & Service</h4>\n            <div class=\"middle\">\n                <div class=\"text\">\n                  <h4>Desktop & Laptop Sales & Service</h4>\n                  <h5>Any required softwares can be installed and troubled anytime required.</h5>\n                </div>\n            </div>\n          </div>\n        -->   \n          <div class=\"offer col-xs-10 col-md-4 card container\">\n            <img src=\"../../../assets/network.jpg\" class=\"image\">\n            <h4 class=\"title\">Network Patching & Cabling</h4>\n            <div class=\"middle\">\n                <div class=\"text\">\n                  <h4>Network Patching & Cabling</h4>\n                  <h5>Along with this network devices sales and maintenance is done.</h5>\n                </div>\n            </div>\n          </div>\n      \n          <div class=\"offer col-xs-10 col-md-4 card container\">\n            <img src=\"../../../assets/data.jpg\" class=\"image\">\n            <h4 class=\"title\">Data Centre Maintenance</h4>\n            <div class=\"middle\">\n                <div class=\"text\">\n                  <h4>Data Centre Maintenance</h4>\n                  <h5>Facilties for data recovery and backup setup is available.</h5>\n                </div>\n            </div>\n          </div>\n      <!--\n          <div class=\"offer col-xs-10 col-md-3 card container\">\n            <img src=\"../../../assets/software.jpg\" class=\"image\">\n            <h4 class=\"title image\">Data recovery & Backup setup</h4>\n            <div class=\"middle\">\n                <div class=\"text\">\n                  <h4>Data recovery & Backup setup</h4>\n                  <h5>Any required softwares can be installed and troubled anytime required.</h5>\n                </div>\n            </div>\n          </div>\n        -->\n          <div class=\"offer col-xs-10 col-md-4 card container\">\n            <img src=\"../../../assets/lap-access.jpg\" class=\"image\">\n            <h4 class=\"title\">Laptop Accessories Sales</h4>\n            <div class=\"middle\">\n                <div class=\"text\">\n                  <h4>Laptop Accessories Sales</h4>\n                  <h5>Accessories of all laptop makers can be bought.</h5>\n                </div>\n            </div>\n          </div>\n      \n          <div class=\"offer col-xs-10 col-md-4 card container\">\n            <img src=\"../../../assets/desk-access.jpg\" class=\"image\">\n            <h4 class=\"title\">Desktop Accessories Sales</h4>\n            <div class=\"middle\">\n                <div class=\"text\">\n                  <h4>Desktop Accessories Sales</h4>\n                  <h5>All accessories of desktop computers are sold.</h5>\n                </div>\n            </div>\n          </div>\n      <!--\n          <div class=\"offer col-xs-10 col-md-3 card container\">\n            <img src=\"\" class=\"image\">\n            <h4 class=\"title image\">Network devices Sales & Maintenance</h4>\n            <div class=\"middle\">\n                <div class=\"text\">\n                  <h4>Network devices Sales & Maintenance</h4>\n                  <h5>Any required softwares can be installed and troubled anytime required.</h5>\n                </div>\n            </div>\n          </div>-->\n        </div>\n      </section>\n      </div>\n    \n      <!--<section class=\"section\" id=\"profile\">-->\n      <div class=\"row\" id=\"host1\">\n      <section>\n      </section>\n      </div>\n\n\n      <div class=\"row section\">\n      <section class=\"section\" id=\"host\">\n          <div class=\"row\">\n            <div class=\"col-xs-10 col-md-12\">\n              <!--<img style=\"height:150px;width:150px\" id=\"\" src=\"../../../assets/about1.svg\" alt=\"img\">-->\n              <img style=\"height:150px;width:150px\" id=\"\" src=\"../../../assets/about.jpg\" alt=\"img\">\n            </div>\n            <div class=\"hideImg1 col-xs-12 col-md-5\">\n              <div class=\"pic\">\n              </div>\n              <img class=\"hostImg\" src=\"../../../assets/bharath.jpg\" alt=\"img\">\n            </div>\n            <div class=\"motto col-xs-12 col-md-5\">\n              <h3>\"We are pleased to provide you the best service with quality and care.\"</h3>\n              <h4 style=\"float:right\">\n                -- Bharath Kumar,<br>\n                  Founder and CEO\n              </h4>\n            </div>\n          </div>\n      </section>\n      </div>\n      <!--\n<br>\n\n      <i class=\"icons fa fa-desktop\" style=\"font-size:80px;position:absolute;top:0;left:0\"></i>\n      <i class=\"fa fa-cog fa-spin fa-3x fa-fw\" style=\"color:skyblue;position:absolute;top:-25px;left:-61px;\"></i>\n      -->\n\n      <!--\n      <div id=\"contact\">\n          <img id=\"img2\" src=\"../../../assets/img2.jpg\" alt=\"img\">\n      </div>\n    -->\n\n      <div id=\"contact\">\n        <section>\n        </section>\n      </div>\n\n      <div class=\"row section\" id=\"contact2\">\n      <section class=\"section\">\n        <div class=\"row row1\">\n          <div class=\"cols col-xs-12 col-md-1\">\n            <h5>Home</h5>\n            <h5>Services</h5>\n            <h5>About</h5>\n            <h5>Contact</h5>\n            <h5>Dashboard</h5>\n          </div>\n\n          <div class=\"cols col-xs-12 col-md-2\">\n              <h5>Software Installations & Troubleshooting</h5>\n              <h5>End point security</h5>\n              <h5>Desktop & Laptop Sales & Service</h5>\n              <h5>Network Patching & Cabling</h5>\n              <h5>Data Centre Maintenance</h5>\n          </div>\n\n          <div class=\"cols col-xs-12 col-md-2\">\n              <h5>Data recovery & Backup setup</h5>\n              <h5>Laptop Accessories Sales</h5>\n              <h5>Desktop Accessories Sales</h5>\n              <h5>Network devices Sales & Maintenance</h5>\n          </div>\n\n          <div class=\"cols2 col-xs-12 col-md-6\">\n            <h3 class=\"row\">Reach us</h3>\n            <h2 class=\"row\">98775 87743</h2>\n          </div>\n        </div>\n        <!--\n        <div class=\"row row2\">\n          <h4>\n            Are you in need of cool websites, visit VDesign.com .\n          </h4>\n        </div>-->\n\n        <div class=\"row row2\">\n          <h4>\n            Copyight &copy; Techfix Solutions 2018 .\n          </h4>\n        </div>\n      </section>\n    </div>\n  </div>\n\n\n<!--\n<div class=\"spinner\">\n    <div class=\"spinner_1\"></div>\n    <div class=\"spinner_2\"></div>\n    <div class=\"spinner_3\"></div>\n    <div class=\"spinner_4\"></div>\n</div>-->\n\n<!--\n<canvas #myCanvas style=\"left:0;top:0;z-index:-1;position:absolute;\">\n</canvas>\n-->\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    /*
    comments=['"1 I am preparing for entrance exams.Great experience over here."  --rahul',
              '"2 I am preparing for entrance exams.Great experience over here."  --ravi',
              '"3 I am preparing for entrance exams.Great experience over here."  --ram',
              '"1 I am preparing for placements .Amazing experience over here."  --axul',
              '"2 I am preparing for placements .Amazing experience over here." --soorya',
              '"3 I am preparing for placements .Amazing experience over here."  --capeta'];
    */
    function HomeComponent(authService, router, flashmessage) {
        this.authService = authService;
        this.router = router;
        this.flashmessage = flashmessage;
        this.spinStyle = 'spin45 2s linear infinite';
        this.angles = 0;
        this.cycle = 0;
        this.i = 0;
        this.j = 0;
    }
    //@Input() public width = 400;
    //@Input() public height = 400;
    HomeComponent.prototype.ngOnInit = function () {
        var temp = Math.floor(window.innerWidth * 14 / 100) + 'px';
        console.log(temp);
        this.marginLeft = {
            'margin-left': temp
        };
        /*
        $('nav a').on('click', function() {
          console.log('working...');
        });
        
        $('nav a').on('click', function() {
          $('nav a').removeClass('active');
          
                var scrollAnchor = $(this).attr('data-scroll');
                if(scrollAnchor!==undefined) {
                  var  scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top -100;
                  $('body,html').animate({
                      scrollTop: scrollPoint
                  }, 500);
                  $('nav a').addClass('active');
                }
                return false;
            
            });
          
            $(window).scroll(function() {
    
              var windscroll = $(window).scrollTop();
              if (windscroll >= 100) {
                  $('nav').addClass('fixed');
                  $('.wrapper .section').each(function(i) {
                      if ($(this).position().top <= windscroll - 20) {
                          $('nav li.active').removeClass('active');
                          $('nav li').eq(i).addClass('active');
                      }
                  });
          
              } else {
                  //$('#1').stop().fadeOut();
                  $('nav').removeClass('fixed');
                  $('nav li.active').removeClass('active');
                  $('nav li:first').addClass('active');
              }
              /*
              if(windscroll>=1000) {
                $('.navbar-nav li a').css('color', 'black');
                //$('.navbar-nav li a:hover').css('color', 'white');
                $('.navbar-nav li a').hover(function(){
                  $(this).css("color", "white");
                  }, function(){
                  $(this).css("color", "black");
              });
              }
              else {
                //$('.navbar').css('background', 'rgba(0, 0, 0, 0.5)');
                //$('nav li.active').css();
              }
          
            }).scroll();
            */
        __WEBPACK_IMPORTED_MODULE_4_jquery__(document).ready(function () {
            var scrollLink = __WEBPACK_IMPORTED_MODULE_4_jquery__('.scroll');
            // Smooth scrolling
            scrollLink.click(function (e) {
                e.preventDefault();
                __WEBPACK_IMPORTED_MODULE_4_jquery__('body,html').animate({
                    scrollTop: __WEBPACK_IMPORTED_MODULE_4_jquery__(this.hash).offset().top
                }, 1000);
                //$(this).addClass('animated fadeInUp');
                console.log('clicked...');
            });
            // Active link switching
            __WEBPACK_IMPORTED_MODULE_4_jquery__(window).scroll(function () {
                var scrollbarLocation = __WEBPACK_IMPORTED_MODULE_4_jquery__(this).scrollTop();
                scrollLink.each(function () {
                    var sectionOffset = __WEBPACK_IMPORTED_MODULE_4_jquery__(this.hash).offset().top - 60;
                    console.log("1:" + sectionOffset + "2:" + scrollbarLocation);
                    if (scrollbarLocation >= 250) {
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('.navbar').css('background', 'rgba(23,146,186,0.5)');
                        /*$('.navbar-nav > li > a').css('color','white');
                        $('.navbar-nav > li > a').hover(
                          function() {
                            $(this).css('color','blue');
                          },
                          function() {
                            $(this).css('color','white');
                          }
                    );*/
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('.navbar-nav').find('li.active').css('font-size', '30px');
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('.navbar-header > a').css('color', 'black');
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('.navbar').css('background', 'rgba(244, 241, 241, 0.50)');
                        /*$('.navbar-nav > li > a').css('color','black');
                        $('.navbar-nav > li > a').hover(
                          function() {
                            $(this).css('color','blue');
                          },
                          function() {
                            $(this).css('color','black');
                          }
                        );*/
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('.navbar-nav').find('li.active').css('color', 'blue');
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('.navbar-header > a').css('color', 'black');
                    }
                    /*
                    if ( sectionOffset <= scrollbarLocation ) {
                      $(this.hash).hide();
                      $(this.hash).show().addClass('animated fadeInUp');
                      $(this.hash).siblings().removeClass('animated fadeInUp');
                    }*/
                    if (sectionOffset <= scrollbarLocation) {
                        __WEBPACK_IMPORTED_MODULE_4_jquery__(this).parent().addClass('active');
                        __WEBPACK_IMPORTED_MODULE_4_jquery__(this).parent().siblings().removeClass('active');
                    }
                });
            });
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashmessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HomeComponent.prototype, "canvasRef", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n#inp1:focus {\r\n    outline:none;\r\n    border:none;\r\n    border-bottom:2px solid blue;\r\n    background: none;\r\n}\r\n\r\n#inp1{ \r\n    background:none;\r\n    border:none;\r\n    border-bottom:2px solid blue;\r\n    width:60%;\r\n    border-radius: 0;\r\n    outline: none;\r\n}\r\n\r\n.form-group { \r\n    background:none;\r\n    border:none;\r\n    outline: none;\r\n}*/\r\n\r\n\r\n.loginbtn {\r\n    color:white;\r\n    text-decoration:none;\r\n    border:1px solid #1792BA;\r\n    padding:1vh;\r\n    font-size:17px;\r\n    margin:20px;\r\n    width:100%;\r\n    margin-left:0;\r\n    background:#1792BA;\r\n  }\r\n  \r\n.page-header {\r\n    color:#1792BA;\r\n} \r\n\r\n.card {\r\n    margin:5% auto;\r\n    border-radius: 1%;\r\n    background:white;\r\n    box-shadow: 0px 8px 16px 0 rgba(0,0,0,0.2);\r\n    padding:5%;\r\n    width:50%;\r\n    padding-top:1%;\r\n    padding-bottom:5%;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .card {\r\n        width:100%;\r\n        padding:5%;\r\n        padding-bottom:10%;\r\n    } \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"progress\" [style]=load>\n    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=inc\n    aria-valuemin=\"0\" aria-valuemax=\"100\" [style]=load>\n    </div>\n  </div>-->\n\n\n  <div class=\"container card\">\n  <h2 class=\"page-header\">Login</h2>\n  <form (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\">\n        <label>email<sup>*</sup></label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\" [(ngModel)]=\"email\" name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label><i class=\"fa fa-\"></i>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <input type=\"submit\" class=\"loginbtn\" value=\"Login\">\n    <br><br>\n    <span (click)=\"forgot()\">\n      <a>Forgot Password ?</a>\n    </span>\n  </form>\n  </div>\n  <div class=\"backdrop\" [ngStyle]=\"{'display':forgotFlag}\"></div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':forgotFlag}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h2 class=\"modal-title\">Prove us its you</h2>\n        </div>\n        <div class=\"modal-body\">\n          <div [ngStyle]=\"{'display':'block'}\">\n            <form (submit)=\"view()\">\n              <h4 *ngIf=\"user\">{{user.question}}</h4>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"answer\" name=\"answer\">\n              <input type=\"submit\" class=\"btn btn-info\" value=\"Submit\"> \n              <br>\n              <h3 *ngIf=\"passFlag\">\n                Your password : {{user.copy}}\n              </h3><br>\n              <h5 *ngIf=\"wrong\" style=\"color:red\">\n                  Wrong answer!\n              </h5>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"onClose()\" >Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div *ngIf=\"spin\" id=\"container\">\n      <div class=\"loadingbar\"></div>\n    </div>\n \n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashmessage) {
        this.authService = authService;
        this.router = router;
        this.flashmessage = flashmessage;
        this.dim = 'show';
        this.spin = false;
        this.forgotFlag = 'none';
        this.passFlag = false;
        this.wrong = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.forgot = function () {
        var _this = this;
        console.log(this.email);
        if (this.email !== undefined) {
            this.wrong = false;
            this.spin = true;
            console.log('forgot...');
            this.authService.getUser("users/user/" + this.email).subscribe(function (user) {
                _this.user = user;
                _this.spin = false;
                console.log(_this.user);
                if (_this.user === null) {
                    _this.flashmessage.show('user not found', {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                }
                else {
                    _this.forgotFlag = 'block';
                }
            });
        }
        else {
            this.flashmessage.show('Enter your email to know your password', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
        }
    };
    LoginComponent.prototype.view = function () {
        console.log(this.answer.toLowerCase());
        console.log(this.user.answer);
        if (this.answer.toLowerCase() === this.user.answer) {
            this.passFlag = true;
            this.wrong = false;
        }
        else {
            this.wrong = true;
        }
        this.answer = '';
    };
    LoginComponent.prototype.onClose = function () {
        this.forgotFlag = 'none';
        this.passFlag = false;
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.spin = true;
        this.authService.authenticateUser(user).subscribe(function (data) {
            _this.spin = false;
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashmessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                if (user.email.endsWith('bharath@gmail.com')) {
                    _this.router.navigate(['/report']);
                }
                else {
                    _this.router.navigate(['/dashboard']);
                }
            }
            else {
                _this.flashmessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.navbar-toggle {\r\n  border:none;\r\n  color:black;\r\n  font-size:20px;\r\n}\r\n\r\n    .navbar {\r\n        background:rgba(23, 146, 186, 0.50);\r\n        border: none;\r\n      }\r\n      \r\n      .navbar-header > a {\r\n        color:black;\r\n        font-size:25px;\r\n        float: none;\r\n        display: inline-block;\r\n      }\r\n      \r\n      .navbar-header > a:hover {\r\n        color:white;\r\n        font-size:25px;\r\n        float: none;\r\n        display: inline-block;\r\n      }\r\n      \r\n      .navbar-nav > li > a {\r\n        font-size: 15px;  \r\n        text-align: center;\r\n        color:black;\r\n        display: inline-block;\r\n      }\r\n      \r\n      .navbar-nav > li >a:hover {\r\n        color:white;\r\n        background:none;\r\n      }\r\n    \r\n    .navbar .navbar-nav>.active>a,\r\n    .navbar .navbar-nav>.active>a:hover,\r\n    .navbar .navbar-nav>.active>a:focus {\r\n        color:white;\r\n        background:none;\r\n        border-bottom: 1.5px solid white;\r\n        display: inline-block;\r\n    }\r\n    \r\n    .active { \r\n      color:white;\r\n      background:none;\r\n    }\r\n\r\n    \r\n\r\n\r\n      /*\r\n      .navbar-header > a {\r\n        font-size: 25px;\r\n        width:100%;\r\n        color:black;\r\n      }\r\n      \r\n      \r\n      .navbar-header > a {\r\n        float: none;\r\n        display: inline-block;\r\n      }\r\n      \r\n      .navbar-nav {  \r\n        width: 100%;\r\n      }\r\n      \r\n      .navbar-nav > li > a {\r\n        font-size: 19px;  \r\n        text-align: center;\r\n        color:black;\r\n        display: inline-block;\r\n      }\r\n      \r\n      .navbar-nav > li :hover {\r\n        color:blue;\r\n      }\r\n    \r\n      .navbar-nav {  \r\n        width: 100%;\r\n      }\r\n      \r\n      .navbar-nav > li {  \r\n        float: none;\r\n        display: inline-block;\r\n      }\r\n    \r\n    .navbar-default .navbar-nav>.active>a,\r\n    .navbar-default .navbar-nav>.active>a:hover,\r\n    .navbar-default .navbar-nav>.active>a:focus {\r\n        color:blue;\r\n        background:none;\r\n        border-bottom: 1.5px solid blue;\r\n        display: inline-block;\r\n    }\r\n\r\n    .active { \r\n      color:blue;\r\n      background:none;\r\n    }\r\n    */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n           <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n           </button>\n            <a class=\"navbar-brand\" href=\"#\">Techfix Solutions</a>\n        </div>\n        \n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav navbar-left\">\n              <li class=\"decollapse\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\">Home</a></li>\n              <!--<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/login\">தமிழ்</a></li>\n              <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/profile\">Learn</a></li>-->\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"decollapse\" *ngIf=\"authService.loggedIn() && !authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n                <li class=\"decollapse\" *ngIf=\"authService.loggedIn() && authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/result\">Users</a></li>\n                <li class=\"decollapse\" *ngIf=\"authService.loggedIn() && authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/report\">Tickets</a></li>\n                <li class=\"decollapse\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/profile\">Profile</a></li>\n\n                <li class=\"decollapse\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/login\">Login</a></li>\n                <li class=\"decollapse\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/register\">Register</a></li>\n                <li class=\"decollapse\" *ngIf=\"authService.loggedIn()\"><a href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\n            </ul>\n        </div>\n        \n    </div>\n    \n  \n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashmessage) {
        this.authService = authService;
        this.router = router;
        this.flashmessage = flashmessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.decollapse').on('click', function () {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.navbar-toggle').click();
                console.log('clicked.');
            });
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashmessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button a {\r\n    text-decoration:none;\r\n    color:white;\r\n}\r\n\r\ndiv a {\r\n    text-decoration: none;\r\n    color:black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\n<div class=\"row\">\n\n<div class=\"col-md-5 col-xs-11\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n</div>\n\n</div>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Contact No. :  {{user.contact}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n    <li class=\"list-group-item\">Password Recovery Question : {{user.question}}</li>\n    <li class=\"list-group-item\">Answer : {{user.answer}}</li>\n  </ul>\n</div>\n\n<button class=\"btn btn-info\" (click)=\"editor()\">Edit Profile</button>\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':editFlag}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':editFlag}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title\">Edit your details</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div [ngStyle]=\"{'display':'block'}\">\n          <form (submit)=\"sendUser()\" *ngIf=\"user\">\n              <div class=\"form-group\">\n                  <label>Name</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\">\n              </div>\n              <div class=\"form-group\">\n                  <label>Contact</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.contact\" name=\"contact\">\n              </div>\n              <div class=\"form-group\">\n                  <label>Password</label>\n                  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n              </div>\n              <div class=\"form-group\">\n                  <label>Confirm Password</label>\n                  <input type=\"password\" class=\"form-control\" [(ngModel)]=\"confirm\" name=\"confirm\">\n              </div>\n              <div class=\"form-group\">\n                  <label>Password Recovery Question</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.question\" name=\"question\">\n              </div>\n              <div class=\"form-group\">\n                  <label>Answer</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.answer\" name=\"answer\">\n              </div>\n\n            <input type=\"submit\" class=\"btn btn-info\" value=\"Submit\"><br>\n            <br>\n\n            <h5 *ngIf=\"req\" style=\"color:red;margin-right:10px\">\n                Every field is required!\n            </h5>\n\n            <h5 *ngIf=\"pass\" style=\"color:red;margin-right:10px\">\n                Password mismatch!\n            </h5>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onClose()\" >Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div *ngIf=\"spin\" id=\"container\">\n  <div class=\"loadingbar\"></div>\n</div>\n<!--\n<div *ngIf=\"avatar\">\n  <div class=\"well col-md-2 col-xs-5\" *ngFor=\"let img of pics\">\n    <img [src]=img alt=\"pic\" (click)=\"trigger(img)\">\n  </div>\n  <button class=\"btn btn-success\" (click)=\"apply()\">Apply pic</button>\n</div>\n-->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashmessage) {
        this.authService = authService;
        this.router = router;
        this.flashmessage = flashmessage;
        this.dim = 'show';
        this.spin = true;
        this.email = '\assets\\uploads\\user\\photo-';
        this.link = 'users/upload/user';
        this.avatar = false;
        this.image = '';
        this.editFlag = 'none';
        this.req = false;
        this.pass = false;
        this.imgFlag = 'none';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.callback=obj=>this.imageService.upload(obj);
        this.authService.getProfile().subscribe(function (profile) {
            _this.spin = false;
            _this.user = profile.user;
            _this.send = _this.user.email;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.editor = function () {
        this.editFlag = 'block';
    };
    ProfileComponent.prototype.onClose = function () {
        //this.avatar=false;
        this.editFlag = 'none';
        //this.imgFlag='none';
    };
    ProfileComponent.prototype.sendUser = function () {
        var _this = this;
        this.req = false;
        this.pass = false;
        //this.avatar=false;
        if (this.user.name.length > 0 && this.user.contact.length > 0 && this.user.question.length > 0
            && this.user.answer.length > 0 && this.user.password.length > 0) {
            if (this.password === this.confirm) {
                var profile = {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.password,
                    copy: this.password,
                    question: this.user.question,
                    answer: this.user.answer
                };
                console.log(profile);
                this.authService.updateProfile("users/profile/" + this.user.email, profile).subscribe(function (data) {
                    if (data.success) {
                        console.log(data);
                        _this.flashmessage.show('Your profile info has been updated', {
                            cssClass: 'alert-info',
                            timeout: 3000
                        });
                    }
                });
            }
            else {
                this.pass = true;
            }
        }
        else {
            this.req = true;
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#inp1:focus {\r\n    outline:none;\r\n    border:none;\r\n    border-bottom:2px solid blue;\r\n    background: none;\r\n}\r\n\r\n#inp1{ \r\n    background:none;\r\n    border:none;\r\n    border-bottom:2px solid blue;\r\n    width:60%;\r\n    border-radius: 0;\r\n    outline: none;\r\n}\r\n\r\n.form-group { \r\n    background:none;\r\n    border:none;\r\n    outline: none;\r\n}\r\n\r\n.card {\r\n    margin:0 auto;\r\n    border-radius: 1%;\r\n    background:white;\r\n    box-shadow: 0px 8px 16px 0 rgba(0,0,0,0.2);\r\n    padding:5%;\r\n    width:50%;\r\n    padding-top:1%;\r\n    padding-bottom:3%;\r\n}\r\n\r\n\r\n.registerbtn {\r\n    color:white;\r\n    text-decoration:none;\r\n    border:1px solid white;\r\n    padding:1vh;\r\n    font-size:17px;\r\n    margin:20px;\r\n    width:100%;\r\n    margin-left:0;\r\n    background:#1792BA;\r\n  }\r\n  \r\n.page-header {\r\n    color:#1792BA;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .card {\r\n        width:100%;\r\n        padding:5%;\r\n        padding-bottom:10%;\r\n    } \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container card\">\n    <h2 class=\"page-header\">Register</h2>\n    <form (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group\">\n        <label>Name<sup>*</sup></label>\n        <input type=\"text\" placeholder=\"Enter your full name\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Contact<sup>*</sup></label>\n        <input type=\"text\" placeholder=\"Enter your contact no.\" class=\"form-control\" [(ngModel)]=\"contact\" name=\"contact\">\n      </div>\n\n    <!--\n      <input type=\"radio\" name=\"options\" value=\"op3\" (click)=\"checkFlag('3')\"/>{{apt1.option3}}<br>\n      <input type=\"radio\" name=\"options\" value=\"op4\" (click)=\"checkFlag('4')\"/>{{apt1.option4}}<br>\n    -->\n\n      <div class=\"form-group\">\n        <label>Email<sup>*</sup></label>\n        <input type=\"text\" placeholder=\"Enter your work email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password<sup>*</sup></label>\n        <input type=\"password\" placeholder=\"Enter a strong password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password Recovery Question<sup>*</sup></label>\n        <input type=\"text\" placeholder=\"Enter any personal question\" class=\"form-control\" [(ngModel)]=\"question\" name=\"question\">\n      </div>\n      <div class=\"form-group\">\n        <label>Answer<sup>*</sup></label>\n        <input type=\"text\" placeholder=\"Definite answer\" class=\"form-control\" [(ngModel)]=\"answer\" name=\"answer\">\n      </div>\n      <input type=\"submit\" class=\"registerbtn\" value=\"Submit\">\n    </form>\n</div>\n\n<div *ngIf=\"spin\" id=\"container\">\n  <div class=\"loadingbar\"></div>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.resLink = 'result/resume/';
        this.spin = false;
        this.now = new Date();
        this.currdate = this.now.toString().substring(0, 21);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.resLink += this.email;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.spin = true;
        console.log(this.name);
        if (this.answer == undefined) {
            var user = {
                name: this.name,
                contact: this.contact,
                email: this.email,
                password: this.password,
                copy: this.password,
                question: this.question,
                answer: this.answer
            };
            console.log(user);
            //Require fields
            if (!this.validateService.validateRegister(user)) {
                this.spin = false;
                this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            //Require valid Email
            if (!this.validateService.validateEmail(user.email)) {
                this.spin = false;
                this.flashMessage.show('Please enter valid email', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            //Register user
            this.authService.registerUser(user).subscribe(function (data) {
                console.log('registering..');
                if (data.success) {
                    _this.flashMessage.show('You are now registered successfully and can log in', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/register']);
                }
            });
        }
        else {
            var user = {
                name: this.name,
                contact: this.contact,
                email: this.email,
                password: this.password,
                copy: this.password,
                question: this.question,
                answer: this.answer.toLowerCase()
            };
            console.log(user);
            //Require fields
            if (!this.validateService.validateRegister(user)) {
                this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            //Require valid Email
            if (!this.validateService.validateEmail(user.email)) {
                this.flashMessage.show('Please enter valid email', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            //Register user
            this.authService.registerUser(user).subscribe(function (data) {
                console.log('registering..');
                if (data.success) {
                    _this.flashMessage.show('You are now registered successfully and can log in', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.flashMessage.show('Log in unsuccessful , please try again', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/register']);
                }
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tickets\">\n  <div *ngFor=\"let ticket of tickets;let i=index;\">\n      <div class=\"panel {{ticket.priority}}\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n              <a data-toggle=\"collapse\" href=\"#{{i}}\">{{ticket.problem}}<i class=\"fa fa-angle-double-down\"></i></a>\n              <button style=\"float:right;margin-right:10px;\" class=\"btn btn-default\"><i class=\"fa fa-trash\" (click)=\"deleteTicket(ticket.problem,ticket.email)\" style=\"float:right;margin-right:10px;color:red\"></i></button>\n              <button style=\"float:right;margin-right:10px;\" class=\"btn btn-default\"><i class=\"fa fa-close\" (click)=\"uncheck(ticket.problem,ticket.email)\" style=\"float:right;margin-right:10px;color:orange;\"></i></button>\n              <button style=\"float:right;margin-right:10px;\" class=\"btn btn-default\"><i class=\"fa fa-check\" (click)=\"check(ticket.problem,ticket.email)\" style=\"float:right;margin-right:10px;color:green;\"></i></button>\n            </h4>\n          </div>\n          <div id=\"{{i}}\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">{{ticket.description}}</div>\n            <div class=\"panel-footer\">\n              <div class=\"row\">\n                  <div class=\"col-xs-12 col-md-3\"><i class=\"fa fa-user\" style=\"margin:10px;font-size:20px;color:#1792BA\"></i>{{ticket.name}}</div>\n                  <div class=\"col-xs-12 col-md-3\"><i class=\"fa fa-envelope\" style=\"margin:10px;font-size:20px;color:#1792BA\"></i>{{ticket.email}}</div>\n                  <div class=\"col-xs-12 col-md-3\"><i class=\"fa fa-mobile\" style=\"margin:10px;font-size:20px;color:#1792BA\"></i>{{ticket.contact}}</div>\n                  <div class=\"col-xs-12 col-md-3\"><i class=\"fa fa-calendar\" style=\"margin:10px;font-size:20px;color:#1792BA\"></i>{{ticket.date}}</div>\n              </div> \n            </div>\n          </div>\n        </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"spin\" id=\"container\">\n  <div class=\"loadingbar\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = (function () {
    function ReportComponent(authService, flashmessage) {
        this.authService = authService;
        this.flashmessage = flashmessage;
        this.spin = true;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getTicket("users/ticket").subscribe(function (tkt) {
            _this.spin = false;
            _this.tickets = tkt;
            console.log(_this.tickets);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ReportComponent.prototype.deleteTicket = function (pro, email) {
        var _this = this;
        this.spin = true;
        this.authService.deleteTicket("users/ticket/" + email + "/" + pro).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.flashmessage.show('Your ticket has been deleted successfully', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
            }
        });
        this.authService.getTicket("users/ticket").subscribe(function (tkt) {
            _this.spin = false;
            _this.tickets = tkt;
            console.log(_this.tickets);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ReportComponent.prototype.check = function (pro, email) {
        var _this = this;
        var ticket = {
            priority: 'panel-success'
        };
        console.log(ticket);
        this.spin = true;
        this.authService.updateTicket("users/ticket/" + email + "/" + pro, ticket).subscribe(function (data) {
            if (data.success) {
                console.log(data);
            }
        });
        this.authService.getTicket("users/ticket").subscribe(function (tkt) {
            _this.spin = false;
            _this.tickets = tkt;
            console.log(_this.tickets);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ReportComponent.prototype.uncheck = function (pro, email) {
        var _this = this;
        var ticket = {
            priority: 'panel-danger'
        };
        console.log(ticket);
        this.spin = true;
        this.authService.updateTicket("users/ticket/" + email + "/" + pro, ticket).subscribe(function (data) {
            if (data.success) {
                console.log(data);
            }
        });
        this.authService.getTicket("users/ticket").subscribe(function (tkt) {
            _this.spin = false;
            _this.tickets = tkt;
            console.log(_this.tickets);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-report',
        template: __webpack_require__("../../../../../src/app/components/report/report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/report/report.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ReportComponent);

var _a, _b;
//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/result/result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"users\">\n  <div *ngFor=\"let user of users;let i=index;\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n              <a data-toggle=\"collapse\" href=\"#{{i}}\">{{user.name}}<i class=\"fa fa-angle-double-down\"></i></a>\n            </h4>\n          </div>\n          <div id=\"{{i}}\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-md-6\"><i class=\"fa fa-envelope\" style=\"margin:5px;font-size:20px;color:#1792BA\"></i>{{user.email}}</div>\n                <div class=\"col-xs-12 col-md-6\"><i class=\"fa fa-mobile\" style=\"margin:5px;font-size:20px;color:#1792BA\"></i>{{user.contact}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"spin\" id=\"container\">\n  <div class=\"loadingbar\"></div>\n</div>\n          "

/***/ }),

/***/ "../../../../../src/app/components/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = (function () {
    function ResultComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.spin = true;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser('users/user').subscribe(function (profiles) {
            _this.spin = false;
            _this.users = profiles;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-result',
        template: __webpack_require__("../../../../../src/app/components/result/result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/result/result.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ResultComponent);

var _a, _b, _c;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.test = false;
        this.evaluate = false;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log('register...');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log('authenticate...');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUser = function (link) {
        console.log('getting user from:' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        console.log('serviceUser:' + this.user);
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateProfile = function (link, profile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, profile, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //From here
    AuthService.prototype.setTest = function () {
        this.test = true;
    };
    AuthService.prototype.isTest = function () {
        return this.test;
    };
    AuthService.prototype.finishTest = function () {
        this.test = false;
    };
    AuthService.prototype.setEvaluate = function () {
        this.evaluate = true;
    };
    AuthService.prototype.isEvaluate = function () {
        return this.evaluate;
    };
    AuthService.prototype.finishEvaluate = function () {
        this.evaluate = false;
    };
    AuthService.prototype.getLogic = function (link) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAptitude = function (link) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTaptitude = function (link) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Posting score details
    AuthService.prototype.postScore = function (score) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('result/score', score, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateScore = function (link, score) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, score, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Getting score details
    AuthService.prototype.getScore = function (link) {
        console.log('Getting scores fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postCompany = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('home/company', company, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Getting score details
    AuthService.prototype.getCompany = function (link) {
        console.log('Getting companies fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Posting resume details
    AuthService.prototype.postResume = function (resume) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('result/resume', resume, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Getting score details
    AuthService.prototype.getResume = function (link) {
        console.log('Getting resume fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Posting resume details
    AuthService.prototype.updateResume = function (link, resume) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, resume, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //end here
    AuthService.prototype.storeUserData = function (token, user) {
        var _this = this;
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authtoken = token;
        this.user = user;
        this.getProfile().subscribe(function (profile) {
            _this.users = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authtoken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.postTicket = function (quest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/ticket', quest, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTicket = function (link) {
        console.log('Getting tickets fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateTicket = function (link, ticket) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, ticket, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteTicket = function (link) {
        console.log('deleting tickets fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //start again
    AuthService.prototype.postTest = function (quest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/ticket', quest, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTest = function (link) {
        console.log('Getting tickets fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteTest = function (link) {
        console.log('deleting tickets fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postTester = function (quest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dashboard/tester', quest, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTester = function (link) {
        console.log('Getting tester fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateTester = function (link, resume) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, resume, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postReport = function (link) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dashboard/report', link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getReport = function (link) {
        console.log('Getting report fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateReport = function (link, report) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, report, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteReport = function (link) {
        console.log('deleting report fron authService' + link);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(link, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getFeedback = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/feedback', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postFeedback = function (feed) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/feedback', feed, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateFeedback = function (link, feed) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(link, feed, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isStudent = function () {
        if (this.users && this.users.type.endsWith('student')) {
            return true;
        }
        else {
            return false;
        }
    };
    //end here
    AuthService.prototype.isAdmin = function () {
        if (this.users && this.users.name.endsWith('bharath123')) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.contact == undefined || user.password == undefined
            || user.question == undefined || user.answer == undefined) {
            console.log('inside false');
            return false;
        }
        else {
            console.log('inside true');
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/assets/picFrame1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "picFrame1.5e677e8e71375ac0fbb9.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map