import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginError: string;
  user: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ){

  }

  onSubmit(credentials: any){
    if(credentials.username != '' && credentials.password != ''){
      this.authService.login(credentials.username, credentials.password).subscribe({
        next: (res) => {
          this.user = res;
          if(res) {
            this.authService.saveStorage(res);
            this.router.navigate(['home']);
          } else{
            this.loginError = 'Username o password errati';
          }
        },
        error: (err) => {
          console.log(err);
          this.loginError = 'Username o password errati';
        }
      })
    }
  }

}
