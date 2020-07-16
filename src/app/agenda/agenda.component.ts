import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  tab = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleTab(tab) {
    this.tab = tab;
  }

}
