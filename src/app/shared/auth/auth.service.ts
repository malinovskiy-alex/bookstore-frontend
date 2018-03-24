import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../modules/user/model/user';

@Injectable()
export class AuthorizationService {

  credentials = {username: '', password: ''};

  user: User = null;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, successCallback, errorCallback) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:8080/user', {headers: headers}).subscribe(response => {
        if (response['name']) {
          this.user = response['principal'];
          this.credentials = credentials;
        }
        return successCallback && successCallback();
      }, error => {
        return errorCallback & errorCallback(error);
      }
    );
  }

}
