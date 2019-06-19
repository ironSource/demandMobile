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
/* harmony import */ var _optimize_modal_optimize_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./optimize-modal/optimize-modal.page */ "./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.ts");








var CampaignOverviewModule = /** @class */ (function () {
    function CampaignOverviewModule() {
    }
    CampaignOverviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                // OptimizeModalPageModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '', component: _campaign_overview_page__WEBPACK_IMPORTED_MODULE_6__["CampaignOverviewPage"],
                    }
                ])
            ],
            providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]],
            declarations: [_campaign_overview_page__WEBPACK_IMPORTED_MODULE_6__["CampaignOverviewPage"], _optimize_modal_optimize_modal_page__WEBPACK_IMPORTED_MODULE_7__["OptimizeModalPage"]],
            entryComponents: [_optimize_modal_optimize_modal_page__WEBPACK_IMPORTED_MODULE_7__["OptimizeModalPage"]]
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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"campaign.titleIcon\">\n            </ion-avatar>\n            <ion-label>\n                <ion-text>\n                    <h2>{{campaign.name}}</h2>\n                </ion-text>\n                <ion-text>\n                    <h5>{{campaign.id}}</h5>\n                </ion-text>\n            </ion-label>\n        </ion-item>\n        <ion-buttons slot=\"end\">\n            <div (click)=\"onBack()\" class=\"back\">\n                <img\n                        src=\"../../../../assets/icon/arrow-right.svg\"/>\n            </div>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"content-container\">\n        <div class=\"page-title\">\n            <ion-text>\n                <p>Spend</p>\n            </ion-text>\n            <ion-text>\n                <h1>{{campaign.spend}}</h1>\n            </ion-text>\n        </div>\n\n        <div class=\"chart-image\">\n            <ion-img src=\"../../../../assets/images/chart-image.png\"></ion-img>\n        </div>\n        <ion-grid class=\"metrics\">\n            <ion-row>\n                <ion-col>\n                    <div>\n                        <ion-label>\n                            <ion-text>\n                                <p>Daily Budget</p>\n                            </ion-text>\n                            <ion-text>\n                                <!--<h1>{{campaign.globalDaily}}</h1>-->\n                                <h1>{{getBudgetText(campaign.globalDaily)}}</h1>\n                            </ion-text>\n                        </ion-label>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <div>\n                        <ion-label>\n                            <ion-text>\n                                <p>Total Budget</p>\n                            </ion-text>\n                            <ion-text>\n                                <!--<h1>{{campaign.globalTotal}}</h1>-->\n                                <h1>{{getBudgetText(campaign.globalTotal)}}</h1>\n                            </ion-text>\n                        </ion-label>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <div>\n                        <ion-label>\n                            <ion-text>\n                                <p>Installs</p>\n                            </ion-text>\n                            <ion-text>\n                                <h1>{{campaign.installs}}</h1>\n                            </ion-text>\n                        </ion-label>\n                    </div>\n                </ion-col>\n\n\n                <ion-col>\n                    <div>\n                        <ion-label>\n                            <ion-text>\n                                <p>Impressions</p>\n                            </ion-text>\n                            <ion-text>\n                                <h1>{{campaign.impressions}}</h1>\n                            </ion-text>\n                        </ion-label>\n                    </div>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n        <ion-button (click)=\"openOptimizeModal()\" expand=\"block\">Optimize</ion-button>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/entrace/pages/campaign-overview/campaign-overview.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/entrace/pages/campaign-overview/campaign-overview.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  margin: 0 10px; }\n\nion-header ion-item {\n  color: white; }\n\nion-header ion-item div.item-inner {\n    border: 0 !important; }\n\nion-header .back {\n  margin-right: 10px; }\n\nion-header .back img {\n    width: 10px;\n    height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVuLmxldmluL0Rlc2t0b3AvcHJvamVjdHMvZGVtYW5kTW9iaWxlL3NyYy9hcHAvZW50cmFjZS9wYWdlcy9jYW1wYWlnbi1vdmVydmlldy9jYW1wYWlnbi1vdmVydmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFjLEVBQUE7O0FBRWY7RUFFRSxZQUFZLEVBQUE7O0FBRmQ7SUFLRyxvQkFBb0IsRUFBQTs7QUFMdkI7RUFhRSxrQkFBa0IsRUFBQTs7QUFicEI7SUFVRyxXQUFXO0lBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cmFjZS9wYWdlcy9jYW1wYWlnbi1vdmVydmlldy9jYW1wYWlnbi1vdmVydmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdG1hcmdpbjogMCAxMHB4O1xufVxuaW9uLWhlYWRlciB7XG5cdGlvbi1pdGVtIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cblx0XHRkaXYuaXRlbS1pbm5lciB7XG5cdFx0XHRib3JkZXI6IDAgIWltcG9ydGFudDtcblx0XHR9XG5cdH1cblx0LmJhY2t7XG5cdFx0aW1ne1xuXHRcdFx0d2lkdGg6IDEwcHg7XG5cdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0fVxuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0fVxuXG59XG4iXX0= */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _optimize_modal_optimize_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./optimize-modal/optimize-modal.page */ "./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.ts");





