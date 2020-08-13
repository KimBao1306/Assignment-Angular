import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient) {}

  id: string;
  quizCurrent: any;
  quizs: any[];
  index = 0;
  quizsPerPage = 1; //số quiz hiển thị mỗi trang
  total = 0;
  quizTrue = 0;
  quizFalse = 0;
  formAnswers = new FormGroup({
    answers: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    if (!JSON.parse(localStorage.getItem('loginUser'))) {
      window.location.href = '/auth/login';
      return;
    }

    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get('idQuiz');

      //get quiz by id subject
      this.getQuizBySubjectId(this.id).subscribe((data) => {
        this.quizs = data;
        this.quizCurrent = this.quizs[this.index];
      });
    });
  }

  getQuizBySubjectId(id) {
    return this.http.get<any[]>(`../../../assets/db/Quizs/${id}.js`);
  }

  Next() {
    if (+this.formAnswers.value.answers === +this.quizCurrent.AnswerId) {
      if (this.total > this.quizTrue) {
        alert(this.quizFalse + 'Finsish');
      } else {
        this.total = this.total + this.quizCurrent.Marks;
        this.quizTrue++;
      }
    } else {
      this.quizFalse++;
    }
    this.index++;
    this.quizCurrent = this.quizs[this.index];
  }
  // Previous() {
  //   if(this.form.value.answers == this.quizCurrent.AnswerId){
  //     if(this.total > this.quizTrue){
  //       alert(this.quizFalse + "Finsish");
  //     }else{
  //       this.total = this.total + this.quizCurrent.Marks;
  //     this.quizTrue ++;
  //     console.log(this.total)
  //     }
  //   }else{
  //     this.quizFalse ++;
  //     console.log(this.quizFalse)
  //   }
  //   this.index--;
  //   this.quizCurrent = this.quizs[this.index];
  //   // console.log(this.index)
  //   // if(this.index < 0){
  //   //   this.index = 0;
  //   // }else{

  //   // }
  // }
}
