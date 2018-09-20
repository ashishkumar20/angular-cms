import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'fullpost',
  templateUrl: './fullpost.component.html',
  styleUrls: ['./fullpost.component.css']
})
export class FullpostComponent implements OnInit {

  constructor(private data: DataService,
    private route: ActivatedRoute, private route1: Router) { }
  post;
  id: number;
  ngOnInit() {
    // this.getSinglePost(id);

    this.route.queryParams.
      subscribe((json) => {
        this.id = json['postid'];
        console.log('idofuser', this.id);
        this.data.getPost(`http://jsonplaceholder.typicode.com/posts/${this.id}`).
          pipe(map((post) => post.json())).
          subscribe((obj) => {
            this.post = obj;
            console.log('post', obj);
          })

      });


  }

  navigate(id) {

    this.route1.navigate(['all-posts'], { queryParams: { userId: id } });
    // '/allllpost'
  }

  navigateComment(id) {
    this.route1.navigate(['comment'], { queryParams: { postid: id } });
    // '/app-comment'
  }


}
