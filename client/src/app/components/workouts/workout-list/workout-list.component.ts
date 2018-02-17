import { Component, OnInit, Input } from '@angular/core';
import { Role, User, Workout } from '../../../model';
import { WorkoutService } from '../../../services/workout';
import { Router } from '@angular/router';

@Component({
  selector: 'workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  @Input() role: Role;
  @Input() user: User;
  public workouts: Workout[];

  constructor(private workoutService: WorkoutService,
              private router: Router) { }

  ngOnInit() {
    this.workoutService.getAllWorkouts().subscribe((workouts) => {
      this.workouts = workouts;
    });
  }

  showDetail(workoutId) {
    this.router.navigateByUrl(`workout/${workoutId}`);
  }

}
