import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CoronavirusComponent } from './pages/coronavirus/coronavirus.component';
import { HomeComponent } from './pages/home/home.component';
import { CfpComponent } from './pages/cfp/cfp.component';
import { SponsorshipComponent } from './pages/sponsorship/sponsorship.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: 'coronavirus', component: CoronavirusComponent },
  { path: 'sponsorship', component: SponsorshipComponent },
  { path: 'cfp', component: CfpComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'speaker/:id', component: DetailComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
