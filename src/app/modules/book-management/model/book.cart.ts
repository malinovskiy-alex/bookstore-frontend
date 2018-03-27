import {Book} from './book';

export class BookCart {
  constructor(public book: Book,
              public countInCart: number = 0) {
  }

  public incrementCount(): void {
    this.countInCart++;
  }

  public setCount(count: number): void {
    this.countInCart = count;
  }

  public getTotal(): number {
    return this.book.price * this.countInCart;
  }
}
