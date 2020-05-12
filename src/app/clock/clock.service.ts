import { Injectable } from '@angular/core';
import { timer, Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ValCountDown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export class Clock {

  clock: Observable <Date>;
  infofecha$ = new Subject<ValCountDown>();
  vc: ValCountDown;
  countDownDate: number;
  
  constructor() {
    this.countDownDate = new Date("May 31, 2020 23:59:59").getTime();
    this.clock = timer(0,1000).pipe(
      map( t => new Date() ),
      shareReplay(1)
    );
  }
  
  getInfoReloj(): Observable<ValCountDown>{
    this.clock.subscribe( t => {

      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));

      this.vc = {
        days: days,
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      }
      this.infofecha$.next(this.vc);
    });
    return this.infofecha$.asObservable();
  }

}