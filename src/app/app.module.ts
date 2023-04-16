import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule} from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MaterialExampleModule } from 'src/material.module';

import { HeaderComponent } from './shared/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { NemiciComponent } from './components/nemici/nemici.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NemicoCardComponent } from './shared/nemico-card/nemico-card.component';
import { NemiciListComponent } from './components/nemici/nemici-list/nemici-list.component';
import { DetailComponent } from './components/nemici/detail/detail.component';
import { RegistrazioneComponent } from './users/registrazione/registrazione.component';
import { AggiungiNemicoComponent } from './components/nemici/aggiungi-nemico/aggiungi-nemico.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ResultComponent } from './components/nemici/result/result.component';
import { AreeComponent } from './components/aree/aree.component';
import { AreaCardComponent } from './shared/area-card/area-card.component';
import { AreeListComponent } from './components/aree/aree-list/aree-list.component';
import { AreaDetailComponent } from './components/aree/area-detail/area-detail.component';
import { AggiungiAreaComponent } from './components/aree/aggiungi-area/aggiungi-area.component';
import { EquipComponent } from './components/equip/equip.component';
import { ContattiComponent } from './components/contatti/contatti.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    NemiciComponent,
    FooterComponent,
    NemicoCardComponent,
    NemiciListComponent,
    DetailComponent,
    RegistrazioneComponent,
    AggiungiNemicoComponent,
    LoginComponent,
    ProfileComponent,
    ResultComponent,
    AreeComponent,
    AreaCardComponent,
    AreeListComponent,
    AreaDetailComponent,
    AggiungiAreaComponent,
    EquipComponent,
    ContattiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    CheckboxModule,
    PaginatorModule,
    HttpClientModule,
    ToastModule,
    CKEditorModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
