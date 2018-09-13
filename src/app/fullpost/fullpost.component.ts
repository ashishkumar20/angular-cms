import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fullpost',
  templateUrl: './fullpost.component.html',
  styleUrls: ['./fullpost.component.css']
})
export class FullpostComponent implements OnInit {

  constructor() { }
  Name = "Author's name";
  title = "Title of Posts";
  ngOnInit() {
  }

}
