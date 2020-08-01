import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './common/content/content.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { UpdateInfoComponent } from './user/update-info/update-info.component';
import { DiscussComponent } from './common/discuss/discuss.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { ContactComponent } from './common/contact/contact.component';
import { QuizComponent } from './common/quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'quiz/:idQuiz', component: QuizComponent },
  { path: 'home', component: ContentComponent },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'auth/forgot-pass',
    component: ForgetPasswordComponent,
  },
  {
    path: 'auth/change-pass',
    component: ChangePasswordComponent,
  },
  {
    path: 'auth/update-info',
    component: UpdateInfoComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'feedback',
    component: ContactComponent,
  },
  {
    path: 'discuss',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
