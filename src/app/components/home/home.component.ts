import { Component, OnInit } from '@angular/core';
import { Nemico } from 'src/app/models/nemico.models';
import { NemicoService } from 'src/app/service/nemico.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  email: string;
  username: string;

  nemici: Nemico[];

  constructor(
    private nemicoService: NemicoService,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.nemicoService.getNemici().subscribe({
      next: (response) => {
        this.nemici = response;
        this.nemici = this.nemici.sort((a,b) => a._id - b._id).slice(0,4);
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.prendiDatiUtente();
  }

  prendiDatiUtente(){
    this.userService.datiUtente.subscribe((res: any) => {
      this.name = res.name;
      this.email = res.email;
      this.username= res.username;
  });
  }

  closeModal(){
    this.name= "";
    this.email= "";
    this.username= "";
  }
}
