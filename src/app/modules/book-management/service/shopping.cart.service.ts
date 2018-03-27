import {ShoppingCart} from '../model/shopping.cart';
import {Book} from '../model/book';
import {BookCart} from '../model/book.cart';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ShoppingCartService {
  shoppingCart: ShoppingCart = new ShoppingCart();

  constructor(private http: HttpClient) {

  }

  public addToCart(book: Book): void {
    this.shoppingCart.addBook(book);
  }

  public removeBook(book: BookCart): void {
    this.shoppingCart.removeBook(book);
  }

  public getBooks(): BookCart[] {
    return this.shoppingCart.getBooks();
  }

  public saveOrder() {
  }
}
