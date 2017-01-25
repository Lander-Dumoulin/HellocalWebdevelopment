import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component'

import { GuideModule } from './guides/guide.module';
import { ProfileModule } from './profiles/profile.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },

      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    GuideModule,
    ProfileModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent  
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
