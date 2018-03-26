import {NgModule} from '@angular/core';
import {UserService} from './service/user.service';
import {BirthdayValidator} from './validator/birthdayvalidator.directive';
import {ComplexityValidator} from './validator/complexity.directive';
import {EqualValidator} from './validator/equalvalidator.directive';
import {UserRegistrationComponent} from './user-registration/user-register.component';
import {UserListComponent} from './user-list/user-list.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserUpdateComponent} from './user-update/user-update.component';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule],
  declarations: [UserRegistrationComponent, UserUpdateComponent, UserListComponent,
    BirthdayValidator, ComplexityValidator, EqualValidator],
  exports: [UserRegistrationComponent, UserUpdateComponent, UserListComponent],
  providers: [UserService]

})
export class UserManagementModule {
}
