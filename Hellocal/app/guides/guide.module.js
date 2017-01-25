"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var guide_list_component_1 = require("./guide-list.component");
var guide_detail_component_1 = require("./guide-detail.component");
var guide_filter_pipe_1 = require("./guide-filter.pipe");
var guide_service_1 = require("./guide.service");
var profile_service_1 = require("../profiles/profile.service");
var shared_module_1 = require("../shared/shared.module");
var GuideModule = (function () {
    function GuideModule() {
    }
    return GuideModule;
}());
GuideModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'guides', component: guide_list_component_1.GuideListComponent },
                { path: 'guide/:id', component: guide_detail_component_1.GuideDetailComponent }
            ])
        ],
        declarations: [
            guide_list_component_1.GuideListComponent,
            guide_detail_component_1.GuideDetailComponent,
            guide_filter_pipe_1.GuideFilterPipe
        ],
        providers: [
            guide_service_1.GuideService,
            profile_service_1.ProfileService
        ]
    })
], GuideModule);
exports.GuideModule = GuideModule;
//# sourceMappingURL=guide.module.js.map