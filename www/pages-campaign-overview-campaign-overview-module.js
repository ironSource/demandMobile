(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-campaign-overview-campaign-overview-module"],{

/***/ "./src/app/entrace/pages/campaign-overview/campaign-overview.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/entrace/pages/campaign-overview/campaign-overview.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CampaignOverviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignOverviewModule", function() { return CampaignOverviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _campaign_overview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campaign-overview.page */ "./src/app/entrace/pages/campaign-overview/campaign-overview.page.ts");







var CampaignOverviewModule = /** @class */ (function () {
    function CampaignOverviewModule() {
    }
    CampaignOverviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '', component: _campaign_overview_page__WEBPACK_IMPORTED_MODULE_6__["CampaignOverviewPage"]
                    }
                ])
            ],
            declarations: [_campaign_overview_page__WEBPACK_IMPORTED_MODULE_6__["CampaignOverviewPage"]]
        })
    ], CampaignOverviewModule);
    return CampaignOverviewModule;
}());



/***/ }),

/***/ "./src/app/entrace/pages/campaign-overview/campaign-overview.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/entrace/pages/campaign-overview/campaign-overview.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"campaign.titleIcon\">\n            </ion-avatar>\n            <ion-label>\n                <ion-text>\n                    <h2>{{campaign.name}}</h2>\n                </ion-text>\n                <ion-text>\n                    <h5>{{campaign.id}}</h5>\n                </ion-text>\n            </ion-label>\n        </ion-item>\n        <ion-buttons slot=\"end\">\n            <div (click)=\"onBack()\" class=\"back\">\n                <img \n                     src=\"../../../../assets/icon/arrow-right.svg\" />\n            </div>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>\n                    <ion-label>\n                        <ion-text>\n                            <p>Daily Budget</p>\n                        </ion-text>\n                        <ion-text>\n                            <h1>{{campaign.globalDaily}}</h1>\n                        </ion-text>\n                    </ion-label>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div>\n                    <ion-label>\n                        <ion-text>\n                            <p>Total Budget</p>\n                        </ion-text>\n                        <ion-text>\n                            <h1>{{campaign.globalDaily}}</h1>\n                        </ion-text>\n                    </ion-label>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <div>\n                    <ion-label>\n                        <ion-text>\n                            <p>Installs</p>\n                        </ion-text>\n                        <ion-text>\n                            <h1>535K</h1>\n                        </ion-text>\n                    </ion-label>\n                </div>\n            </ion-col>\n\n\n            <ion-col>\n                <div>\n                    <ion-label>\n                        <ion-text>\n                            <p>Impressions</p>\n                        </ion-text>\n                        <ion-text>\n                            <h1>300K</h1>\n                        </ion-text>\n                    </ion-label>\n                </div>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n\n    <ion-button expand=\"block\">Optimize</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/entrace/pages/campaign-overview/campaign-overview.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/entrace/pages/campaign-overview/campaign-overview.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-item {\n  color: white; }\n  ion-header ion-item div.item-inner {\n    border: 0 !important; }\n  ion-header .back {\n  margin-right: 10px; }\n  ion-header .back img {\n    width: 10px;\n    height: 16px; }\n  ion-content ion-row ion-col {\n  padding: 4px; }\n  ion-content ion-row ion-col div {\n    padding: 5px;\n    border: 1px solid lightgray;\n    border-radius: 3px; }\n  ion-content ion-button {\n  margin: 7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVuLmxldmluL0Rlc2t0b3AvcHJvamVjdHMvZGVtYW5kTW9iaWxlL3NyYy9hcHAvZW50cmFjZS9wYWdlcy9jYW1wYWlnbi1vdmVydmlldy9jYW1wYWlnbi1vdmVydmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFZLEVBQUE7RUFGZDtJQUtHLG9CQUFvQixFQUFBO0VBTHZCO0VBYUUsa0JBQWtCLEVBQUE7RUFicEI7SUFVRyxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBT2Y7RUFHRyxZQUFZLEVBQUE7RUFIZjtJQUtJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCLEVBQUE7RUFQdEI7RUFlRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbnRyYWNlL3BhZ2VzL2NhbXBhaWduLW92ZXJ2aWV3L2NhbXBhaWduLW92ZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXHRpb24taXRlbSB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXG5cdFx0ZGl2Lml0ZW0taW5uZXIge1xuXHRcdFx0Ym9yZGVyOiAwICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG5cdC5iYWNre1xuXHRcdGltZ3tcblx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0aGVpZ2h0OiAxNnB4O1xuXHRcdH1cblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdH1cblxufVxuXG5pb24tY29udGVudCB7XG5cdGlvbi1yb3cge1xuXHRcdGlvbi1jb2wge1xuXHRcdFx0cGFkZGluZzogNHB4O1xuXHRcdFx0ZGl2IHtcblx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0aW9uLWJ1dHRvbiB7XG5cdFx0bWFyZ2luOiA3cHg7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/entrace/pages/campaign-overview/campaign-overview.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/entrace/pages/campaign-overview/campaign-overview.page.ts ***!
  \***************************************************************************/
/*! exports provided: CampaignOverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignOverviewPage", function() { return CampaignOverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CampaignOverviewPage = /** @class */ (function () {
    function CampaignOverviewPage(router) {
        this.router = router;
        this.campaign = {
            name: 'Some campaign name',
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
            deliveryStatusId: 2,
            impressions: 0,
            clicks: 0,
            installs: 0,
            spend: 0,
            ipm: 0,
            ecpm: 0,
            ecpi: 0,
            ad_revenue_7d: 0,
            iap_revenue_7d: 0,
            arpu_7d: 0,
            roas_7d: 0
        };
    }
    CampaignOverviewPage.prototype.ngOnInit = function () {
    };
    CampaignOverviewPage.prototype.onBack = function () {
        this.router.navigate(['/entrace']);
    };
    CampaignOverviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./campaign-overview.page.html */ "./src/app/entrace/pages/campaign-overview/campaign-overview.page.html"),
            styles: [__webpack_require__(/*! ./campaign-overview.page.scss */ "./src/app/entrace/pages/campaign-overview/campaign-overview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CampaignOverviewPage);
    return CampaignOverviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-campaign-overview-campaign-overview-module.js.map