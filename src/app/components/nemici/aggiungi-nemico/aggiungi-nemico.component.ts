import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NemicoService } from 'src/app/service/nemico.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aggiungi-nemico',
  templateUrl: './aggiungi-nemico.component.html',
  styleUrls: ['./aggiungi-nemico.component.scss']
})
export class AggiungiNemicoComponent implements OnInit {
  nemicoInserito: any;

  nome: string;
  descrizione: string;
  area: string;
  debolezza: string;
  immagine: string;

  form = new FormGroup ({
      nome : new FormControl('', Validators.required),
      descrizione: new FormControl('', Validators.required),
      area : new FormControl('', Validators.required),
      debolezza: new FormControl('', Validators.required),
      immagine: new FormControl('', Validators.required)
  })

  constructor(
    private nemicoService: NemicoService,
    private router: Router,
    private modalService: NgbModal
    ) {}

    ngOnInit(){
      this.prendiDatiNemico();
    }

    aggiungiNemico(){
      const nemico = this.form.value
      this.nemicoService.insertNemico(nemico).pipe(take(1)).subscribe({
        next: (res) => {
          console.log('response is ',res)
          this.nemicoInserito = res;
        },
        error: (err) => {
          console.log(err)
        }
      })
      this.nemicoService.datiNemico.next(nemico);
    }

    prendiDatiNemico(){
      this.nemicoService.datiNemico.subscribe((res: any) => {
        this.nome = res.nome;
        this.descrizione = res.descrizione;
        this.area = res.area;
        this.debolezza = res.debolezza;
        this.immagine = res.immagine;
      })
    }

    open(content: any, name?: string) {
      let nome = name;
      this.modalService.open(content, { ariaLabelledBy: 'modale nemici', size: 'lg', centered: true }).result.then((res) => {
        this.svuotaCampi();
        this.router.navigate(['aggiungi-nemico']);
      }).catch((res) => {
        this.router.navigate(['nemici'])
      })
    }

    svuotaCampi(){
      this.nemicoService.datiNemico.subscribe((res: any) => {
        res.nome = '';
        res.descrizione = '';
        res.area = '';
        res.debolezza = '';
        res.immagine = '';
      })
    }

    closeModal(){

      this.nemicoInserito = '';

      this.router.navigate(['nemici']);
    }

    onNewEnemy(){
      this.nemicoInserito= '';
      this.form.patchValue({
            nome: '',
            descrizione: '',
            area: '',
            debolezza: '',
            immagine: ''
      })

      this.router.navigate(['aggiungi-nemico']);
    }
}

