import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SinglePageMenuComponent } from './single-page-menu/single-page-menu.component';
import { DescriptionComponent } from './description/description.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { DescriptionAngularComponent } from './description-angular/description-angular.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { FooterComponent } from './footer/footer.component';
import { MailComponent } from './mail/mail.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CoronavirusComponent } from './pages/coronavirus/coronavirus.component';
import { HomeComponent } from './pages/home/home.component';
import { CfpComponent } from './pages/cfp/cfp.component';
import { Clock } from './clock/clock.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResponsiveLogoComponent } from './shared/responsive-logo/responsive-logo.component';
import { SponsorshipComponent } from './pages/sponsorship/sponsorship.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { CommunityComponent } from './community/community.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { AgendaComponent } from './agenda/agenda.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SinglePageMenuComponent,
    DescriptionComponent,
    BenefitsComponent,
    SpeakerComponent,
    DescriptionAngularComponent,
    OrganizerComponent,
    CollaboratorsComponent,
    SponsorComponent,
    FooterComponent,
    MailComponent,
    TicketsComponent,
    CoronavirusComponent,
    HomeComponent,
    CfpComponent,
    ResponsiveLogoComponent,
    SponsorshipComponent,
    PartnersComponent,
    CommunityComponent,
    SpeakersComponent,
    AgendaComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [ Clock ],
  bootstrap: [AppComponent]
})
export class AppModule { }
