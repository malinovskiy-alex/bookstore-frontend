import {Component} from '@angular/core';
import {AuthorizationService} from '../shared/auth/auth.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {

  constructor(private app: AuthorizationService, private router: Router) {
  }

  logout() {
    this.app.logout().subscribe(resp => this.router.navigateByUrl('/'));
  }
}
