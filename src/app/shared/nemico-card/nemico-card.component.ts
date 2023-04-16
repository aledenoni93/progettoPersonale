import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Nemico } from 'src/app/models/nemico.models';
import { NemicoService } from 'src/app/service/nemico.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-nemico-card',
  templateUrl: './nemico-card.component.html',
  styleUrls: ['./nemico-card.component.scss']
})
export class NemicoCardComponent implements OnInit {

  @Input() pag: string;
  @Output() messaggio = new EventEmitter();

  constructor(
    private nemicoService: NemicoService,
    private userService: UserService
    ){}


  page = 1;
  nemiciPerPagina = 4;
  nemiciTotali: number;
  nemici: Nemico[];
  ruolo: string;
  ricercato: any;
  loading= true;

  ngOnInit(): void {
    this.prendiNemici();
    console.log(this.nemici)
    if(JSON.parse(localStorage.getItem('user')) != null){
      const user=JSON.parse(localStorage.getItem('user')).username;
      this.onGetUser(user.username);
    }

  }

  prendiNemici(){
    this.nemicoService.getNemici().pipe(take(1)).subscribe({
      next: (res) => {
        if(this.pag === 'ricerca') {
          this.nemicoService.testoCercato.subscribe({
            next: (res) => {
              this.ricercato = res;
              if(this.ricercato) {
                this.nemicoService.findNemici(this.ricercato).subscribe({
                  next: (res) => {
                    this.loading = false;
                    this.nemici = res;
                    this.nemiciTotali = res.length;
                    console.log(res);
                  },
                  error: (err) => {
                    console.log(err);
                  }
                })
              }
            },
            error: (err) => {
              console.error(err);
            }
          });
        }else{
        this.loading = false;
        this.nemici = res;
        this.nemiciTotali = res.length;
        if(this.pag === 'home'){
          this.nemici = this.nemici.sort((a, b) => b._id - a._id).slice(0, 4);
        }
      }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }



  paginate(event){
    event.page = event.page +1;
    this.page = event.page;
   }

   onGetUser(username): void{
    this.userService.getUser(username).pipe(take(1))
    .subscribe({
      next: res =>{
        this.ruolo=res.role;
      },
      error: err => console.log(err)
    })
   }
}
