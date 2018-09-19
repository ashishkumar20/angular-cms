import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  private json;
  private httpdata: Array<Object> = [];


  constructor(private DataFromService: DataService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.json = this.DataFromService.getPosts().
      pipe(map((response) => response.json())).
      subscribe((data: Array<Object>) => { this.httpdata = data });
  }
}
