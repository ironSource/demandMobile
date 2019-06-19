(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notifications-notifications-module"],{

/***/ "./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header\">\n    <label>Add Notification</label>\n    <div>\n      <ion-icon name=\"close\"\n                (click)=\"close()\"></ion-icon>\n    </div>\n  </div>\n  <div class=\"body\">\n    <form [formGroup]=\"form\">\n\n      <div class=\"name-container\">\n        <label position=\"stacked\">Notification Name</label>\n        <input placeholder=\"Name\"\n              formControlName=\"name\"\n               type=\"text\"\n               class=\"name\" />\n      </div>\n\n\n      <div class=\"item-container\">\n        <label position=\"floating\">Campaigns</label>\n        <ion-select placeholder=\"Select campaign\">\n          <ion-select-option *ngFor=\"let item of campaigns$ | async\" [value]=\"item.value\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </div>\n\n\n      <div class=\"item-container\">\n\n\n        <label position=\"floating\">Metric</label>\n        <ion-select placeholder=\"Select metric\">\n          <ion-select-option value=\"1\">Impressions</ion-select-option>\n          <ion-select-option value=\"2\">Installs</ion-select-option>\n          <ion-select-option value=\"3\">Clicks</ion-select-option>\n          <ion-select-option value=\"4\">Spent</ion-select-option>\n        </ion-select>\n      </div>\n\n      <div class=\"item-container\">\n        <label>type</label>\n        <div class=\"slide\">\n          <div>Threshold</div>\n          <div class=\"selected\">Frequency</div>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"false\"\n           class=\"threshold\">\n\n      </div>\n\n      <div class=\"frequesncy\">\n\n        <div class=\"item-container a\">\n          <label position=\"floating\">Interval</label>\n          <input placeholder=\"Type name\"\n                 type=\"text\"\n                 class=\"name\" />\n        </div>\n\n        <div class=\"item-container\">\n          <label>Time unit</label>\n          <ion-select placeholder=\"hours\">\n            <ion-select-option value=\"1\">minutes</ion-select-option>\n            <ion-select-option value=\"2\">hours</ion-select-option>\n            <ion-select-option value=\"4\">days</ion-select-option>\n          </ion-select>\n        </div>\n\n      </div>\n    </form>\n\n    <ion-button [disabled]=\"form.invalid\" (click)=\"dismiss(form.value)\" expand=\"block\">Save</ion-button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .container {\n  color: #021074;\n  padding: 20px; }\n  :host .container .header {\n    display: -webkit-flex;\n    display: flex;\n    font-size: 20px;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    border-bottom: 1px solid #e3e3e3;\n    margin-bottom: 25px; }\n  :host .container .header label {\n      font-weight: 600;\n      display: block;\n      margin-bottom: 20px; }\n  :host .container .header ion-icon {\n      color: #95a6b8;\n      width: 27px;\n      height: 27px; }\n  :host .container ion-item {\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #021074 !important; }\n  :host .container .name-container {\n    font-size: 16px;\n    margin-bottom: 15px; }\n  :host .container .name-container label {\n      margin-bottom: 5px;\n      display: block; }\n  :host .slide {\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  height: 40px;\n  display: -webkit-flex;\n  display: flex;\n  border: solid 1px #e3e3e3; }\n  :host .slide div {\n    -webkit-flex: 1 1 auto;\n            flex: 1 1 auto;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center; }\n  :host .slide div.selected {\n      background-color: #3083ff;\n      border-radius: 3px;\n      color: white; }\n  :host .item-container {\n  margin-bottom: 15px; }\n  :host .item-container label {\n    margin-bottom: 5px;\n    display: block; }\n  :host .item-container.a {\n    padding-right: 10px; }\n  :host ion-select {\n  background-color: #f2f2f2;\n  border-radius: 3px;\n  border: solid 1px #e3e3e3;\n  padding-right: 5px; }\n  :host .frequesncy {\n  display: -webkit-flex;\n  display: flex; }\n  :host .frequesncy div {\n    -webkit-flex: 1 1;\n            flex: 1 1; }\n  :host input.name {\n  display: block;\n  height: 40px;\n  width: 100%;\n  border: solid 1px #e3e3e3;\n  padding: 10px 12px;\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVuLmxldmluL0Rlc2t0b3AvcHJvamVjdHMvZGVtYW5kTW9iaWxlL3NyYy9hcHAvZW50cmFjZS9wYWdlcy9ub3RpZmljYXRpb25zL2FkZC1ub3RpZmljYXRpb25iL2FkZC1ub3RpZmljYXRpb25iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsY0FBYztFQUNkLGFBQWEsRUFBQTtFQUhyQjtJQUtZLHFCQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxtQkFBbUIsRUFBQTtFQVQvQjtNQVdnQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLG1CQUFtQixFQUFBO0VBYm5DO01BZ0JnQixjQUFhO01BQ2IsV0FBVztNQUNYLFlBQVksRUFBQTtFQWxCNUI7SUFzQlksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUIsRUFBQTtFQXhCckM7SUE0QlksZUFBZTtJQUNmLG1CQUFtQixFQUFBO0VBN0IvQjtNQStCZ0Isa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTtFQWhDOUI7RUFzQ1EseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFXO0VBQ1gscUJBQWE7RUFBYixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7RUExQ2pDO0lBNENZLHNCQUFjO1lBQWQsY0FBYztJQUNkLHFCQUFhO0lBQWIsYUFBYTtJQUNiLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBL0MvQjtNQWlEZ0IseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7RUFuRDVCO0VBeURRLG1CQUFtQixFQUFBO0VBekQzQjtJQTJEWSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBNUQxQjtJQStEWSxtQkFBbUIsRUFBQTtFQS9EL0I7RUFxRVEseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7RUF4RTFCO0VBNEVRLHFCQUFhO0VBQWIsYUFBYSxFQUFBO0VBNUVyQjtJQThFWSxpQkFBUztZQUFULFNBQVMsRUFBQTtFQTlFckI7RUFtRlEsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbnRyYWNlL3BhZ2VzL25vdGlmaWNhdGlvbnMvYWRkLW5vdGlmaWNhdGlvbmIvYWRkLW5vdGlmaWNhdGlvbmIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICAuY29udGFpbmVye1xuICAgICAgICBjb2xvcjogIzAyMTA3NDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBjb2xvcjojOTVhNmI4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAyMTA3NCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUtY29udGFpbmVye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIGxhYmVse1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiBcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2xpZGV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgaGVpZ2h0OjQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlM2UzZTM7XG4gICAgICAgIGRpdntcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICYuc2VsZWN0ZWR7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwODNmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICBcbiAgICB9XG4gICAgLml0ZW0tY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgICYuYXtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGlvbi1zZWxlY3R7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2UzZTNlMztcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cblxuICAgIC5mcmVxdWVzbmN5e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dC5uYW1le1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2UzZTNlMztcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddNotificationbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationbComponent", function() { return AddNotificationbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_entrace_campaign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entrace/campaign.service */ "./src/app/entrace/campaign.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AddNotificationbComponent = /** @class */ (function () {
    function AddNotificationbComponent(modalController, fb, campaignService) {
        this.modalController = modalController;
        this.fb = fb;
        this.campaignService = campaignService;
    }
    AddNotificationbComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.campaigns$ = this.campaignService.getCampaigns()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return value.campaigns.map(function (item) { return ({ name: item.name, value: item.id }); }); }));
    };
    AddNotificationbComponent.prototype.close = function () {
        this.modalController.dismiss();
    };
    AddNotificationbComponent.prototype.dismiss = function (data) {
        this.modalController.dismiss(data);
    };
    AddNotificationbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-notificationb',
            template: __webpack_require__(/*! ./add-notificationb.component.html */ "./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.html"),
            styles: [__webpack_require__(/*! ./add-notificationb.component.scss */ "./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_entrace_campaign_service__WEBPACK_IMPORTED_MODULE_4__["CampaignService"]])
    ], AddNotificationbComponent);
    return AddNotificationbComponent;
}());



