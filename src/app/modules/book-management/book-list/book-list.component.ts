import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/books.service';
import {Book} from '../model/book';
import {Page} from '../../../shared/paging/Page';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookPage: Page<Book>;


  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooksPage(0, 5).subscribe(resp => this.bookPage = new Page<Book>(resp._embedded.books, 1, resp.page.totalElements));
  }

  pageChanged(newPage) {
    this.bookService.getBooksPage(newPage - 1, 5).subscribe(resp => this.bookPage = new Page<Book>(resp._embedded.books, newPage, resp.page.totalElements));
  }

}
