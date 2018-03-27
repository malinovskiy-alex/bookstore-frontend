import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './modules/login/login-form/login.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {AuthorizationService} from './shared/auth/auth.service';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {XhrInterceptor} from './interceptor/XhrInterceptor';
import {NgModule} from '@angular/core';
import {BasicAuthInterceptor} from './interceptor/BasicAuthInterceptor';
import {BookListComponent} from './modules/book-management/book-list/book-list.component';
import {LoginModule} from './modules/login/login.module';
import {UserUpdateComponent} from './modules/user-managemenet/user-update/user-update.component';
import {UserRegistrationComponent} from './modules/user-managemenet/user-registration/user-register.component';
import {UserManagementModule} from './modules/user-managemenet/user-management.module';
import {BookManagementModule} from './modules/book-management/book-management.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'home', component: BookListComponent},
  {path: 'profile', component: UserUpdateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: UserRegistrationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    UserManagementModule,
    LoginModule,
    BookManagementModule
  ],
  providers: [AuthorizationService, {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}, {
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
