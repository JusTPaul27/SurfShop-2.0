import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eshop';

  constructor(public userServ: UserService){  }

  logout(){
    this.userServ.logout();
  }
}
