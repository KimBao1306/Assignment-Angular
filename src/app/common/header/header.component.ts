import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  subjects: any[];
  logined: boolean = false;
  userInfo: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('loginUser'))) {
      this.logined = true;
      this.userInfo = JSON.parse(localStorage.getItem('loginUser'));
    }
    this.getSubjects().subscribe((data) => {
      this.subjects = data;
    });
  }
  getSubjects() {
    return this.http.get<any[]>(`./assets/db/Subjects.js`);
  }
  logout() {
    localStorage.clear();
    Swal.fire({
      icon: 'success',
      title: 'Đăng Xuất thành công',
      timer: 2000,
      position: 'center',
      showConfirmButton: false,
    }).then(function () {
      window.location.href = '';
    });
  }
}
