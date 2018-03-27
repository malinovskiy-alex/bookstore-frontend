import {Component} from '@angular/core';
import {AuthorizationService} from '../shared/auth/auth.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/finally';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ShoppingCartComponent} from '../modules/book-management/shopping-cart/shopping-cart-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {

  constructor(public app: AuthorizationService, private router: Router, private modalService: NgbModal) {
  }

  logout() {
    this.app.logout().subscribe(resp => this.router.navigateByUrl('/'));
  }

  openCart() {
    this.modalService.open(ShoppingCartComponent);
  }
}
