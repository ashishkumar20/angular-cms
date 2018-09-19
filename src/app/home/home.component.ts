import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angular-cms';
  httpdata;

  constructor(private data: DataService,
    private route: Router) { }

  ngOnInit() {
    this.displaydata();

  }
  displaydata() {
    this.data.getPosts().
      pipe(map((response) => response.json())).
      subscribe((posts) => {
        this.httpdata = posts;
      });
  }


  navigate() {
    this.route.navigate(['fullpost'], { queryParams: this.httpdata.id });
    // '/fullpost'
  }

  getId(id) {

  }





}


