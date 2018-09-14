import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import{Http} from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cms';
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
   btnClick= function () {
    this.router.navigate(['./createpost.component.html']);
  
};
}

