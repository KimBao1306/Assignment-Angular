import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { AsideComponent } from './common/aside/aside.component';
import { ContentComponent } from './common/content/content.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { UpdateInfoComponent } from './user/update-info/update-info.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ContactComponent } from './common/contact/contact.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { DiscussComponent } from './common/discuss/discuss.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    UpdateInfoComponent,
    ChangePasswordComponent,
    ContactComponent,
    FeedbackComponent,
    DiscussComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
