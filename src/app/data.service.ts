import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: Http) { }

  getPost(url) {

    return this.http.get(`${url}`);
  }
  getComment(url) {

    return this.http.get(`${url}`);
  }
  createAuthor(author): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(author);
    return this.http.post('/api/v1/authors/', body, options);
    // map((res: Response) => res.json());
  }



}