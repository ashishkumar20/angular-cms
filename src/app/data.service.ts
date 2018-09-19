import { Injectable} from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: Http) { }
 private viewPostUrl = 'http://192.168.20.68/comment/viewcomments';
 private viewCommentUrl = 'http://jsonplaceholder.typicode.com/posts';

 getPosts(){
    
    return this.http.get(`${this.viewCommentUrl}`);
  }
  getComments(){

    return this.http.get(`${this.viewCommentUrl}`);
  }
  
  
  
}