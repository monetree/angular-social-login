
import { AppComponent } from './app.component';
import { environment } from './environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.facebook, 'social'),
    AngularFireModule.initializeApp(environment.google, 'social'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }