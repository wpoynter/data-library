import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DataLibraryConfig } from './data-library-config.model';

@Injectable()

export class ConfigService {
  private configUrl = 'assets/config.json';

  constructor(private http: Http) { }

  getConfig(): Promise<DataLibraryConfig> {
    return this.http.get(this.configUrl)
               .toPromise()
               .then(response => response.json() as DataLibraryConfig)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
