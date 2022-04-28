import { Component, Inject, OnInit, ReflectiveInjector } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-manual-injector',
  templateUrl: './manual-injector.component.html',
  styleUrls: ['./manual-injector.component.scss']
})
export class ManualInjectorComponent implements OnInit {
  user: {[email: string]: string};
  userService: UserService;

  constructor(@Inject("APP_URL") appUrl: string) {
    console.log("26-04", appUrl); 
    const injector = ReflectiveInjector.resolveAndCreate([UserService]);
    this.userService = injector.get(UserService);

    this.userService.setUser({email: 'Himanshu.tamrakar@outlook.com'});

    this.user = this.userService.getUser();

  }

  ngOnInit(): void {
    console.log(this.userService.getUser());


    setTimeout(() => {
      const injector = ReflectiveInjector.resolveAndCreate([UserService]);
      const userService = injector.get(UserService);

      console.log(userService.getUser());

      setTimeout(() => {
        console.log('This is insider timer', this.userService.getUser());
      }, 1000);

    }, 3000);
  }

}
