(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-as-login-as-module"],{

/***/ "./src/app/entrace/pages/login-as/login-as.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/entrace/pages/login-as/login-as.module.ts ***!
  \***********************************************************/
/*! exports provided: LoginAsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAsPageModule", function() { return LoginAsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_as_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-as.page */ "./src/app/entrace/pages/login-as/login-as.page.ts");







var routes = [
    {
        path: '',
        component: _login_as_page__WEBPACK_IMPORTED_MODULE_6__["LoginAsPage"]
    }
];
var LoginAsPageModule = /** @class */ (function () {
    function LoginAsPageModule() {
    }
    LoginAsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_as_page__WEBPACK_IMPORTED_MODULE_6__["LoginAsPage"]]
        })
    ], LoginAsPageModule);
    return LoginAsPageModule;
}());



/***/ }),

/***/ "./src/app/entrace/pages/login-as/login-as.page.html":
/*!***********************************************************!*\
  !*** ./src/app/entrace/pages/login-as/login-as.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"login-container\">\n        <div class=\"button-container\">\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n        </div>\n        <div>\n            <img src=\"../../assets/icon/iron-source.svg\" />\n            <form [formGroup]=\"form\">\n                <label>Login As</label>\n                <ion-input placeholder=\"username@usermail.com\"\n                           formControlName=\"username\"></ion-input>\n\n            </form>\n            <ion-button expand=\"block\"\n                        (click)=\"loginAs()\">Login</ion-button>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/entrace/pages/login-as/login-as.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/entrace/pages/login-as/login-as.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .login-container {\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  background-color: #001688;\n  padding: 50px 20px; }\n  :host .login-container img {\n    margin-bottom: 50px; }\n  :host .login-container ion-input {\n    height: 50px;\n    border-radius: 3px;\n    margin-bottom: 25px;\n    background-color: #ffffff;\n    padding: 15px 20px !important; }\n  :host .login-container ion-button {\n    background-color: #3083ff;\n    height: 50px;\n    --border-radius: 3px; }\n  :host .login-container label {\n    color: white;\n    display: block;\n    margin-bottom: 15px; }\n  :host .button-container {\n  position: absolute;\n  top: 0;\n  left: 15px;\n  color: white; }\n  :host::ng-deep input::-webkit-input-placeholder {\n  opacity: 0.3 !important; }\n  :host::ng-deep input:-ms-input-placeholder {\n  opacity: 0.3 !important; }\n  :host::ng-deep input::-ms-input-placeholder {\n  opacity: 0.3 !important; }\n  :host::ng-deep input::placeholder {\n  opacity: 0.3 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVuLmxldmluL0Rlc2t0b3AvcHJvamVjdHMvZGVtYW5kTW9iaWxlL3NyYy9hcHAvZW50cmFjZS9wYWdlcy9sb2dpbi1hcy9sb2dpbi1hcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTtFQUwxQjtJQU9ZLG1CQUFtQixFQUFBO0VBUC9CO0lBVVksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QixFQUFBO0VBZHpDO0lBaUJZLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osb0JBQWdCLEVBQUE7RUFuQjVCO0lBc0JZLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7RUF4Qi9CO0VBNEJRLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFlBQVksRUFBQTtFQUlwQjtFQUdZLHVCQUF1QixFQUFBO0VBSG5DO0VBR1ksdUJBQXVCLEVBQUE7RUFIbkM7RUFHWSx1QkFBdUIsRUFBQTtFQUhuQztFQUdZLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cmFjZS9wYWdlcy9sb2dpbi1hcy9sb2dpbi1hcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICAubG9naW4tY29udGFpbmVye1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTY4ODtcbiAgICAgICAgcGFkZGluZzogNTBweCAyMHB4O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDgzZmY7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnV0dG9uLWNvbnRhaW5lcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbjpob3N0OjpuZy1kZWVwe1xuICAgIGlucHV0e1xuICAgICAgICAmOjpwbGFjZWhvbGRlcntcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/entrace/pages/login-as/login-as.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/entrace/pages/login-as/login-as.page.ts ***!
  \*********************************************************/
/*! exports provided: LoginAsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAsPage", function() { return LoginAsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginAsPage = /** @class */ (function () {
    function LoginAsPage(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
    }
    LoginAsPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginAsPage.prototype.loginAs = function () {
        if (this.form.valid) {
            this.authService.loginAs();
            this.router.navigate(['/entrace']);
        }
    };
    LoginAsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-as',
            template: __webpack_require__(/*! ./login-as.page.html */ "./src/app/entrace/pages/login-as/login-as.page.html"),
            styles: [__webpack_require__(/*! ./login-as.page.scss */ "./src/app/entrace/pages/login-as/login-as.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginAsPage);
    return LoginAsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-as-login-as-module.js.map