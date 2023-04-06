import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../customValidator';
import { PrimeNGConfig } from 'primeng/api';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  userInserito: any;

  checked: boolean;

  constructor(
    private config: PrimeNGConfig,
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
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

  aggiungiUser(){
    //console.log(this.form.value);
    const user = this.form.value
    this.userService.insertUser(user).pipe(take(1)).subscribe({
      next: (res) => {
        console.log('response is ', res)
        this.userInserito = res;
      },
      error: (err) =>{
        console.log(err)
      }
    })
    this.userService.datiUtente.next(user);
    this.router.navigate(['home']);
  }


  openModal(content: any, titolo?: string){ //content è sempre obbligatorio
    let title = titolo;

    this.modalService.open(content, {ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) => {
      console.log('azione da eseguire' + titolo)
    }).catch((res) => {
      console.log('nessuna azione da eseguire')
    })
}
}
