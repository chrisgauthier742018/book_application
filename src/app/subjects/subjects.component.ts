import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  //this endpoint works 
  //readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  
  //when i use the open libary endpoint, I'm getting this error:
  //SubjectsComponent.html:3 ERROR Error: Cannot find a differ supporting object '[object Object]' of type 'Love'. NgFor only supports binding to Iterables such as Arrays.
  readonly ROOT_URL = 'http://openlibrary.org/subjects/love.json?details=true';

  //readonly ROOT_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    constructor(private http: HttpClient) {}
    //posts = this.http.get(this.ROOT_URL + '/posts');
    subjects = this.http.get(this.ROOT_URL);

  
  



  ngOnInit() {
    
  }

}
