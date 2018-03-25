import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/users',);
  }

  save(user): Observable<any> {
    return this.http.post('http://localhost:8080/users', user);
  }

  getById(id): Observable<any> {
    return this.http.get(`http://localhost:8080/users/`+id);
  }

  update(id, user): Observable<any> {
    return this.http.patch('http://localhost:8080/users/' + id, user);
  }
}
