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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var ProfileService = (function () {
    function ProfileService(_http) {
        this._http = _http;
        this._profileUrl = 'http://localhost:3000/api/profiledetails';
    }
    ProfileService.prototype.getProfiles = function () {
        return this._http.get(this._profileUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All profiles: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProfileService.prototype.getProfile = function (userId) {
        return this.getProfiles()
            .map(function (profiles) { return profiles.find(function (p) { return p.userId === userId; }); });
        // this._profileUrl += "/" + userId;
        // return this._http.get(this._profileUrl)
        // .map((response : Response) => <IProfile> response.json())
        // .do(data => console.log('Profile: ' + JSON.stringify(data)))
        // .catch(this.handleError);
    };
    ProfileService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map