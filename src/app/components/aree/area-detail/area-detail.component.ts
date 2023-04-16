import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Area } from 'src/app/models/area.models';
import { AreaService } from 'src/app/service/area.service';

@Component({
  selector: 'app-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.scss']
})
export class AreaDetailComponent implements OnInit {

  area: Area;
  indiceAreaCorrente: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private areaService: AreaService){}

    ngOnInit(): void {
    this.onGetArea();
  }

    onGetArea(): void{
      const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
      this.areaService.getAree().subscribe({
        next: (res) => {
          const index = res.findIndex((a) => a._id === id);
        if (index !== -1) {
          this.area = res[index];
          this.indiceAreaCorrente = index;
        }
        },
        error: (err) => {
          console.log(err)
        }
      })
    }

    visualizzaPrecedente(): void {
      this.indiceAreaCorrente--;
      this.areaService.getAree().subscribe({
        next: (aree) => {
          if (this.indiceAreaCorrente < 0) {
            this.indiceAreaCorrente = aree.length - 1;
          }
          this.area = aree[this.indiceAreaCorrente];
        },
        error: (err) => {
          console.log(err)
        }
      });
    }

    visualizzaSuccessivo(): void {
      this.indiceAreaCorrente++;
      this.areaService.getAree().subscribe({
        next: (aree) => {
          if (this.indiceAreaCorrente >= aree.length) {
            this.indiceAreaCorrente = 0;
          }
          this.area = aree[this.indiceAreaCorrente];
        },
        error: (err) => {
          console.log(err)
        }
      });
    }
}
