import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../../shared/auth/auth.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = new User();

  error = null;

  genders: Set<any> = new Set([{id: 1, name: 'Male'}, {id: 2, name: 'Female'}]);

  constructor(private userService: UserService, private router: Router, private app: AuthorizationService) {
  }

  ngOnInit() {
    this.userService.getById(this.app.getCurrentUser().id).subscribe(res => this.user = res);
  }

  update(editForm) {
    if (editForm.form.valid) {
      this.userService.update(this.user.id, this.user).subscribe(res => this.router.navigateByUrl('/home'), error => this.error = error);
    }
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
