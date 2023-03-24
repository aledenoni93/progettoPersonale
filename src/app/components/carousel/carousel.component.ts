import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  images = [
    {id : 1,
    label : "Benvenuto nella guida strategica di Dark Souls 3!"},
    {id : 2,
      label : "Guida a tutte le ambientazioni del gioco."},
    {id : 3,
      label : "Le schede dei nemici e le migliori strategie per batterli."},
  ];

  percorso = "../assets/images/carousel-";

}
