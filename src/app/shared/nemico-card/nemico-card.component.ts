import { Component, Input } from '@angular/core';
import { Nemico } from 'src/app/models/nemico.models';

@Component({
  selector: 'app-nemico-card',
  templateUrl: './nemico-card.component.html',
  styleUrls: ['./nemico-card.component.scss']
})
export class NemicoCardComponent {
  @Input() nemici: Nemico[];
}
