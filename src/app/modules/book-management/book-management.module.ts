import {NgModule} from '@angular/core';
import {BookListComponent} from './book-list/book-list.component';
import {BookService} from './service/books.service';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [CommonModule, NgxPaginationModule],
  declarations: [BookListComponent],
  exports: [BookListComponent],
  providers: [BookService]
})
export class BookManagementModule {
}
