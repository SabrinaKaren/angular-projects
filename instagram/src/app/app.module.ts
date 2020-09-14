// Components
import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { BannerComponent } from './access/banner/banner.component';
import { RegisterComponent } from './access/register/register.component';
import { LoginComponent } from './access/login/login.component';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './home/publications/publications.component';
import { AddPublicationComponent } from './home/add-publication/add-publication.component';

// Services
import { DatabaseService } from './services/database.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ProgressService } from './services/progress.service';

// Diversos
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    BannerComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PublicationsComponent,
    AddPublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    NotifierModule.withConfig({
      position: { horizontal: { position: 'right', distance: 12 } },
      behaviour: { autoHide: 5000 }
    })
  ],
  providers: [ AuthService, AuthGuardService, DatabaseService, ProgressService ],
  bootstrap: [AppComponent]
})

export class AppModule { }