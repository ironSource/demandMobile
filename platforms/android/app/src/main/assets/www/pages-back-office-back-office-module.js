(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-back-office-back-office-module"],{

/***/ "./src/app/entrace/pages/back-office/back-office.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/entrace/pages/back-office/back-office.module.ts ***!
  \*****************************************************************/
/*! exports provided: BackOfficePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackOfficePageModule", function() { return BackOfficePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _back_office_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./back-office.page */ "./src/app/entrace/pages/back-office/back-office.page.ts");







var routes = [
    {
        path: '',
        component: _back_office_page__WEBPACK_IMPORTED_MODULE_6__["BackOfficePage"]
    }
];
var BackOfficePageModule = /** @class */ (function () {
    function BackOfficePageModule() {
    }
    BackOfficePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_back_office_page__WEBPACK_IMPORTED_MODULE_6__["BackOfficePage"]]
        })
    ], BackOfficePageModule);
    return BackOfficePageModule;
}());



/***/ }),

/***/ "./src/app/entrace/pages/back-office/back-office.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/entrace/pages/back-office/back-office.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Back Office\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/entrace/pages/back-office/back-office.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/entrace/pages/back-office/back-office.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJhY2UvcGFnZXMvYmFjay1vZmZpY2UvYmFjay1vZmZpY2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/entrace/pages/back-office/back-office.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/entrace/pages/back-office/back-office.page.ts ***!
  \***************************************************************/
/*! exports provided: BackOfficePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackOfficePage", function() { return BackOfficePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackOfficePage = /** @class */ (function () {
    function BackOfficePage() {
    }
    BackOfficePage.prototype.ngOnInit = function () {
    };
    BackOfficePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-back-office',
            template: __webpack_require__(/*! ./back-office.page.html */ "./src/app/entrace/pages/back-office/back-office.page.html"),
            styles: [__webpack_require__(/*! ./back-office.page.scss */ "./src/app/entrace/pages/back-office/back-office.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackOfficePage);
    return BackOfficePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-back-office-back-office-module.js.map