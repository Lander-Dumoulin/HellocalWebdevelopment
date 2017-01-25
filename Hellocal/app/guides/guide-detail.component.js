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
var router_1 = require("@angular/router");
var guide_service_1 = require("./guide.service");
var profile_service_1 = require("../profiles/profile.service");
var GuideDetailComponent = (function () {
    function GuideDetailComponent(_route, _router, _guideService, _profileService) {
        this._route = _route;
        this._router = _router;
        this._guideService = _guideService;
        this._profileService = _profileService;
        this.pageTitle = 'Guide Detail';
    }
    GuideDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getProfile(id);
            _this.getGuide(id);
            console.log(_this);
        });
    };
    GuideDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    GuideDetailComponent.prototype.getGuide = function (id) {
        var _this = this;
        this._guideService.getGuide(id).subscribe(function (guide) { return _this.guide = guide; }, function (error) { return _this.errorMessage = error; });
    };
    GuideDetailComponent.prototype.getProfile = function (id) {
        var _this = this;
        this._profileService.getProfile(id).subscribe(function (profile) { return _this.profile = profile; }, function (error) { return _this.errorMessage = error; });
    };
    GuideDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/guides']);
    };
    return GuideDetailComponent;
}());
GuideDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/guides/guide-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        guide_service_1.GuideService,
        profile_service_1.ProfileService])
], GuideDetailComponent);
exports.GuideDetailComponent = GuideDetailComponent;
//# sourceMappingURL=guide-detail.component.js.map