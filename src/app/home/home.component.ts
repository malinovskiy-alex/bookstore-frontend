import {Component} from '@angular/core';
import {AuthorizationService} from '../shared/auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private app: AuthorizationService, private http: HttpClient) {

  }

  authenticated() {
    return this.app.user != null;
  }
}
