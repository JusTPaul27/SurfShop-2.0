import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.builder.group({
    username: ['', [Validators.required]],
    name: ['' , [Validators.required]],
    surname: ['' , [Validators.required]] ,
    dob: ['', [Validators.required]],
    email: ['' , [Validators.required, Validators.email]],
    password: ['' , [Validators.required, Validators.minLength(8)]],
    address: ['' , [Validators.required]],
    city: ['' , [Validators.required]],
    cardNumber: ['' , [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
 })

  constructor(private builder: FormBuilder, private userS : UserService) { }

  ngOnInit(): void {
  }

  register(){
    this.userS.register(this.registerForm.value)
  }

  nowForInput(): string{
    return new Date().toISOString().split('T')[0];
  }

}
