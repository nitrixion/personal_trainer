import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, LoginComponent, WorkoutComponent } from './views/';
import { UserService, UserResource, WorkoutService, WorkoutResource } from './services/';
import { RolePipe } from './pipes';
import { ClientListComponent, WorkoutListComponent } from './components/';
import { MaterialModule } from './modules/material.module';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { ExerciseService } from './services/exercise/exercise.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RolePipe,
    ClientListComponent,
    WorkoutListComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, 
    AngularFirestoreModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UserService, UserResource, WorkoutService, WorkoutResource, ExerciseService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
