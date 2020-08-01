import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userArr = {
    usn: '',
    psw: '',
  };
  userData: any[];
  storageKey = 'loginUser';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers().subscribe((data) => {
      this.userData = data;
    });
  }
  getUsers() {
    return this.http.get<any[]>(`./assets/db/Students.json`);
  }

  login() {
    const checkUser = this.userData.filter(
      (u) => u.username === this.userArr.usn && u.password === this.userArr.psw
    );
    if (checkUser.length) {
      Swal.fire({
        icon: 'success',
        title: 'Đăng nhập thành công',
        timer: 1500,
        position: 'center',
        showConfirmButton: false,
      }).then(function () {
        window.location.href = '';
      });
      localStorage.setItem(this.storageKey, JSON.stringify(this.userArr));
      return;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Tài khoản hoặc mật khẩu không đúng',
        timer: 1500,
        position: 'center',
        showConfirmButton: false,
      });
    }
  }
}
