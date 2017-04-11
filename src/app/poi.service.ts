import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PoiService {

  constructor(private http: Http) {
  }

  getAllPoi() {
    return this.http.get('https://cityguide.nbakaev.com/api/v1/poi')
      .map(response => response.json());
  }

  getAllCities() {
    return this.http.get('https://cityguide.nbakaev.com/api/v1/city')
      .map(response => response.json());
  }

  getPoiById(id: string) {
    return this.http.get('https://cityguide.nbakaev.com/api/v1/poi/id/'+id)
      .map(response => response.json());
  }

}
