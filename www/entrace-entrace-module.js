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
/* harmony import */ var _pages_campaign_overview_campaign_overview_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/campaign-overview/campaign-overview.resolver */ "./src/app/entrace/pages/campaign-overview/campaign-overview.resolver.ts");
/* harmony import */ var _pages_overview_overview_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/overview/overview.resolver */ "./src/app/entrace/pages/overview/overview.resolver.ts");
/* harmony import */ var _guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../guards/is-admin.guard */ "./src/app/guards/is-admin.guard.ts");











var routes = [
    {
        path: '',
        component: _entrace_page__WEBPACK_IMPORTED_MODULE_6__["EntracePage"],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            {
                path: 'overview',
                loadChildren: './pages/overview/overview.module#OverviewModule',
                canActivate: [_guards_is_advertiser_guard__WEBPACK_IMPORTED_MODULE_7__["IsAdvertiserGuard"]],
                resolve: { campaigns: _pages_overview_overview_resolver__WEBPACK_IMPORTED_MODULE_9__["OverviewResolver"] }
            },
            { path: 'back-office', loadChildren: './pages/back-office/back-office.module#BackOfficePageModule', canActivate: [_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_10__["IsAdminGuard"]] },
            { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
            { path: 'login-as', loadChildren: './pages/login-as/login-as.module#LoginAsPageModule', canActivate: [_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_10__["IsAdminGuard"]] },
            {
                path: 'campaign/:id',
                loadChildren: './pages/campaign-overview/campaign-overview.module#CampaignOverviewModule',
                canActivate: [_guards_is_advertiser_guard__WEBPACK_IMPORTED_MODULE_7__["IsAdvertiserGuard"]],
                resolve: { campaign: _pages_campaign_overview_campaign_overview_resolver__WEBPACK_IMPORTED_MODULE_8__["CampaignOverviewResolver"] }
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

module.exports = ".ion-item {\n  border: 1px solid #e3e3e3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVuLmxldmluL0Rlc2t0b3AvcHJvamVjdHMvZGVtYW5kTW9iaWxlL3NyYy9hcHAvZW50cmFjZS9lbnRyYWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cmFjZS9lbnRyYWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24taXRlbXtcblxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xufVxuXG4iXX0= */"

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

/***/ "./src/app/entrace/pages/campaign-overview/campaign-overview.resolver.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/entrace/pages/campaign-overview/campaign-overview.resolver.ts ***!
  \*******************************************************************************/
/*! exports provided: CampaignOverviewResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignOverviewResolver", function() { return CampaignOverviewResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../campaign.service */ "./src/app/entrace/campaign.service.ts");



var CampaignOverviewResolver = /** @class */ (function () {
    function CampaignOverviewResolver(campaignService) {
        this.campaignService = campaignService;
    }
    CampaignOverviewResolver.prototype.resolve = function (route, state) {
        return this.campaignService.getCampaignById(route.params.id);
    };
    CampaignOverviewResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"]])
    ], CampaignOverviewResolver);
    return CampaignOverviewResolver;
}());



/***/ }),

/***/ "./src/app/entrace/pages/overview/overview.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/entrace/pages/overview/overview.resolver.ts ***!
  \*************************************************************/
/*! exports provided: OverviewResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewResolver", function() { return OverviewResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../campaign.service */ "./src/app/entrace/campaign.service.ts");



var OverviewResolver = /** @class */ (function () {
    function OverviewResolver(campaignService) {
        this.campaignService = campaignService;
    }
    OverviewResolver.prototype.resolve = function (route, state) {
        return this.campaignService.getCampaigns();
    };
    OverviewResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"]])
    ], OverviewResolver);
    return OverviewResolver;
}());



/***/ }),

/***/ "./src/app/guards/is-admin.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/is-admin.guard.ts ***!
  \******************************************/
/*! exports provided: IsAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAdminGuard", function() { return IsAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var IsAdminGuard = /** @class */ (function () {
    function IsAdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    IsAdminGuard.prototype.canActivate = function (route, state) {
        var user = this.authService.currentUser;
        if (!user.isAdmin) {
            this.router.navigate(['/entrace']);
            return false;
        }
        return true;
    };
    IsAdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsAdminGuard);
    return IsAdminGuard;
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