import { Component, OnInit } from '@angular/core';


import { IProfile } from './profile';
import { ProfileService } from './profile.service';

@Component({
    templateUrl: 'app/profiles/myprofile.component.html',
    styleUrls: ['app/profiles/myprofile.component.css']
})
export class MyProfileComponent implements OnInit {
    pageTitle: string = 'My Profile';
    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;
    userId: string = "587d27ab6669c61f10d10edf";
    profile: IProfile;
    dutch: boolean = false;

    

    
   

 

constructor(private _profileService: ProfileService){}

ngOnInit(): void{
    this._profileService.getProfile(this.userId)
    .subscribe(profile => this.profile = profile,
    error => this.errorMessage = <any>error);


}
}