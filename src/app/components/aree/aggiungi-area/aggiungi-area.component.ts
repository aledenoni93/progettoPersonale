import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AreaService } from 'src/app/service/area.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-aggiungi-area',
  templateUrl: './aggiungi-area.component.html',
  styleUrls: ['./aggiungi-area.component.scss'],
  providers: [MessageService]
})
export class AggiungiAreaComponent {
  areaInserita: any;

  nome: string;
  descrizione: string;
  walkthrough: string;
  areaPrecendente: string;
  areaSuccessiva: string;
  immagine: string;
  immagineMappa: string;

  form = new FormGroup ({
    nome : new FormControl('', Validators.required),
    descrizione: new FormControl('', Validators.required),
    walkthrough : new FormControl('', Validators.required),
    areaPrecedente: new FormControl('', Validators.required),
    areaSuccessiva: new FormControl('',Validators.required),
    immagine: new FormControl('', Validators.required),
    immagineMappa: new FormControl('', Validators.required)
  })

  Editor = ClassicEditorBuild;
  Editor2 = ClassicEditorBuild

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

  editorConfig2 = {
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
    private areaService: AreaService,
    private router: Router,
    private modalService: NgbModal,
    private messageService: MessageService
    ) {}

    aggiungiArea(){
      const area = this.form.value
      this.areaService.insertArea(area).pipe(take(1)).subscribe({
        next: (res) => {
          console.log('response is ',res)
          this.areaInserita = res;
          this.messageService.add({severity: 'success', summary: 'succeso!', detail: 'L area è stata perfettamente inserito'});
        },
        error: (err) => {
          console.log(err)
          this.messageService.add({severity: 'error', summary: 'ERROR!', detail: 'L inserimento dell area non è andato a buon fine'});
        }
      })
      this.areaService.datiArea.next(area);
    }

    prendiDatiArea(){
      this.areaService.datiArea.subscribe((res: any) => {
        this.nome = res.nome;
        this.descrizione = res.descrizione;
        this.walkthrough = res.walkthrough;
        this.areaPrecendente = res.areaPrecedente;
        this.areaSuccessiva = res.areaSuccessiva;
        this.immagine = res.immagine;
        this.immagineMappa = res.immagineMappa;
      })
    }

    open(content: any, name?: string) {
      let nome = name;
      this.modalService.open(content, { ariaLabelledBy: 'modale aree', size: 'lg', centered: true }).result.then((res) => {
        this.svuotaCampi();
        this.router.navigate(['aggiungi-area']);
      }).catch((res) => {
        this.router.navigate(['aree'])
      })
    }

    svuotaCampi(){
      this.areaService.datiArea.subscribe((res: any) => {
        res.nome = '';
        res.descrizione = '';
        res.area = '';
        res.debolezza = '';
        res.immagine = '';
      })
    }

    closeModal(){

      this.areaInserita = '';

      this.router.navigate(['aree']);
    }

    onNewArea(){
      this.areaInserita= '';
      this.form.patchValue({
        nome: '',
        descrizione: '',
        walkthrough: '',
        areaPrecedente: '',
        areaSuccessiva: '',
        immagine: '',
        immagineMappa: '',
      })

    }
}
