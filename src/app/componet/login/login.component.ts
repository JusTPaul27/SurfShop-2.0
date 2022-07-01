import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mail: string = '';
  password: string ='';

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.userServ.login(this.mail, this.password);
  
  }

}
