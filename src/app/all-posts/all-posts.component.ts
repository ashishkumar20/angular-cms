import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor() { }
  Name: string = "Author Name";
  posts: string[] = ["first", "second", "third", "fourth", "fifth"];
  ngOnInit() {
  }

}
