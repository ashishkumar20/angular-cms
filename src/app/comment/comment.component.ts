import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  ngOnInit() {
    this.http.get("https://192.168.20.68/comment/viewcomments").
      pipe(map((response) => response.json())).
      subscribe(
        (data) => { this.displaydata(data); }
      )
  }
  displaydata(data) { this.httpdata = data; }
}
