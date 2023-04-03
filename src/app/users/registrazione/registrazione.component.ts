import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../customValidator';
import { PrimeNGConfig } from 'primeng/api';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  checked: boolean;

  constructor(
    private config: PrimeNGConfig,
    private userService: UserService,
    private router: Router
    ) {}

  ngOnInit() {
      this.config.setTranslation({
           weak: 'povera',
          medium: 'forte',
          strong: 'forte',
          passwordPrompt: 'scrivi una password',
      });
  }
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    service: new FormControl('', Validators.requiredTrue)
  },
  [CustomValidator.MatchValidator('password', 'ripetiPassword')]
  );

  onSubmit(){
    //console.log(this.form.value);

    const user = {
      name: this.form.value.name,
      email: this.form.value.email
    }

    this.userService.datiUtente.next(user);

    this.router.navigate(['home']);
  }
}
