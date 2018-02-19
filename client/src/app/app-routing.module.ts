import { Routes } from "@angular/router";
import { LoginComponent, HomeComponent, WorkoutComponent } from "./views/";


export const appRoutes: Routes = [
    //{ path: 'crisis-center', component: CrisisListComponent },
    { path: 'workouts/:workoutId', component: WorkoutComponent },
    { path: 'home',   component: HomeComponent },
    { path: '',   component: LoginComponent },
    { path: 'login',   component: LoginComponent },
    //{ path: '**', component: PageNotFoundComponent }
  ];