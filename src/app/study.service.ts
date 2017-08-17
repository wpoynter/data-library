import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Study } from './study';

@Injectable()

export class StudyService {
  private studiesUrl = 'assets/data.json';

  constructor(private http: Http) { }

  getStudies(): Promise<Study[]> {
    return this.http.get(this.studiesUrl)
               .toPromise()
               .then(response => response.json() as Study[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