/***/ }),

/***/ "./src/app/entrace/pages/notifications/notifications.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/entrace/pages/notifications/notifications.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/entrace/pages/notifications/notifications.page.ts");
/* harmony import */ var _add_notificationb_add_notificationb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-notificationb/add-notificationb.component */ "./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.ts");









var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"], _add_notificationb_add_notificationb_component__WEBPACK_IMPORTED_MODULE_7__["AddNotificationbComponent"]],
            providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]],
            entryComponents: [_add_notificationb_add_notificationb_component__WEBPACK_IMPORTED_MODULE_7__["AddNotificationbComponent"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/entrace/pages/notifications/notifications.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/entrace/pages/notifications/notifications.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Notifications center\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"form\">\n        <div class=\"basic-notifications\">\n            <div class=\"header\">\n                <span>Basic notifications</span>\n            </div>\n\n            <div formArrayName=\"basic\">\n                <div class=\"notification\"\n                     *ngFor=\"let notification of form.get('basic').controls; let i = index\">\n                    <div class=\"notification-containr\"\n                         [formGroup]=\"form.get('basic').controls[i]\">\n                        <label>{{notification.get('name').value}}</label>\n                        <ion-toggle formControlName=\"value\"></ion-toggle>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"advanced-notifications\">\n            <div class=\"header\">\n                <span>Advanced notifications</span>\n            </div>\n\n            <div formArrayName=\"advanced\">\n                <div class=\"notification\"\n                     *ngFor=\"let notification of form.get('advanced').controls; let i = index\">\n                    <div class=\"notification-containr\"\n                         [formGroup]=\"form.get('advanced').controls[i]\">\n                        <label>{{notification.get('name').value}}</label>\n                        <ion-toggle formControlName=\"value\"></ion-toggle>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"button-container\">\n            <ion-button (click)=\"addNewNotification()\" expand=\"block\">Add Notification</ion-button>\n        </div>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/entrace/pages/notifications/notifications.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/entrace/pages/notifications/notifications.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .advanced-notifications,\n:host .basic-notifications {\n  color: #001688;\n  font-size: 14px; }\n  :host .advanced-notifications .header,\n  :host .basic-notifications .header {\n    background-color: #e3e3e3;\n    height: 32px;\n    padding: 2px 0px 2px 50px;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center; }\n  :host .advanced-notifications .notification-containr,\n  :host .basic-notifications .notification-containr {\n    height: 50px;\n    padding: 2px 20px 2px 50px;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    border-bottom: 1px solid #e3e3e3; }\n  :host .button-container {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVuLmxldmluL0Rlc2t0b3AvcHJvamVjdHMvZGVtYW5kTW9iaWxlL3NyYy9hcHAvZW50cmFjZS9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUdRLGNBQWM7RUFDZCxlQUFlLEVBQUE7RUFKdkI7O0lBTVkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQWE7SUFBYixhQUFhO0lBQ2IsMkJBQWtCO1lBQWxCLG1CQUFrQixFQUFBO0VBVjlCOztJQWFZLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIscUJBQWE7SUFBYixhQUFhO0lBQ2IsMkJBQWtCO1lBQWxCLG1CQUFrQjtJQUNsQixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGdDQUFnQyxFQUFBO0VBbEI1QztFQXVCUSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbnRyYWNlL3BhZ2VzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICAuYWR2YW5jZWQtbm90aWZpY2F0aW9ucyxcbiAgICAuYmFzaWMtbm90aWZpY2F0aW9uc3tcbiAgICAgICAgY29sb3I6ICMwMDE2ODg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMHB4IDJweCA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubm90aWZpY2F0aW9uLWNvbnRhaW5ye1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDIwcHggMnB4IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/entrace/pages/notifications/notifications.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/entrace/pages/notifications/notifications.page.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_notificationb_add_notificationb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-notificationb/add-notificationb.component */ "./src/app/entrace/pages/notifications/add-notificationb/add-notificationb.component.ts");





var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(fb, modalController) {
        this.fb = fb;
        this.modalController = modalController;
    }
    NotificationsPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            basic: this.fb.array([
                this.buildFormGroup({ name: 'Daily budget capping', value: true }),
                this.buildFormGroup({ name: 'Total budget capping', value: false })
            ]),
            advanced: this.fb.array([])
        });
        this.initLisnters();
    };
    NotificationsPage.prototype.addNewNotification = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_notificationb_add_notificationb_component__WEBPACK_IMPORTED_MODULE_4__["AddNotificationbComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = _a.sent();
                        if (data && data.data && data.data.name) {
                            this.form.get('advanced').push(this.buildFormGroup({ name: data.data.name, value: true }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.buildFormGroup = function (_a) {
        var name = _a.name, value = _a.value;
        return this.fb.group({
            name: [name],
            value: [value]
        });
    };
    NotificationsPage.prototype.initLisnters = function () {
        this.form.get('basic').valueChanges.subscribe(console.log);
        // Todo - send http request to update notification status
    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/entrace/pages/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/entrace/pages/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-notifications-notifications-module.js.map