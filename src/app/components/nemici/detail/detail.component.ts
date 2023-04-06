import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nemico } from 'src/app/models/nemico.models';
import { NemicoService } from 'src/app/service/nemico.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  nemico : Nemico;

  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private nemicoService: NemicoService
  ){}

  ngOnInit(): void {
    this.onGetNemico();
  }


  onGetNemico(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.nemicoService.getNemico(id).subscribe({
      next: (res) => {
        this.nemico = res;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onGetNemico2(): void {
    this.activatedRoute.params.subscribe((parametriUrl) => {
      const id = parametriUrl['_id'];
      const idnumerico = Number(id);

      this.nemicoService.getNemico(id).subscribe({
        next: (res) => {
          this.nemico = res;
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
    )
  }

}
