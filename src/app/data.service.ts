import { Injectable} from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
httpdata;
  constructor(private http: Http) { }
/*ngOnInit(){
this.httpdata = this.http.get("https://jsonplaceholder.typicode.com/posts").
pipe(map((response) => response.json())).
subscribe(
(data) => { return this.showData(data); }
)

}
showData(data){ return data;}
*/
}