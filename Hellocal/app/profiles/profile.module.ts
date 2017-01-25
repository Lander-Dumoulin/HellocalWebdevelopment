import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


import { ProfileService } from './profile.service';
import { MyProfileComponent } from './myprofile..component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'profile', component: MyProfileComponent}
    ])
  ],
  declarations: [
    MyProfileComponent
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule {}
