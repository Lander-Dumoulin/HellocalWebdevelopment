import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IGuide } from './guide';
import { GuideService } from './guide.service';

import { IProfile } from '../profiles/profile';
import { ProfileService } from '../profiles/profile.service';

@Component({
    templateUrl: 'app/guides/guide-detail.component.html'
})
export class GuideDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Guide Detail';
    guide: IGuide;
    profile: IProfile;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _guideService: GuideService,
        private _profileService: ProfileService) {

    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getProfile(id);
                this.getGuide(id);

                console.log(this);
            });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getGuide(id: string) {
        this._guideService.getGuide(id).subscribe(
            guide => this.guide = guide,
            error => this.errorMessage = <any>error);

    }

    getProfile(id: string) {
        this._profileService.getProfile(id).subscribe(
            profile => this.profile = profile,
            error => this.errorMessage = <any>error);

    }

    onBack(): void {
        this._router.navigate(['/guides']);
    }
}