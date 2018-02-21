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
import { HomeComponent, LoginComponent, WorkoutComponent, ProgramComponent, ProgramEditComponent } from './views/';
import { UserServiceFirebase, WorkoutService, WorkoutLoader, ProgramService, ExerciseService, UserService } from './services/';
import { RolePipe } from './pipes';
import { ClientListComponent, WorkoutListComponent, ProgramListComponent, ProgramDetailComponent, WorkoutEditComponent } from './components/';
import { MaterialModule } from './modules/material.module';
import { HttpModule } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { ExerciseListComponent } from './components/exercises/exercise-list/exercise-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RolePipe,
    ClientListComponent,
    WorkoutListComponent,
    WorkoutComponent,
    ProgramComponent,
    ProgramListComponent,
    ProgramDetailComponent,
    ProgramEditComponent,
    WorkoutEditComponent,
    ExerciseListComponent
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
  providers: [
    {provide: UserService, useClass: UserServiceFirebase}, 
    WorkoutService, 
    WorkoutLoader, 
    ExerciseService,
    ProgramService, 
    AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