var CampaignOverviewPage = /** @class */ (function () {
    function CampaignOverviewPage(router, route, modalController) {
        this.router = router;
        this.route = route;
        this.modalController = modalController;
        this.campaign = route.snapshot.data.campaign;
    }
    CampaignOverviewPage.prototype.ngOnInit = function () {
    };
    CampaignOverviewPage.prototype.openOptimizeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _optimize_modal_optimize_modal_page__WEBPACK_IMPORTED_MODULE_4__["OptimizeModalPage"],
                            componentProps: {
                                campaign: this.campaign
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                console.log('The result:', detail.data);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CampaignOverviewPage.prototype.getBudgetText = function (value) {
        return value ? value : 'Unlimited';
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], CampaignOverviewPage);
    return CampaignOverviewPage;
}());



/***/ }),

/***/ "./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Optimize</ion-title>\n        <div>\n            <ion-icon name=\"close\"\n                      (click)=\"close()\"></ion-icon>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"content-container\">\n        <div class=\"item-container\">\n            <div class=\"matured optimize-item\">\n                <label>Matured cohort</label>\n                <div class=\"slide\">\n                    <div class=\"selected\">D3</div>\n                    <div>D7</div>\n                </div>\n            </div>\n        </div>\n\n        <ion-grid class=\"metrics\">\n            <ion-row>\n                <ion-col>\n                    <div>\n                        <ion-label>\n                            <ion-text>\n                                <p>ROAS D3</p>\n                            </ion-text>\n                            <ion-text>\n                                <h1>{{campaign.roas_3d}}</h1>\n                            </ion-text>\n                        </ion-label>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <div>\n                        <ion-label>\n                            <ion-text>\n                                <p>ARPU D3</p>\n                            </ion-text>\n                            <ion-text>\n                                <h1>{{campaign.arpu_3d}}</h1>\n                            </ion-text>\n                        </ion-label>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <div>\n                        <ion-label>\n                            <ion-text>\n                                <p>Installs</p>\n                            </ion-text>\n                            <ion-text>\n                                <h1>{{campaign.installs}}</h1>\n                            </ion-text>\n                        </ion-label>\n                    </div>\n                </ion-col>\n\n\n                <ion-col>\n                    <div>\n                        <ion-label>\n                            <ion-text>\n                                <p>Spend</p>\n                            </ion-text>\n                            <ion-text>\n                                <h1>{{campaign.spend}}</h1>\n                            </ion-text>\n                        </ion-label>\n                    </div>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n        <div class=\"item-container roas-container optimize-item\">\n            <label class=\"roas-item\" position=\"floating\">ROAS Goal D3</label>\n            <input type=\"text\"\n                   class=\"roas roas-item\"/>\n        </div>\n\n        <ion-button expand=\"block\">Save</ion-button>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host input.roas {\n  display: block;\n  height: 40px;\n  width: 100%;\n  border: solid 1px #e3e3e3;\n  padding: 10px 12px;\n  outline: none; }\n\n:host .item-container {\n  margin-bottom: 15px; }\n\n:host .item-container label {\n    margin-bottom: 5px;\n    display: block; }\n\n:host .item-container.roas-container {\n    display: -webkit-flex;\n    display: flex; }\n\n:host .item-container.roas-container .roas-item {\n      width: 50%;\n      margin: auto; }\n\n:host .matured {\n  display: -webkit-flex;\n  display: flex; }\n\n:host .matured label {\n    width: 50%;\n    margin: auto; }\n\n:host .matured .slide {\n    width: 50%;\n    background-color: #f2f2f2;\n    border-radius: 3px;\n    height: 40px;\n    display: -webkit-flex;\n    display: flex;\n    border: solid 1px #e3e3e3; }\n\n:host .matured .slide div {\n      -webkit-flex: 1 1 auto;\n              flex: 1 1 auto;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-justify-content: center;\n              justify-content: center;\n      -webkit-align-items: center;\n              align-items: center; }\n\n:host .matured .slide div.selected {\n        background-color: #3083ff;\n        border-radius: 3px;\n        color: white; }\n\n:host .optimize-item {\n  margin: 10px 0;\n  padding: 10px 0;\n  border: 1px solid #e3e3e3;\n  border-left: 0px;\n  border-right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVuLmxldmluL0Rlc2t0b3AvcHJvamVjdHMvZGVtYW5kTW9iaWxlL3NyYy9hcHAvZW50cmFjZS9wYWdlcy9jYW1wYWlnbi1vdmVydmlldy9vcHRpbWl6ZS1tb2RhbC9vcHRpbWl6ZS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFSZjtFQVlFLG1CQUFtQixFQUFBOztBQVpyQjtJQWNHLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7O0FBZmpCO0lBa0JHLHFCQUFhO0lBQWIsYUFBYSxFQUFBOztBQWxCaEI7TUFxQkksVUFBVTtNQUNWLFlBQVksRUFBQTs7QUF0QmhCO0VBNEJFLHFCQUFhO0VBQWIsYUFBYSxFQUFBOztBQTVCZjtJQStCRyxVQUFVO0lBQ1YsWUFBWSxFQUFBOztBQWhDZjtJQW1DRyxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFXO0lBQ1gscUJBQWE7SUFBYixhQUFhO0lBQ2IseUJBQXlCLEVBQUE7O0FBeEM1QjtNQTBDSSxzQkFBYztjQUFkLGNBQWM7TUFDZCxxQkFBYTtNQUFiLGFBQWE7TUFDYiwrQkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLDJCQUFtQjtjQUFuQixtQkFBbUIsRUFBQTs7QUE3Q3ZCO1FBK0NLLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsWUFBWSxFQUFBOztBQWpEakI7RUF5REUsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cmFjZS9wYWdlcy9jYW1wYWlnbi1vdmVydmlldy9vcHRpbWl6ZS1tb2RhbC9vcHRpbWl6ZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cblx0aW5wdXQucm9hc3tcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0Ym9yZGVyOiBzb2xpZCAxcHggI2UzZTNlMztcblx0XHRwYWRkaW5nOiAxMHB4IDEycHg7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0fVxuXG5cdC5pdGVtLWNvbnRhaW5lcntcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdGxhYmVse1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHRcdCYucm9hcy1jb250YWluZXJ7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXG5cdFx0XHQucm9hcy1pdGVtIHtcblx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5tYXR1cmVkIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXG5cdFx0bGFiZWwge1xuXHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdG1hcmdpbjogYXV0bztcblx0XHR9XG5cdFx0LnNsaWRle1xuXHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRoZWlnaHQ6NDBweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRib3JkZXI6IHNvbGlkIDFweCAjZTNlM2UzO1xuXHRcdFx0ZGl2e1xuXHRcdFx0XHRmbGV4OiAxIDEgYXV0bztcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdCYuc2VsZWN0ZWR7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMwODNmZjtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHQub3B0aW1pemUtaXRlbSB7XG5cdFx0bWFyZ2luOiAxMHB4IDA7XG5cdFx0cGFkZGluZzogMTBweCAwO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG5cdFx0Ym9yZGVyLWxlZnQ6IDBweDtcblx0XHRib3JkZXItcmlnaHQ6IDBweDtcblx0fVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.ts ***!
  \***************************************************************************************/
/*! exports provided: OptimizeModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizeModalPage", function() { return OptimizeModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var OptimizeModalPage = /** @class */ (function () {
    function OptimizeModalPage(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
    }
    OptimizeModalPage.prototype.ngOnInit = function () {
    };
    OptimizeModalPage.prototype.ionViewWillEnter = function () {
        this.campaign = this.navParams.get('campaign');
    };
    OptimizeModalPage.prototype.close = function () {
        this.modalController.dismiss();
    };
    OptimizeModalPage.prototype.onDismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = '';
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OptimizeModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-optimize-modal',
            template: __webpack_require__(/*! ./optimize-modal.page.html */ "./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.html"),
            styles: [__webpack_require__(/*! ./optimize-modal.page.scss */ "./src/app/entrace/pages/campaign-overview/optimize-modal/optimize-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], OptimizeModalPage);
    return OptimizeModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-campaign-overview-campaign-overview-module.js.map