import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-welcome',
  template: '<h3 class="welcome"><i>{{welcome}}</i></h3>'
})
export class WelcomeComponent implements OnInit {
  welcome = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn ?
      'Welcome, ' + this.userService.user.name : 'Please log in.';
  }
}


@NgModule({
    declarations: [WelcomeComponent]
})
export class WelcomeModule {

}