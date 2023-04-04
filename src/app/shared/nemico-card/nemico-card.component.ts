import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Nemico } from 'src/app/models/nemico.models';
import { NemicoService } from 'src/app/service/nemico.service';

@Component({
  selector: 'app-nemico-card',
  templateUrl: './nemico-card.component.html',
  styleUrls: ['./nemico-card.component.scss']
})
export class NemicoCardComponent implements OnInit {

  @Input() pag: string;
  @Output() messaggio = new EventEmitter();

  constructor(private nemicoService: NemicoService){}


  page = 1;
  nemiciPerPagina = 4;
  nemiciTotali: number;
  nemici: Nemico[];

  ngOnInit(): void {
    this.prendiNemici();
  }

  prendiNemici(){
    this.nemicoService.getNemici().pipe(take(1)).subscribe({
      next: (res) => {
        this.nemici = res;
        this.nemiciTotali = res.length;
        if(this.pag){
          this.nemici = this.nemici.sort((a, b) => b._id - a._id).slice(0, 4);
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
}
