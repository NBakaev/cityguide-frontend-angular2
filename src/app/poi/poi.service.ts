import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {City, Poi} from '../entities/poi';
import {Observable} from 'rxjs/Observable';
import {RestProviderService} from '../core/network/rest-provider.service';

@Injectable()
export class PoiService {

  constructor(private restProviderService: RestProviderService) {
  }

  getAllPoi() {
    return this.restProviderService.get('poi');
  }

  getPoiById(id: string) {
    return this.restProviderService.get(`poi/id/${id}`);
  }

  addPoi(obj: Poi): Observable<Poi> {
    return this.restProviderService.post('poi', obj);
  }

  updatePoi(obj: Poi): Observable<Poi> {
    return this.restProviderService.put('poi', obj);
  }

  deletePoi(poiId: string): Observable<Poi> {
    return this.restProviderService.remove(`poi/${poiId}`);
  }

  // cities

  getAllCities() {
    return this.restProviderService.get('city');
  }

  addCity(obj: City): Observable<City> {
    return this.restProviderService.post('city', obj);
  }

  updateCity(obj: City): Observable<City> {
    return this.restProviderService.put('city', obj);
  }

  deleteCity(poiId: string) {
    return this.restProviderService.remove(`city/${poiId}`);
  }

}
