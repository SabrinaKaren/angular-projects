import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FunComponent } from './fun/fun.component';
import { ROUTES } from './app.routes';
import { OfferComponent } from './offer/offer.component';
import { HowUseComponent } from './offer/how-use/how-use.component';
import { WhereIsComponent } from './offer/where-is/where-is.component'
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    FooterComponent,
    RestaurantComponent,
    FunComponent,
    OfferComponent,
    HowUseComponent,
    WhereIsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt-Br'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }