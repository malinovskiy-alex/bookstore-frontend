import {NgModule} from '@angular/core';
import {UserService} from './service/user.service';
import {BirthdayValidator} from './validator/birthdayvalidator.directive';
import {ComplexityValidator} from './validator/complexity.directive';
import {EqualValidator} from './validator/equalvalidator.directive';
import {RegisterComponent} from './register/register.component';
import {UserListComponent} from './user-list/user-list.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule.forRoot()],
  declarations: [RegisterComponent, UserListComponent, BirthdayValidator, ComplexityValidator, EqualValidator],
  exports: [RegisterComponent, UserListComponent, BirthdayValidator, ComplexityValidator, EqualValidator],
  providers: [UserService]

})
export class UserManagementModule {
}
