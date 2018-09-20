import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allauthor',
  templateUrl: './allauthor.component.html',
  styleUrls: ['./allauthor.component.css']
})
export class AllauthorComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  ngOnInit() {
    this.http.get("http://192.168.20.44:8080/api/v1/authors").
      pipe(map((response) => response.json())).
      subscribe(
      (data) => { this.displaydata(data); }
      )
  }
  displaydata(data) { this.httpdata = data; }
}
