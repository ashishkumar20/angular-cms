import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  private json;
  private httpdata: Array<Object> = [];
  private id;

  constructor(private DataFromService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.
      subscribe((json) => {
      this.id = json['userId'];
        console.log('idofuser', json);
        this.getPosts();
      });
  }

  getPosts() {
    this.json = this.DataFromService.getPost(`http://jsonplaceholder.typicode.com/user/${this.id}/posts`).
      pipe(map((response) => response.json())).
      subscribe((data: Array<Object>) => { this.httpdata = data });
  }

  onSelect(id){
    this.router.navigate(['fullpost'],{ queryParams: { postid: id } });
    //"fullpost"
  }
}
