"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var profile_service_1 = require("./profile.service");
var MyProfileComponent = (function () {
    function MyProfileComponent(_profileService) {
        this._profileService = _profileService;
        this.pageTitle = 'My Profile';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.userId = "587d27ab6669c61f10d10edf";
        this.dutch = false;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._profileService.getProfile(this.userId)
            .subscribe(function (profile) { return _this.profile = profile; }, function (error) { return _this.errorMessage = error; });
    };
    return MyProfileComponent;
}());
MyProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/profiles/myprofile.component.html',
        styleUrls: ['app/profiles/myprofile.component.css']
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], MyProfileComponent);
exports.MyProfileComponent = MyProfileComponent;
//# sourceMappingURL=myprofile..component.js.map