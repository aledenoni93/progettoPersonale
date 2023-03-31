import { RegistrazioneComponent } from './users/registrazione/registrazione.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NemiciComponent } from './components/nemici/nemici.component';
import { NemiciListComponent } from './components/nemici/nemici-list/nemici-list.component';
import { DetailComponent } from './components/nemici/detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'nemici', component: NemiciComponent, children: [
    {path: 'dettaglio/:nome/:_id', component: DetailComponent},
    {path: '', pathMatch: 'full', component: NemiciListComponent}
  ]},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
