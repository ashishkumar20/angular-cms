import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute,Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'fullpost',
  templateUrl: './fullpost.component.html',
  styleUrls: ['./fullpost.component.css']
})
export class FullpostComponent implements OnInit {
  options: FormGroup;

  constructor(private data: DataService,
    private route: ActivatedRoute, private route1: Router) { }
    httpdata;
  post;
  id: number;
  ngOnInit() {

    // this.getSinglePost(id);
    this.route.queryParams.
    subscribe((json) => {
      this.id = json['postid'];
      console.log('idofuser', json);
      this.getComment();
    });

    this.route.queryParams.
      subscribe((json) => {
        this.id = json['postid'];
        console.log('id', this.id);
        this.data.getPost(`http://jsonplaceholder.typicode.com/posts/${this.id}`).
          pipe(map((post) => post.json())).
          subscribe((obj) => {
            this.post = obj;
            console.log('post', obj);
          })

      });
  }

  navigate(id) {

    this.route1.navigate(['all-posts'], { queryParams: { userId: id } ,skipLocationChange: true});
    // '/allllpost'
  }

  myFunction(id) {
    // this.route1.navigate(['comment'], { queryParams: { postid: id } });
    //'comment'
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

}

getComment() {
  this.data.getPost(`http://jsonplaceholder.typicode.com/post/${this.id}/comments`).
    pipe(map((response) => response.json())).
    subscribe((data) => { this.httpdata = data;console.log('comment',this.httpdata)});

}

postComment(data){
  alert('Entered comment is :'+data.body +' by '+data.name);
  data.name.innerHTML=" ";
  data.body.innerHTML=" ";
}
}
