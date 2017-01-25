import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GuideListComponent } from './guide-list.component';
import { GuideDetailComponent } from './guide-detail.component';

import { GuideFilterPipe } from './guide-filter.pipe';
import { GuideService } from './guide.service';
import { ProfileService } from '../profiles/profile.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'guides', component: GuideListComponent },
            { path: 'guide/:id', component: GuideDetailComponent}
        ])
    ],
    declarations: [
        GuideListComponent,
        GuideDetailComponent,
        GuideFilterPipe
    ],
    providers: [
        GuideService,
        ProfileService
    ]
})
export class GuideModule {}