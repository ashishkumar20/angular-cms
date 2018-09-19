import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'fullpost',
  templateUrl: './fullpost.component.html',
  styleUrls: ['./fullpost.component.css']
})
export class FullpostComponent implements OnInit {

  constructor(private data: DataService,
  private route: ActivatedRoute) { }
  Name = "Author's name";
  title = "Title of Posts";
  private post: Array<Object>;
  id : String;
  ngOnInit() {
    // this.getSinglePost(id);
    this.route.queryParams.
    subscribe((json)=>{ this.id = json['id'];console.log(this.id);});
  
    
  }



}
