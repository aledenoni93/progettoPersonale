import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NemicoService } from 'src/app/service/nemico.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-aggiungi-nemico',
  templateUrl: './aggiungi-nemico.component.html',
  styleUrls: ['./aggiungi-nemico.component.scss'],
  providers: [MessageService]
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

  Editor = ClassicEditorBuild;

  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'codeBlock',
            'blockQuote',
            'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
  };

  constructor(
    private nemicoService: NemicoService,
    private router: Router,
    private modalService: NgbModal,
    private messageService: MessageService
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
          this.messageService.add({severity: 'success', summary: 'succeso!', detail: 'Il nemico è stato perfettamente inserito'});
        },
        error: (err) => {
          console.log(err)
          this.messageService.add({severity: 'error', summary: 'ERROR!', detail: 'L inserimento del nemico non è andato a buon fine'});
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

    }
}

