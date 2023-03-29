import { Component, OnInit } from '@angular/core';
import { Nemico } from 'src/app/models/nemico.models';
import { NemicoService } from 'src/app/service/nemico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nemici: Nemico[];

  constructor(private nemicoService: NemicoService) {}

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
  }

}
