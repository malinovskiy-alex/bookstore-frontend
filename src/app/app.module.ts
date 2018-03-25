import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {UserListComponent} from './modules/user/user-list/user-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {AuthorizationService} from './shared/auth/auth.service';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {XhrInterceptor} from './interceptor/XhrInterceptor';
import {NgModule} from '@angular/core';
import {BasicAuthInterceptor} from './interceptor/BasicAuthInterceptor';
import {UserRegistrationComponent} from './modules/user/user-registration/user-register.component';
import {UserManagementModule} from './modules/user/user.module';
import {UserUpdateComponent} from './modules/user/user-update/user-update.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'home', component: UserListComponent},
  {path: 'profile', component: UserUpdateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: UserRegistrationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    UserManagementModule
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
