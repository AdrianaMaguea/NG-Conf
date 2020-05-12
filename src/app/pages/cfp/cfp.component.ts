import { Component, OnInit } from '@angular/core';
import { Clock, ValCountDown } from '../../clock/clock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cfp',
  templateUrl: './cfp.component.html',
  styleUrls: ['./cfp.component.scss']
})
export class CfpComponent implements OnInit {
  datos$: Observable<ValCountDown>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;
  daysLeft: number;
  hoursLeft: number;
  minutesLeft: number;
  secondsLeft: number;

  constructor(private segundo: Clock) {
  }

  ngOnInit(): void {
    this.datos$=this.segundo.getInfoReloj();
    this.datos$.subscribe( x => {
      this.daysLeft = x.days;
      this.hoursLeft = x.hours;
      this.minutesLeft = x.minutes;
      this.secondsLeft = x.seconds;
    });
  }

}
