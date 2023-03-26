import { Component, OnInit } from '@angular/core';
import { Nemico } from 'src/app/models/nemico.models';
import { NemicoService } from 'src/app/service/nemico.service';

@Component({
  selector: 'app-nemici',
  templateUrl: './nemici.component.html',
  styleUrls: ['./nemici.component.scss']
})
export class NemiciComponent implements OnInit {
  nemici: Nemico[];

  constructor(private nemicoService: NemicoService) {}

  ngOnInit(): void {
    this.nemicoService.getNemici().subscribe({
      next: (response) => {
        this.nemici = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
