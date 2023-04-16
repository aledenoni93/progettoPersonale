import { take } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area.models';
import { AreaService } from 'src/app/service/area.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent implements OnInit {

  @Input() pag: string;

  page = 1;
  areePerPagina = 4;
  areeTotali: number;
  aree: Area[];
  loading= true;
  ruolo: any;



  constructor(
    private areaService: AreaService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.prendiAree();
    if(JSON.parse(localStorage.getItem('user')) != null){
      const user=JSON.parse(localStorage.getItem('user')).username;
      this.onGetUser(user.username);
  }
}

  prendiAree(){
    this.areaService.getAree().pipe(take(1)).subscribe({
      next: (res) => {
        this.loading = false;
        this.aree = res;
        this.areeTotali = res.length;
        if(this.pag === 'home'){
          this.aree = this.aree.slice(0, 4);
        }

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
