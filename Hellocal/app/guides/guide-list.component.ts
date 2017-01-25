import { Component, OnInit } from '@angular/core';

import { IGuide } from './guide';
import { GuideService } from './guide.service';

@Component({
    templateUrl: 'app/guides/guide-list.component.html',
    styleUrls: ['app/guides/guide-list.component.css']
})
export class GuideListComponent implements OnInit {
    pageTitle: string = 'Guide list';
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string;
    errorMessage: string;

    guides: IGuide[];

    constructor(private _guideService: GuideService) {

    }

    ngOnInit(): void {
        this._guideService.getGuides()
            .subscribe(guides => this.guides = guides,
            error => this.errorMessage = <any>error);
    }
}