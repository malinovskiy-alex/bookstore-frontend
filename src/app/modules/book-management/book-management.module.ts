import {NgModule} from '@angular/core';
import {BookListComponent} from './book-list/book-list.component';
import {BookService} from './service/books.service';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart-modal.component';
import {ShoppingCartService} from './service/shopping.cart.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, NgxPaginationModule, FormsModule, HttpClientModule],
  declarations: [BookListComponent, ShoppingCartComponent],
  exports: [BookListComponent, ShoppingCartComponent],
  providers: [BookService, ShoppingCartService],
  entryComponents: [ShoppingCartComponent]
})
export class BookManagementModule {
}
