(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-overview-overview-module"],{

/***/ "./src/app/entrace/pages/overview/overview.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/entrace/pages/overview/overview.module.ts ***!
  \***********************************************************/
/*! exports provided: OverviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewModule", function() { return OverviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview.page */ "./src/app/entrace/pages/overview/overview.page.ts");







var OverviewModule = /** @class */ (function () {
    function OverviewModule() {
    }
    OverviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '', component: _overview_page__WEBPACK_IMPORTED_MODULE_6__["OverviewPage"]
                    }
                ])
            ],
            declarations: [_overview_page__WEBPACK_IMPORTED_MODULE_6__["OverviewPage"]]
        })
    ], OverviewModule);
    return OverviewModule;
}());



/***/ }),

/***/ "./src/app/entrace/pages/overview/overview.page.html":
/*!***********************************************************!*\
  !*** ./src/app/entrace/pages/overview/overview.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Overview\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"content-container\">\n        <div class=\"page-title\">\n            <ion-text>\n                <p>Spend</p>\n            </ion-text>\n            <ion-text>\n                <h1>3.14K</h1>\n            </ion-text>\n        </div>\n        <div class=\"chart-image\">\n            <ion-img src=\"../../../../assets/images/chart-image.png\"></ion-img>\n        </div>\n\n        <ion-virtual-scroll [items]=\"campaigns\">\n            <ion-item lines=\"full\" *virtualItem=\"let campaign\" [routerLink]=\"['/entrace/campaign', campaign.id]\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"campaign.titleIcon\">\n                </ion-avatar>\n                <ion-label>\n                    <ion-text>\n                        <h2>{{campaign.name}}</h2>\n                    </ion-text>\n                    <ion-text color=\"medium\">\n                        <h5>{{campaign.id}}</h5>\n                    </ion-text>\n                </ion-label>\n            </ion-item>\n        </ion-virtual-scroll>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/entrace/pages/overview/overview.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/entrace/pages/overview/overview.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJhY2UvcGFnZXMvb3ZlcnZpZXcvb3ZlcnZpZXcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/entrace/pages/overview/overview.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/entrace/pages/overview/overview.page.ts ***!
  \*********************************************************/
/*! exports provided: OverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPage", function() { return OverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var OverviewPage = /** @class */ (function () {
    function OverviewPage(route) {
        this.route = route;
        this.campaigns = route.snapshot.data.campaigns.campaigns;
    }
    OverviewPage.prototype.ngOnInit = function () {
    };
    OverviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.page.html */ "./src/app/entrace/pages/overview/overview.page.html"),
            styles: [__webpack_require__(/*! ./overview.page.scss */ "./src/app/entrace/pages/overview/overview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OverviewPage);
    return OverviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-overview-overview-module.js.map