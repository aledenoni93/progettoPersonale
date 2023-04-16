import { NemicoService } from 'src/app/service/nemico.service';
import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
    user: any
    ricerca: string = '';

    constructor(
      private router: Router,
      public authService: AuthService,
      private nemicoService: NemicoService) {}

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'))
    };
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  result(){
    const currentRoute = this.router.url;
    if(currentRoute !== `/nemici/cerca/${this.ricerca}` ) {
      this.nemicoService.testoCercato.next(this.ricerca);
      this.router.navigate([`/nemici/cerca/${this.ricerca}`]);
      this.ricerca = '';
    } else {
      this.nemicoService.testoCercato.next(this.ricerca);
      this.router.navigate([`/nemici/cerca/${this.ricerca}`]);
      this.ricerca = '';
    }
  }
}
