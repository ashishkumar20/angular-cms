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
  myFunction() {
    var x = document.getElementById("comment");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
}
