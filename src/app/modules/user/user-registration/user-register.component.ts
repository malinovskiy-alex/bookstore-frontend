import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User = new User();

  error = null;

  genders: string[] = [
    'Male',
    'Female'
  ];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  register(registerForm) {
    if (registerForm.form.valid) {
      this.userService.save(this.user).subscribe(res => this.router.navigateByUrl('/login'), error => this.error = error);
    }
  }
}
