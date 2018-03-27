import {Book} from './book';
import {BookCart} from './book.cart';

export class ShoppingCart {
  constructor(public books: BookCart[] = []) {}

  public getTotalPrice(): number {
    let sum = 0;
    for (let book of this.books) {
      sum += book.getTotal();
    }
    return sum;
  }

  public addBook(book: Book): void {
    let bookInCart = this.books.find(bookPredicate => bookPredicate.book == book);
    if (bookInCart != null) {
      bookInCart.incrementCount();
    } else {
      this.books.push(new BookCart(book, 1));
    }
  }

  public removeBook(book: BookCart): void {
    this.books.splice(this.books.lastIndexOf(book), 1);
  }

  public getBooks(): BookCart[] {
    return this.books;
  }
}
