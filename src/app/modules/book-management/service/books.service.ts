import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) {
  }

  getBooksPage(page, size): Observable<any> {
    return this.http.get('http://localhost:8080/books?page=' + page + '&size=' + size,);
  }
}
