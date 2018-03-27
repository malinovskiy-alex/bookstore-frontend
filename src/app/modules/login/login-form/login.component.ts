import {Component} from '@angular/core';
import {AuthorizationService} from '../../../shared/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {username: '', password: ''};
  error = '';

  constructor(private app: AuthorizationService, private http: HttpClient, public router: Router) {
  }

  login() {
    this.app.authenticate(this.credentials, (response) => {
      this.router.navigateByUrl('/home');
    }, (error) => this.error = error);
    return false;
  }

}
