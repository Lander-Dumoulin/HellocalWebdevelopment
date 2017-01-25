import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IGuide } from './guide';

@Injectable()
export class GuideService {
    private _guideUrl = 'http://localhost:3000/api/guides';

    constructor(private _http: Http) { }

    getGuides(): Observable<IGuide[]> {
        return this._http.get(this._guideUrl)
            .map((response: Response) => <IGuide[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getGuide(userId: string): Observable<IGuide> {
        return this.getGuides()
            .map((guides: IGuide[]) => guides.find(g => g.userId === userId));
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}