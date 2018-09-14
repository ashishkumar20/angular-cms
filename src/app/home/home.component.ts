import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angular-cms';
  constructor(private http: Http) { }
  httpdata;
  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").
      pipe(map((response) => response.json())).
      subscribe(
      (data) => { this.displaydata(data); }
      )
  }
  displaydata(data) { this.httpdata = data; }



}


