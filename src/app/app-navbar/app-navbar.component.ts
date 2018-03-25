import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorizationService} from '../shared/auth/auth.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {

  constructor(private app: AuthorizationService, private http: HttpClient, private router: Router) {
  }

  logout() {
    this.http.post('http://localhost:8080/logout', {}).finally(() => {
      this.app.removeCurrentUser();
      this.app.removeAuthHeader();
      this.router.navigateByUrl('/');
    }).subscribe();
  }

}
