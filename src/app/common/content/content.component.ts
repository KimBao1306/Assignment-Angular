import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  subjects: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(`../../../assets/db/Subjects.js`).subscribe((data) => {
      this.subjects = data;
    });
  }
}
