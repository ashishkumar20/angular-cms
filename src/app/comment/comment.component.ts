import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  options: FormGroup;

  constructor(private data: DataService, private route: ActivatedRoute) { }
  httpdata;
  id;
  ngOnInit() {
    this.route.queryParams.
      subscribe((json) => {
        this.id = json['postid'];
        console.log('idofuser', json);
        this.getComment();
      });

  }
  getComment() {
    this.data.getPost(`http://jsonplaceholder.typicode.com/post/${this.id}/comments`).
      pipe(map((response) => response.json())).
      subscribe((data) => { this.httpdata = data });

  }

}
