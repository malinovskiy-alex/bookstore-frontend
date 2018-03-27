import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ShoppingCartService} from '../service/shopping.cart.service';
import {BookCart} from '../model/book.cart';

@Component({
  selector: 'shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
  }

  removeBook(bookCart: BookCart) {
    this.shoppingCartService.removeBook(bookCart);
  }

  checkoutOrder(): void {
    console.log("Checking out order.");
    this.activeModal.close();
  }

  closePopup() {
    this.activeModal.close();
  }

}
