import {Component, inject} from '@angular/core';
import {UserService} from '@stijnvn/user';

@Component({
  selector: 'plugin-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly userService = inject(UserService);

  user = this.userService.user;

  constructor() {
    this.userService.logIn()
    this.userService.updateName('foobar')
  }
}
