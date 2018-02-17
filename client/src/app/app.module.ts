import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, LoginComponent } from './views/';
import { UserService, UserResource, WorkoutService, WorkoutResource } from './services/';
import { RolePipe } from './pipes';
import { ClientListComponent, WorkoutListComponent } from './components/';
import { MaterialModule } from './modules/material.module';
import { WorkoutComponent } from './views/workout/workout/workout.component';


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
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UserService, UserResource, WorkoutService, WorkoutResource],
  bootstrap: [AppComponent]
})
export class AppModule { }
