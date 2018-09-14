import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import{Http} from '@angular/http';
@Component({
  selector: 'all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private http: Http) { }
   httpdata;
   ngOnInit() {
      this.http.get("https://jsonplaceholder.typicode.com/posts").
      pipe(map((response) => response.json())).
      subscribe(
         (data) =>{this.displaydata(data);}
      )
   }
   displaydata(data) {this.httpdata = data;}
}
