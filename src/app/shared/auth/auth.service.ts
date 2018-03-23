import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthorizationService {

  authenticated = false;

  credentials = {username: '', password: ''};

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, successCallback, errorCallback) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:8080/user', {headers: headers}).subscribe(response => {
        if (response['name']) {
          this.authenticated = true;
          this.credentials = credentials;
        } else {
          this.authenticated = false;
        }
        return successCallback && successCallback();
      }, error => {
        return errorCallback & errorCallback(error);
      }
    );
  }

}
