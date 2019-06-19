(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrace-entrace-module"],{

/***/ "./src/app/entrace/entrace.module.ts":
/*!*******************************************!*\
  !*** ./src/app/entrace/entrace.module.ts ***!
  \*******************************************/
/*! exports provided: EntracePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntracePageModule", function() { return EntracePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entrace_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entrace.page */ "./src/app/entrace/entrace.page.ts");
/* harmony import */ var _guards_is_advertiser_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/is-advertiser.guard */ "./src/app/guards/is-advertiser.guard.ts");
/* harmony import */ var _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guards/is-admin.guard */ "./src/app/guards/is-admin.guard.ts");









var routes = [
    {
        path: '',
        component: _entrace_page__WEBPACK_IMPORTED_MODULE_6__["EntracePage"],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            {
                path: 'overview',
                loadChildren: './pages/overview/overview.module#OverviewModule',
                canActivate: [_guards_is_advertiser_guard__WEBPACK_IMPORTED_MODULE_7__["IsAdvertiserGuard"]]
            },
            { path: 'back-office', loadChildren: './pages/back-office/back-office.module#BackOfficePageModule', canActivate: [_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_8__["IsAaminGuard"]] },
            { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
            { path: 'login-as', loadChildren: './pages/login-as/login-as.module#LoginAsPageModule', canActivate: [_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_8__["IsAaminGuard"]] },
            {
                path: 'campaign/:id',
                loadChildren: './pages/campaign-overview/campaign-overview.module#CampaignOverviewModule',
                canActivate: [_guards_is_advertiser_guard__WEBPACK_IMPORTED_MODULE_7__["IsAdvertiserGuard"]]
            }
        ]
    }
];
var EntracePageModule = /** @class */ (function () {
    function EntracePageModule() {
    }
    EntracePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_entrace_page__WEBPACK_IMPORTED_MODULE_6__["EntracePage"]]
        })
    ], EntracePageModule);
    return EntracePageModule;
}());



/***/ }),

/***/ "./src/app/entrace/entrace.page.html":
/*!*******************************************!*\
  !*** ./src/app/entrace/entrace.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-router-outlet main></ion-router-outlet>"

/***/ }),

/***/ "./src/app/entrace/entrace.page.scss":
/*!*******************************************!*\
  !*** ./src/app/entrace/entrace.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJhY2UvZW50cmFjZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/entrace/entrace.page.ts":
/*!*****************************************!*\
  !*** ./src/app/entrace/entrace.page.ts ***!
  \*****************************************/
/*! exports provided: EntracePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntracePage", function() { return EntracePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntracePage = /** @class */ (function () {
    function EntracePage() {
    }
    EntracePage.prototype.ngOnInit = function () {
    };
    EntracePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrace',
            template: __webpack_require__(/*! ./entrace.page.html */ "./src/app/entrace/entrace.page.html"),
            styles: [__webpack_require__(/*! ./entrace.page.scss */ "./src/app/entrace/entrace.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntracePage);
    return EntracePage;
}());



/***/ }),

/***/ "./src/app/guards/is-admin.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/is-admin.guard.ts ***!
  \******************************************/
/*! exports provided: IsAaminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAaminGuard", function() { return IsAaminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var IsAaminGuard = /** @class */ (function () {
    function IsAaminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    IsAaminGuard.prototype.canActivate = function (route, state) {
        var user = this.authService.currentUser;
        if (!user.isAdmin) {
            this.router.navigate(['/entrace']);
            return false;
        }
        return true;
    };
    IsAaminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsAaminGuard);
    return IsAaminGuard;
}());



/***/ }),

/***/ "./src/app/guards/is-advertiser.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/is-advertiser.guard.ts ***!
  \***********************************************/
/*! exports provided: IsAdvertiserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAdvertiserGuard", function() { return IsAdvertiserGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var IsAdvertiserGuard = /** @class */ (function () {
    function IsAdvertiserGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    IsAdvertiserGuard.prototype.canActivate = function (route, state) {
        var user = this.authService.currentUser;
        if (user.isAdmin && !user.loginAs) {
            this.router.navigate(['/entrace/back-office']);
            return false;
        }
        return true;
    };
    IsAdvertiserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsAdvertiserGuard);
    return IsAdvertiserGuard;
}());



/***/ })

}]);
//# sourceMappingURL=entrace-entrace-module.js.map