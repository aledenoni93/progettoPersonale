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
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { NemiciComponent } from './components/nemici/nemici.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NemicoCardComponent } from './shared/nemico-card/nemico-card.component';
import { NemiciListComponent } from './components/nemici/nemici-list/nemici-list.component';
import { DetailComponent } from './components/nemici/detail/detail.component';
import { RegistrazioneComponent } from './users/registrazione/registrazione.component';
import { AggiungiNemicoComponent } from './components/nemici/aggiungi-nemico/aggiungi-nemico.component';


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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
