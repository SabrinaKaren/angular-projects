import { Routes } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { AccessComponent } from './access/access.component';
import { AuthGuardService } from './services/auth-guard.service';

export const ROUTES: Routes = [
    { path: '', component: AccessComponent },
    { path: 'home', component: HomeComponent, canActivate: [ AuthGuardService ] }
]