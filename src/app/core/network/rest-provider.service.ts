import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RequestArgs} from '@angular/http/src/interfaces';
import {Http, Request, Response, Headers, RequestOptionsArgs, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RestProviderService {

  private serverBaseUrl: string;
  protected headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    if (window.location.origin === 'http://localhost:4200') {
      this.serverBaseUrl = 'http://localhost:12222/api/v1/';
    } else {
      this.serverBaseUrl = 'https://cityguide.nbakaev.com/api/v1/';
    }
  }

  public get(url: string): Observable<any> {
    return this.getWithHttp(url);
  }

  public post(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
    return this.postWithHttp(url, data, args);
  }

  public put(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
    return this.putWithHttp(url, data, args);
  }

  public remove(url: string, data?: any, args?: RequestOptionsArgs): Observable<any> {
    return this.removeWithHttp(url, data, args);
  }

  public getWithHttp(url: string): Observable<any> {
    const args: RequestOptionsArgs = {};
    args.withCredentials = true;
    return this.http.get(this.serverBaseUrl + url, args).map((res: Response) => RestProviderService.json(res));
  }

  public postWithHttp(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
    if (args == null) args = {};
    args.withCredentials = true;
    if (args.headers === undefined) args.headers = this.headers;

    return this.http.post(this.serverBaseUrl + url, JSON.stringify(data), args).map((res: Response) => RestProviderService.json(res));
  }

  public putWithHttp(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
    if (args == null) args = {};
    args.withCredentials = true;
    if (args.headers === undefined) args.headers = this.headers;

    return this.http.put(this.serverBaseUrl + url, JSON.stringify(data), args).map((res: Response) => RestProviderService.json(res));
  }

  public removeWithHttp(url: string, data?: any, args?: RequestOptionsArgs): Observable<any> {
    if (args == null) args = {};
    args.withCredentials = true;

    args.url = this.serverBaseUrl + url;
    args.method = RequestMethod.Delete;
    if (!args.headers) args.headers = this.headers;
    args.body = data ? JSON.stringify(data) : null;

    return this.http.request(new Request(<RequestArgs>args)).map((res: Response) => RestProviderService.json(res));
  }

  private static json(res: Response): any {
    return res.text() === '' ? res : res.json();
  }

}
