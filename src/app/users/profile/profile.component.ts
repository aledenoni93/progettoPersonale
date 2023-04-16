import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import * as moment from 'moment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  data: any;
  aggiornamento: any;

  constructor( private userService: UserService){}

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'))
      this.onGetUser();
  }
}

onGetUser(): void {
  const username = this.user.username
  this.userService.getUser(username).pipe(take(1))
  .subscribe({
    next: (res) =>  {
      this.user = res;
      this.data = moment(this.user.createdAt).locale('it').format('DD MMMM YYYY');
      this.aggiornamento= moment(this.user.createdAt).locale('it').format('DD MMMM YYYY');
    },
    error: err => console.log(err)
  })
}
}
