import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private readonly BASE_URL = 'https://628b2f157886bbbb37b20caa.mockapi.io/users';
  
  public user?: User;
  
  
  constructor(private http: HttpClient, private router: Router) { }
  
  login(mail: string, password: string) {
    const url = this.BASE_URL + '?email=' + mail;
    this.http.get<User[]>(url).subscribe({
      next: users => {
        if (users[0].password === password) {
          this.user = users[0];
          this.router.navigate(['/user']);
        } else{
          alert('Username o password non corretta');
        }
      },
      error: err => console.log(err)   
    })
  }

  logout() {
    this.user = undefined;
  }

  register(user: User){
    const newUser = user;
    newUser.dob = new Date(newUser.dob);
    this.http.post<User>(this.BASE_URL, newUser,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)     
    })
  }
}
