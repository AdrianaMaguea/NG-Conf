import { Component, OnInit } from '@angular/core';
import { Clock, ValorReloj } from '../../clock/clock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cfp',
  templateUrl: './cfp.component.html',
  styleUrls: ['./cfp.component.scss']
})
export class CfpComponent implements OnInit {
  datos$: Observable<ValorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;

  constructor(private segundo: Clock) {
  }

  ngOnInit(): void {
    this.datos$=this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });
  }

}
