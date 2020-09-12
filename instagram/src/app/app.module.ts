import { DatabaseService } from './services/database.service';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { BannerComponent } from './access/banner/banner.component';
import { RegisterComponent } from './access/register/register.component';
import { LoginComponent } from './access/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './home/publications/publications.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { NotifierModule } from 'angular-notifier';
import { AddPublicationComponent } from './home/add-publication/add-publication.component';

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
  providers: [ AuthService, AuthGuardService, DatabaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
