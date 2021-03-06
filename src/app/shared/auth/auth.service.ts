import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../modules/user-managemenet/model/user';

@Injectable()
export class AuthorizationService {

  credentials = {username: '', password: ''};

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, successCallback, errorCallback) {

    const header = 'Basic ' + btoa(credentials.username + ':' + credentials.password);

    const headers = new HttpHeaders(credentials ? {
      authorization: header
    } : {});

    this.http.get('http://localhost:8080/user', {headers: headers}).subscribe(response => {
        if (response['name']) {
          this.setCurrentUser(response['principal']);
          this.setAuthHeader(header);
          this.credentials = credentials;
        }
        return successCallback && successCallback();
      }, error => {
        return errorCallback & errorCallback(error);
      }
    );
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  removeCurrentUser(): void {
    localStorage.removeItem('currentUser');
  }

  removeAuthHeader(): void {
    localStorage.removeItem('authHeader');
  }

  getAuthHeader(): string {
    return localStorage.getItem('authHeader');
  }

  private setAuthHeader(header): void {
    return localStorage.setItem('authHeader', header);
  }

  private setCurrentUser(user): void {
    return localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout() {
    return this.http.post('http://localhost:8080/logout', {}).finally(() => {
      this.removeCurrentUser();
      this.removeAuthHeader();
    });
  }
}
