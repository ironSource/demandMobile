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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Overview\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-virtual-scroll [items]=\"campaigns\">\n        <ion-item lines=\"full\" *virtualItem=\"let campaign\" [routerLink]=\"['/entrace/campaign', campaign.id]\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"campaign.titleIcon\">\n            </ion-avatar>\n            <ion-label>\n                <ion-text>\n                    <h2>{{campaign.name}}</h2>\n                </ion-text>\n                <ion-text color=\"medium\">\n                    <h5>{{campaign.id}}</h5>\n                </ion-text>\n            </ion-label>\n        </ion-item>\n    </ion-virtual-scroll>\n</ion-content>\n"

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


var OverviewPage = /** @class */ (function () {
    function OverviewPage() {
        this.campaignResponse = {
            campaigns: [{
                    name: 'Required Device IDs - merge flags into one - sanity PHP',
                    id: 4296981,
                    titleId: 425231,
                    activationDate: '2019-06-17T13:40:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-17T13:40:21.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 0,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://lh3.googleusercontent.com/1YXp5ZL9rnNFV48ka03tOid0HD29mP30oQKe9gLH7XdSk3wSP-bb0GyHaFUBSGZLF-g=s180',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'lala',
                    id: 4296607,
                    titleId: 494879,
                    activationDate: '2019-06-13T14:41:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-13T14:40:59.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 0,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/0e/b6/51/0eb65141-4fb1-7d70-c8ab-e70ef11cc1c0/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'E2E-ru store&url not valid- https://apps.apple.com/ru/app/%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D0%BB%D0%BE%D1%82-%D0%BD%D0%B5%D0%BC%D0%B5%D1%86%D0%BA%D0%B8%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA/id948160070',
                    id: 4296583,
                    titleId: 494831,
                    activationDate: '2019-06-13T11:52:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-13T11:46:03.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 3,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/51/be/fe/51befe57-07e0-255c-9d91-4b7c87745af1/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Live',
                    deliveryStatusId: 9
                }, {
                    name: 'new - Eljur.Student -https://apps.apple.com/ru/app/%D1%8D%D0%BB%D0%B6%D1%83%D1%80-%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA/id910733989',
                    id: 4296581,
                    titleId: 494827,
                    activationDate: '2019-06-13T11:50:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-13T11:38:58.000Z',
                    active: 1,
                    dailyCapTime: '0000-00-00 00:00:00',
                    origin: 5,
                    updateCounter: 7,
                    editableByDsi2: 1,
                    globalTotal: 100,
                    globalDaily: 50,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/7f/5f/93/7f5f931b-8e46-81b1-dab3-469f6104c461/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Live',
                    deliveryStatusId: 9
                }, {
                    name: 'new ',
                    id: 4296523,
                    titleId: 494751,
                    activationDate: '2019-06-13T09:52:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-13T09:52:34.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 0,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://is2-ssl.mzstatic.com/image/thumb/Purple7/v4/37/da/ac/37daac33-f2ee-ad61-c91d-62ffc75ac82b/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'eeee',
                    id: 4296409,
                    titleId: 494577,
                    activationDate: '0000-00-00 00:00:00',
                    expirationDate: '2019-06-11 00:00:00',
                    creationDate: '2019-06-12T14:18:33.000Z',
                    active: 0,
                    dailyCapTime: null,
                    origin: 4,
                    updateCounter: 4,
                    editableByDsi2: 0,
                    globalTotal: 0,
                    globalDaily: 235,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/a1/07/7d/a1077d1c-0a23-570f-647c-dadc0fdf00df/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Inactive',
                    deliveryStatusId: 1
                }, {
                    name: 'Copy of TestAdvOmer - Managed Campaigns - Default Campaign',
                    id: 4296405,
                    titleId: 494577,
                    activationDate: '0000-00-00 00:00:00',
                    expirationDate: '2019-06-11 00:00:00',
                    creationDate: '2019-06-12T14:16:25.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 4,
                    updateCounter: 3,
                    editableByDsi2: 0,
                    globalTotal: 0,
                    globalDaily: 235,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/a1/07/7d/a1077d1c-0a23-570f-647c-dadc0fdf00df/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Expired',
                    deliveryStatusId: 4
                }, {
                    name: 'login as',
                    id: 4296401,
                    titleId: 474059,
                    activationDate: '2019-06-12T14:13:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-12T14:13:58.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 3,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://lh3.googleusercontent.com/g75hrt7A-SyJyPRNh82p_mjEEkBqJw_Q4VZSLEiKmJG7n3YsEtTSCaY3HDluXCAV14Q=s180',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'new',
                    id: 4296397,
                    titleId: 494559,
                    activationDate: '2019-06-12T14:12:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-12T14:12:05.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 0,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://is4-ssl.mzstatic.com/image/thumb/Purple3/v4/4d/4a/b7/4d4ab7f7-cc8b-6eb9-d908-6f38a5110893/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'post hotfix 3669',
                    id: 4296371,
                    titleId: 425231,
                    activationDate: '2019-06-10T21:00:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-12T13:45:08.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 2,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 0.3,
                    paymentModel: 1,
                    titleIcon: 'https://lh3.googleusercontent.com/1YXp5ZL9rnNFV48ka03tOid0HD29mP30oQKe9gLH7XdSk3wSP-bb0GyHaFUBSGZLF-g=s180',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'post 2',
                    id: 4296283,
                    titleId: 494363,
                    activationDate: '2019-06-12T10:15:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-12T10:15:15.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 0,
                    editableByDsi2: 1,
                    globalTotal: 3333,
                    globalDaily: 0,
                    payout: 0.23,
                    paymentModel: 1,
                    titleIcon: 'https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/3a/14/c8/3a14c8ee-d7f4-f904-f7cf-e7003cde1392/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'Copy of Post Deploy 12.6.19',
                    id: 4296257,
                    titleId: 494517,
                    activationDate: '2019-06-12T13:46:00.000Z',
                    expirationDate: '2019-06-11 00:00:00',
                    creationDate: '2019-06-12T10:08:27.000Z',
                    active: 0,
                    dailyCapTime: '0000-00-00 00:00:00',
                    origin: 4,
                    updateCounter: 6,
                    editableByDsi2: 0,
                    globalTotal: 9999,
                    globalDaily: 3344,
                    payout: 1.23,
                    paymentModel: 1,
                    titleIcon: 'https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/14/60/65/146065f0-b2b0-888d-b272-a8b0658f621f/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Inactive',
                    deliveryStatusId: 1
                }, {
                    name: 'Post Deploy 12.6.19',
                    id: 4296249,
                    titleId: 494563,
                    activationDate: '0000-00-00 00:00:00',
                    expirationDate: '2019-06-11 00:00:00',
                    creationDate: '2019-06-12T10:06:17.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 4,
                    updateCounter: 6,
                    editableByDsi2: 0,
                    globalTotal: 0,
                    globalDaily: 345,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://lh3.googleusercontent.com/20AhH-zZDPUer_Njrhg9Y5msUOeWYTB8XPWIuT3Z0QBLy5HMYm5M5VfNcv7GjNywfhCZ=s180',
                    platform: 2,
                    deliveryStatus: 'Expired',
                    deliveryStatusId: 4
                }, {
                    name: 'Post dep',
                    id: 4296235,
                    titleId: 494511,
                    activationDate: '2019-06-11T21:00:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-12T09:59:41.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 1,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 0.3,
                    paymentModel: 1,
                    titleIcon: 'https://lh3.googleusercontent.com/Yfps1k5jfeCC6j3ahm1s6dyUrSHusfk_1WDSTRjSNpZA49iYSKd_uljgs9UScBXgISOX=s180',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'Copy of TestAdvOmer - Managed Campaigns - Default Campaign',
                    id: 4296123,
                    titleId: 494363,
                    activationDate: '2019-06-30T00:00:00.000Z',
                    expirationDate: '2019-06-10 00:00:00',
                    creationDate: '2019-06-11T15:59:53.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 4,
                    updateCounter: 2,
                    editableByDsi2: 0,
                    globalTotal: 0,
                    globalDaily: 90,
                    payout: 0.1,
                    paymentModel: 1,
                    titleIcon: 'https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/3a/14/c8/3a14c8ee-d7f4-f904-f7cf-e7003cde1392/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'SanSan',
                    id: 4294907,
                    titleId: 474059,
                    activationDate: '2019-06-01T21:00:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-02T08:44:31.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 9,
                    editableByDsi2: 1,
                    globalTotal: 1055,
                    globalDaily: 50,
                    payout: 1,
                    paymentModel: 1,
                    titleIcon: 'https://lh3.googleusercontent.com/g75hrt7A-SyJyPRNh82p_mjEEkBqJw_Q4VZSLEiKmJG7n3YsEtTSCaY3HDluXCAV14Q=s180',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'Pandora - assets to approved',
                    id: 4294905,
                    titleId: 423019,
                    activationDate: '2019-06-01T21:00:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-02T07:56:20.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 1,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 5,
                    paymentModel: 1,
                    titleIcon: 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/18/6d/da/186dda10-77f4-d572-0c3b-9cacb5948c13/source/512x512bb.jpg',
                    platform: 1,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'Approve assets - Control app',
                    id: 4294903,
                    titleId: 492385,
                    activationDate: '2019-05-25T21:00:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-06-02T07:43:51.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 13,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 5,
                    paymentModel: 1,
                    titleIcon: 'https://supersonicads-a.akamaihd.net/banners/c_6604637_87449_5.png',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'Icon_BannerC3',
                    id: 4294613,
                    titleId: 492391,
                    activationDate: '2019-05-30T15:58:00.000Z',
                    expirationDate: '2019-05-31 21:00:00',
                    creationDate: '2019-05-30T15:58:16.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 10,
                    editableByDsi2: 1,
                    globalTotal: 100,
                    globalDaily: 50,
                    payout: 2,
                    paymentModel: 1,
                    titleIcon: 'https://supersonicads-a.akamaihd.net/banners/c_6604645_92225_5.png',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'Icon_C2',
                    id: 4294607,
                    titleId: 485655,
                    activationDate: '2019-05-29T21:00:00.000Z',
                    expirationDate: '2019-05-31 21:00:00',
                    creationDate: '2019-05-30T14:54:18.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 17,
                    editableByDsi2: 1,
                    globalTotal: 100,
                    globalDaily: 50,
                    payout: 5,
                    paymentModel: 1,
                    titleIcon: 'https://supersonicads-a.akamaihd.net/banners/c_6604645_92225_5.png',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'Icon_C1',
                    id: 4294605,
                    titleId: 492385,
                    activationDate: '2019-05-28T21:00:00.000Z',
                    expirationDate: '2019-05-31 21:00:00',
                    creationDate: '2019-05-30T14:52:18.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 16,
                    editableByDsi2: 1,
                    globalTotal: 100,
                    globalDaily: 50,
                    payout: 5,
                    paymentModel: 1,
                    titleIcon: 'https://supersonicads-a.akamaihd.net/banners/c_6604637_87449_5.png',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'Icon_Banner2',
                    id: 4294603,
                    titleId: 485655,
                    activationDate: '2019-05-28T21:00:00.000Z',
                    expirationDate: '2019-05-31 21:00:00',
                    creationDate: '2019-05-30T14:50:42.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 17,
                    editableByDsi2: 1,
                    globalTotal: 100,
                    globalDaily: 50,
                    payout: 6,
                    paymentModel: 1,
                    titleIcon: 'https://supersonicads-a.akamaihd.net/banners/c_6604645_92225_5.png',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'Icon_Banner1',
                    id: 4294601,
                    titleId: 492385,
                    activationDate: '2019-05-28T21:00:00.000Z',
                    expirationDate: '2019-05-31 21:00:00',
                    creationDate: '2019-05-30T14:48:45.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 13,
                    editableByDsi2: 1,
                    globalTotal: 100,
                    globalDaily: 50,
                    payout: 6,
                    paymentModel: 1,
                    titleIcon: 'https://supersonicads-a.akamaihd.net/banners/c_6604637_87449_5.png',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'gfhg',
                    id: 4294581,
                    titleId: 474059,
                    activationDate: '2019-05-28T21:00:00.000Z',
                    expirationDate: '2019-05-29 21:00:00',
                    creationDate: '2019-05-30T13:29:31.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 3,
                    editableByDsi2: 1,
                    globalTotal: 100,
                    globalDaily: 50,
                    payout: 4,
                    paymentModel: 1,
                    titleIcon: 'https://lh3.googleusercontent.com/g75hrt7A-SyJyPRNh82p_mjEEkBqJw_Q4VZSLEiKmJG7n3YsEtTSCaY3HDluXCAV14Q=s180',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'ETE_All_Ad_Units',
                    id: 4294579,
                    titleId: 448173,
                    activationDate: '2019-05-29T21:00:00.000Z',
                    expirationDate: '2019-05-31 21:00:00',
                    creationDate: '2019-05-30T13:24:28.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 13,
                    editableByDsi2: 1,
                    globalTotal: 100,
                    globalDaily: 50,
                    payout: 2,
                    paymentModel: 1,
                    titleIcon: 'https://lh3.googleusercontent.com/nAu8v5gmXjzgVdgwih6z95GYsQad8RwRH0_28rYNC5fV8Jf2O3GDo1cOpcMhpDcEEQ=s180',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }, {
                    name: 'test idan',
                    id: 4294571,
                    titleId: 448173,
                    activationDate: '2019-05-26T21:00:00.000Z',
                    expirationDate: '0000-00-00 00:00:00',
                    creationDate: '2019-05-30T13:06:26.000Z',
                    active: 1,
                    dailyCapTime: null,
                    origin: 5,
                    updateCounter: 9,
                    editableByDsi2: 1,
                    globalTotal: 0,
                    globalDaily: 0,
                    payout: 6,
                    paymentModel: 1,
                    titleIcon: 'https://lh3.googleusercontent.com/nAu8v5gmXjzgVdgwih6z95GYsQad8RwRH0_28rYNC5fV8Jf2O3GDo1cOpcMhpDcEEQ=s180',
                    platform: 2,
                    deliveryStatus: 'Pending approval',
                    deliveryStatusId: 2
                }],
            totalResultsCount: 482
        };
    }
    OverviewPage.prototype.ngOnInit = function () {
        this.campaigns = this.campaignResponse.campaigns;
    };
    OverviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.page.html */ "./src/app/entrace/pages/overview/overview.page.html"),
            styles: [__webpack_require__(/*! ./overview.page.scss */ "./src/app/entrace/pages/overview/overview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OverviewPage);
    return OverviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-overview-overview-module.js.map