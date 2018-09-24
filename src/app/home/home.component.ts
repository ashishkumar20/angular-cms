import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Angular-cms';
  httpdata: string[];
  id;


  constructor(private data: DataService,
    private route: Router) { }

  ngOnInit() {
    this.displaydata();
  }
  displaydata() {
    this.data.getPost('http://jsonplaceholder.typicode.com/posts').
      pipe(map((response) => response.json())).
      subscribe((posts) => {
        console.log('posts', posts)
        this.httpdata = posts;
      });
  }


  navigate(id) {
    this.route.navigate(['fullpost'], { queryParams: { postid: id } });
    // '/fullpost'
  }

}


