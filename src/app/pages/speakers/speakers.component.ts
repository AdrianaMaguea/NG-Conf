import { Component, OnInit } from '@angular/core';
import { SpeakersService, Speaker } from 'src/app/services/speakers.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  currentSpeaker: Speaker;
  speakers: Speaker[];

  constructor( private speakersService: SpeakersService) {
      this.speakers = speakersService.getSpeakers();
  }

  ngOnInit(): void {
  }

  addModal(speaker) {
    this.currentSpeaker = speaker;
  }

  removeModal() {
    this.currentSpeaker = null;
  }

}
