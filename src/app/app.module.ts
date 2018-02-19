import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FirebaseCoursesComponent } from './firebase-courses/firebase-courses.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FirebaseCoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
