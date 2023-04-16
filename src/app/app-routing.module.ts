import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NemiciComponent } from './components/nemici/nemici.component';
import { NemiciListComponent } from './components/nemici/nemici-list/nemici-list.component';
import { DetailComponent } from './components/nemici/detail/detail.component';
import { RegistrazioneComponent } from './users/registrazione/registrazione.component';
import { AggiungiNemicoComponent } from './components/nemici/aggiungi-nemico/aggiungi-nemico.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { LoggedInGuard } from './logged-in.guard';
import { ResultComponent } from './components/nemici/result/result.component';
import { AreeComponent } from './components/aree/aree.component';
import { AreeListComponent } from './components/aree/aree-list/aree-list.component';
import { AreaDetailComponent } from './components/aree/area-detail/area-detail.component';
import { AggiungiAreaComponent } from './components/aree/aggiungi-area/aggiungi-area.component';
import { EquipComponent } from './components/equip/equip.component';
import { ContattiComponent } from './components/contatti/contatti.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'nemici', component: NemiciComponent, children: [
    {path: 'dettaglio/:nome/:_id', component: DetailComponent},
    {path: 'aggiungi-nemico', component: AggiungiNemicoComponent},
    {path: 'cerca/:text', component: ResultComponent},
    {path: '', pathMatch: 'full', component: NemiciListComponent}
  ]},
  {path: 'aree', component: AreeComponent, children: [
    {path: 'dettaglio/:nome/:_id', component: AreaDetailComponent},
    {path: 'aggiungi-area', component: AggiungiAreaComponent},
    {path: '', pathMatch: 'full', component: AreeListComponent}
  ]},
  {path: 'equip', component: EquipComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
