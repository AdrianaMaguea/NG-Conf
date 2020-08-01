import { Component, OnInit, OnDestroy } from '@angular/core';
import { Speaker, SpeakersService } from 'src/app/services/speakers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  speaker: Speaker;
  translation: string;
  duration: string;
  private subscription: Subscription;

  constructor( private speakersService: SpeakersService, private route: ActivatedRoute ) {
  }
  
  ngOnInit(): void {
    this.subscription = this.route.params.subscribe( routeParams => {
      this.speaker = this.speakersService.getSpeakerById( +routeParams['id'] );
      this.speaker.interventions.forEach( intervention => intervention.translation = intervention.language === "Spanish" ? "English" : "Spanish");
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
