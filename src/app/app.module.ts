import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {UserService} from './shared/user/user.service';
import {UserListComponent} from './user-list/user-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {AuthorizationService} from './shared/auth/auth.service';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {XhrInterceptor} from './interceptor/XhrInterceptor';
import {NgModule} from '@angular/core';
import {BasicAuthInterceptor} from './interceptor/BasicAuthInterceptor';
import {RegisterComponent} from './register/register.component';
import {ComplexityValidator} from './shared/validator/complexity.directive';
import {EqualValidator} from './shared/validator/equalvalidator.directive';
import {BirthdayValidator} from './shared/validator/birthdayvalidator.directive';
import { NgDatepickerModule } from 'ng2-datepicker';
import {DatePipe} from '@angular/common';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'home', component: UserListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    AppNavbarComponent,
    HomeComponent,
    RegisterComponent,
    ComplexityValidator,
    BirthdayValidator,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    NgDatepickerModule
  ],
  providers: [UserService, AuthorizationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: XhrInterceptor,
    multi: true
  }, {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
