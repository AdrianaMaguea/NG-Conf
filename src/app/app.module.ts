import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DescriptionComponent } from './description/description.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { DescriptionAngularComponent } from './description-angular/description-angular.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { FooterComponent } from './footer/footer.component';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    DescriptionComponent,
    BenefitsComponent,
    SpeakerComponent,
    DescriptionAngularComponent,
    OrganizerComponent,
    CollaboratorsComponent,
    SponsorComponent,
    FooterComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
