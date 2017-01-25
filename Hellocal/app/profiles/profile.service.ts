import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IProfile } from './profile';

@Injectable()
export class ProfileService {
    private _profileUrl = 'http://localhost:3000/api/profiledetails';

    constructor(private _http: Http) { }

    getProfiles(): Observable<IProfile[]>{
        return this._http.get(this._profileUrl)
        .map((response: Response) => <IProfile[]> response.json())
        .do(data => console.log('All profiles: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

getProfile(userId: string): Observable<IProfile>{
    return this.getProfiles()
    .map((profiles: IProfile[]) => profiles.find(p => p.userId === userId));

    // this._profileUrl += "/" + userId;
    // return this._http.get(this._profileUrl)
    // .map((response : Response) => <IProfile> response.json())
    // .do(data => console.log('Profile: ' + JSON.stringify(data)))
    // .catch(this.handleError);
    

}


private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}
}