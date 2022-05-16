import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }
  
  posts = this.http.get(this.ROOT_URL + '/posts');
  
  



  ngOnInit() {
    
  }

}
