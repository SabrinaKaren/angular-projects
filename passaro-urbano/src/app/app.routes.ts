import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FunComponent } from './fun/fun.component';
import { OfferComponent } from './offer/offer.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurantes', component: RestaurantComponent },
    { path: 'diversao', component: FunComponent },
    { path: 'oferta', component: OfferComponent },
    { path: 'oferta/:id', component: OfferComponent },
]