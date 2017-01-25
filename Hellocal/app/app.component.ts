import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
           <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand' style="padding:0;">
                <img src="./app/assets/images/logozondertekst.png" style="max-height:50px; float:none; text-align: center;"/>
                </a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/guides']">Find a guide</a></li>
                    <li><a [routerLink]="['/bookings']">My Bookings</a></li>
                    <li><a [routerLink]="['/profile']">Profile</a></li>
                    <li><a [routerLink]="['/becomeaguide']">Become a guide</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent { 
    pageTitle: string = "HelLocal";
}
