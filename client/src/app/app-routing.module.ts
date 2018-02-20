import { Routes } from "@angular/router";
import { LoginComponent, HomeComponent, WorkoutComponent, ProgramComponent, ProgramEditComponent } from "./views/";
import { ProgramDetailComponent } from "./components";


export const appRoutes: Routes = [
    { path: '',   component: LoginComponent },
    { path: 'login',   component: LoginComponent },
    { path: 'home',   component: HomeComponent },
    { path: 'workouts/:workoutId', component: WorkoutComponent },
    { path: 'programs', component: ProgramComponent },
    { path: 'programs/create', component: ProgramEditComponent, data: {action:"create"} },
    { path: 'programs/edit/:programId', component: ProgramEditComponent, data: {action:"edit"} },
    { path: 'programs/:programId', component: ProgramDetailComponent },
  ];