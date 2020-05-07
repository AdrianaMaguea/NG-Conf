import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CoronavirusComponent } from './pages/coronavirus/coronavirus.component';
import { HomeComponent } from './pages/home/home.component';
import { CfpComponent } from './pages/cfp/cfp.component';

const routes: Routes = [
  { path: 'coronavirus', component: CoronavirusComponent },
  { path: 'cfp', component: CfpComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
