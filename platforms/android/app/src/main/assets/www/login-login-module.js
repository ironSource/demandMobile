(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
            providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"login-container\">\n    <div>\n      <img src=\"../../assets/icon/iron-source.svg\" />\n      <form [formGroup]=\"form\">\n        <ion-input placeholder=\"User name\"\n                   formControlName=\"username\"></ion-input>\n\n        <ion-input placeholder=\"Password\"\n                   type=\"password\"\n                   formControlName=\"password\"></ion-input>\n\n      </form>\n      <ion-button expand=\"block\"\n                  (click)=\"login()\">Login</ion-button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .login-container {\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  background-color: #001688;\n  padding: 44px 20px; }\n  :host .login-container img {\n    margin-bottom: 50px; }\n  :host .login-container ion-input {\n    height: 50px;\n    border-radius: 3px;\n    margin-bottom: 25px;\n    background-color: #ffffff;\n    padding: 15px 20px !important; }\n  :host .login-container ion-button {\n    background-color: #3083ff;\n    height: 50px;\n    --border-radius: 3px; }\n  :host::ng-deep input::-webkit-input-placeholder {\n  color: #021074 !important;\n  opacity: 1 !important; }\n  :host::ng-deep input:-ms-input-placeholder {\n  color: #021074 !important;\n  opacity: 1 !important; }\n  :host::ng-deep input::-ms-input-placeholder {\n  color: #021074 !important;\n  opacity: 1 !important; }\n  :host::ng-deep input::placeholder {\n  color: #021074 !important;\n  opacity: 1 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVuLmxldmluL0Rlc2t0b3AvcHJvamVjdHMvZGVtYW5kTW9iaWxlL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7RUFMMUI7SUFPWSxtQkFBbUIsRUFBQTtFQVAvQjtJQVVZLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw2QkFBNkIsRUFBQTtFQWR6QztJQWlCWSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG9CQUFnQixFQUFBO0VBTTVCO0VBR1kseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBO0VBSmpDO0VBR1kseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBO0VBSmpDO0VBR1kseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBO0VBSmpDO0VBR1kseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgLmxvZ2luLWNvbnRhaW5lcntcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDE2ODg7XG4gICAgICAgIHBhZGRpbmc6IDQ0cHggMjBweDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taW5wdXR7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4M2ZmO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG59XG5cbjpob3N0OjpuZy1kZWVwe1xuICAgIGlucHV0e1xuICAgICAgICAmOjpwbGFjZWhvbGRlcntcbiAgICAgICAgICAgIGNvbG9yOiAjMDIxMDc0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(authService, fb, router, toastController) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.toastController = toastController;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.form.valid) {
            this.authService.login(this.form.value).subscribe(function (_) {
                setTimeout(function () {
                    _this.router.navigate(['/entrace']);
                }, 100);
            }, function (err) {
                (function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var toast;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.toastController.create({
                                    message: 'Faild to login',
                                    duration: 2000
                                })];
                            case 1:
                                toast = _a.sent();
                                toast.present();
                                return [2 /*return*/];
                        }
                    });
                }); })();
            });
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map